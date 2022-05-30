import { useState } from "react";

const SendMessage = ({ onMessage }) => {
	const [message, setMessage] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		// only notify if message is not empty
		if (message) {
			onMessage?.(message);
			setMessage("");
		}
	};

	return (
		<form onSubmit={onSubmit} className="px-4 py-2 bg-slate-800">
			<div className="relative h-10">
				<input
					autoFocus
					type="text"
					value={message}
					placeholder="Write your message!"
					onChange={(e) => setMessage(e.target.value)}
					className="w-full h-full outline-none text-white bg-slate-700 rounded-md py-3 pl-3 pr-12"
				/>

				<button
					title="Send"
					type="submit"
					className={`absolute top-0 right-0 h-full grid place-items-center aspect-square p-2
					outline-none ${message ? "text-gray-200" : "text-gray-400"}`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="transform rotate-90"
					>
						<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
					</svg>
				</button>
			</div>
		</form>
	);
};
export default SendMessage;
