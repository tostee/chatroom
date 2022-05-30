import { useEffect, useRef, useState } from "react";
import useSocket from "../hooks/useSocket";
import { AvatarCircle } from "./Avatar";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatRoom = ({ onLogout, user }) => {
	const socket = useSocket();
	const [messages, setMessages] = useState([]);

	///////////////////////////////
	// block the view to last chat
	//////////////////////////////
	const blockend = useRef(null);

	useEffect(() => {
		socket.connect();
		socket.emit("conected", user);
		socket.on("messages", receiveMessage);

		return () => {
			socket.emit("logout");
			socket.off();
		};
	}, []);

	const receiveMessage = (message) => {
		setMessages((prev) => [...prev, message]);

		// scroll to bottom after while when last message is received
		setTimeout(
			() => blockend.current.scrollIntoView({ behavior: "smooth" }),
			10
		);
	};

	const sendMessage = (message) => {
		socket.emit("chat", user, message);
	};

	return (
		<div className="flex flex-col h-screen bg-slate-700">
			<Header
				user={user}
				onLogout={() => {
					socket.emit("logout");
					onLogout?.();
				}}
			/>

			<div
				className="flex-1 flex flex-col p-4 overflow-y-auto scrollbar-thumb-blue gap-2 items-stretch
				scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
			>
				{messages.map((m) => (
					<Message key={m.id} message={m} user={user} />
				))}
				<div ref={blockend} className="w-full"></div>
			</div>

			<SendMessage onMessage={(m) => sendMessage(m)} />
		</div>
	);
};

const Header = ({ user, onLogout }) => {
	return (
		<div className="flex items-center h-16 px-4 gap-4 w-full bg-slate-800 shadow-md">
			<AvatarCircle src={user.avatar} />
			<h3 className="text-gray-200 flex-1 text-2xl truncate">
				{user.username}
			</h3>
			<button
				title="Logout"
				onClick={() => onLogout()}
				className="grid place-items-center rounded-full border h-10 w-10 outline-none
				aspect-square bg-red-500 text-gray-100 hover:bg-red-700"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-slate-200"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
					/>
				</svg>
			</button>
		</div>
	);
};

export default ChatRoom;
