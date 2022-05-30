import "./index.css";
import Form from "./components/Form";
import React, { useState } from "react";

import socket from "./components/Socket";
import Chatroom from "./components/pagecomponents/Chatroom";

const defaultUser = { usename: "", avatar: "/assets/images/avatars/1.png" };

const App = () => {
	const [user, setUser] = useState(defaultUser);
	const [register, setRegister] = useState(false);

	const disconnect = () => {
		setRegister(false);
		setUser(defaultUser);
		socket.emit("logout");
		socket.off();
	};

	const joinchat = () => {
		setRegister(true);
		socket.connect();
	};

	if (!register) {
		return (
			<div
				className="grid place-items-center w-full min-h-screen bg-slate-800 p-4"
				style={{ backgroundImage: `url(/assets/images/avatars/chat.svg)` }}
			>
				<Form
					initialAvatar={user.avatar}
					onComplete={({ username, avatar }) => {
						setUser({ username, avatar });
						joinchat();
					}}
				/>
			</div>
		);
	}

	return <Chatroom onLogout={disconnect} user={user} />;
};

export default App;
