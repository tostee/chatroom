import { AvatarCircle } from "./Avatar";

const Message = ({ message, user }) => {
	if (message.user === "server") {
		return <ServerMessage message={message.message} />;
	}

	const isUser = message.user.username === user.username;
	const side = isUser ? "chat-bubble__right" : "chat-bubble__left";
	const order = isUser ? "order-1" : "order-2";

	return (
		<div className={`chat-bubble ${side}`}>
			<div className={`chat-bubble__content ${order}`}>
				<p>{message.message}</p>
			</div>
			<AvatarCircle
				src={message.user.avatar}
				title={message.user.username}
				className="w-6 h-6 order-1"
			/>
		</div>
	);
};

const ServerMessage = ({ message }) => {
	return (
		<div className="flex justify-center">
			<p className="text-xs px-3 py-2 rounded bg-slate-800 text-white">
				{message}
			</p>
		</div>
	);
};

export default Message;
