import "./App.css";
import Form from "./components/Form";
import React, { useState } from "react";

import socket from "./components/Socket";
import Chatroom from "./components/pagecomponents/chatroom";

const App = () => {
	const [user, setUser] = useState({ username: "", avatar: "0" });
	const [register, setRegister] = useState(false);
	const [errormessage, setErrormessage] = useState({
		errormessage: "",
		color: "",
	});
	const disconnect = () => {
		setRegister(false);
		setUser({ username: "", avatar: "0" });
		socket.emit("logout");
	};

	const validate = () => {
		if (/\s/.test(user.username)) {
			setErrormessage({
				errormessage: "Username cannot contain blank characters",
				color: "red",
			});
			return false;
		}
		if (user.username.length < 4) {
			setErrormessage({
				errormessage: "Username must be more than 4 characters",
				color: "red",
			});
			return false;
		} else if (user.username.length > 20) {
			setErrormessage({
				errormessage: "Username must be less than 20 characters",
				color: "red",
			});
			return false;
		} else if (user.username.length > 4 && user.username.length < 20) {
			setErrormessage({
				errormessage: "",
				color: "",
			});
			return true;
		}
	};

	const joinchat = (e) => {
		e.preventDefault();

		if (validate()) {
			setRegister(true);
			socket.connect();
		}
	};

	if (!register) {
		return (
			<div
				className="fixed grid items-center w-full h-full bg-slate-800"
				style={{ backgroundImage: `url(/assets/images/avatars/chat.svg)` }}
			>
				<Form
					errormessage={errormessage}
					onChange={(e) =>
						setUser((prev) => {
							prev.username = e.target.value;
							validate();
							return prev;
						})
					}
					onSubmit={joinchat}
					user={user}
					id="main1"
					onClick={(e) =>
						setUser((prev) => {
							prev.avatar = e.target.id;
							//console.log(prev)
							return prev;
						})
					}
				/>
			</div>
		);
	} else {
		return <Chatroom onClick={disconnect} user={user} />;
	}
};

export default App;
