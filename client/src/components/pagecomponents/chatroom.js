import React, { useState, useEffect, useRef } from "react";
import BroadcastMessage from "../Broadcastmessage";
import Mymessage from "../Mymessage";
import Sendmessage from "../Sendmessage";
import socket from "../Socket";
import Youmessage from "../Youmessage";

const Chatroom = ({ onLogout, user }) => {
	console.log("Chat");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	///////////////////////////////
	//block the view to last chat//
	//////////////////////////////
	const blockend = useRef(null);

	useEffect(() => {
		socket.emit("conected", user);
		socket.on("messages", (m) => receiveMessage(m));
	}, []);

	const receiveMessage = (message) => {
		setMessages([...messages, message]);
		blockend.current.scrollIntoView({ behavior: "smooth" });
	};

	const submit = (e) => {
		e.preventDefault();
		socket.emit("chat", user, message);
		setMessage("");
	};

	return (
		<div class="flex-1 p:2 sm:p-6 justify-between flex flex-col bg-slate-100 h-screen">
			<div class="flex sm:items-center justify-between py-3 border-b-2 bg-slate-800 border-gray-200">
				<div class="relative flex items-center space-x-4">
					<div class="relative pl-2">
						<img
							src={user.avatar}
							class="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
							alt="avatar"
						/>
					</div>
					<div class="flex flex-col leading-tight">
						<div class="text-2xl mt-1 flex items-center">
							<span class="text-gray-200 mr-3">{user.username}</span>
						</div>
					</div>
				</div>
				<div class="flex items-center space-x-2 pr-2">
					<button
						title="logout"
						onClick={() => onLogout()}
						class="inline-flex items-center justify-center rounded-full border h-10 w-10 transition duration-500 ease-in-out bg-red-500 text-gray-100 hover:bg-red-700 focus:outline-none"
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
			</div>
			<div
				id="messages"
				class="flex flex-col bg-slate-700 h-full space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
			>
				{messages.map((e, i) => {
					if (e.user.username === user.username) {
						return <Mymessage message={e.message} avatar={e.user.avatar} />;
					} else if (e.user === "server") {
						return <BroadcastMessage message={e.message} />;
					} else {
						return (
							<Youmessage
								message={e.message}
								avatar={e.user.avatar}
								user={e.user.username}
							/>
						);
					}
				})}
				<div ref={blockend}></div>
			</div>
			<div class="bg-slate-700 p-2 mb-2 sm:mb-0">
				<form onSubmit={submit}>
					<Sendmessage
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</form>
			</div>
		</div>
	);
};

export default Chatroom;
