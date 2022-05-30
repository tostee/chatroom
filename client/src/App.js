import { useState } from "react";
import ChatRoom from "./components/ChatRoom";
import Form from "./components/Form";

const defaultUser = { usename: "", avatar: "/assets/images/avatars/1.png" };

const App = () => {
	const [user, setUser] = useState(defaultUser);
	const [register, setRegister] = useState(false);

	const disconnect = () => {
		setRegister(false);
		setUser(defaultUser);
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
						setRegister(true);
					}}
				/>
			</div>
		);
	}

	return <ChatRoom onLogout={disconnect} user={user} />;
};

export default App;
