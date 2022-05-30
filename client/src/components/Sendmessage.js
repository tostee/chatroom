import React, { useState, useEffect, useRef } from "react";

const Sendmessage = ({ value, onChange }) => {
	const [message, setMessage] = useState("");

	return (
		<div className="relative flex ">
			<span className="absolute inset-y-0 flex items-center">
				<button
					type="button"
					className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-300 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-6 w-6 text-gray-300"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</button>
			</span>
			<input
				type="text"
				value={value}
				onChange={onChange}
				placeholder="Write your message!"
				className="w-full focus:outline-none focus:placeholder-white text-white placeholder-white pl-12 bg-gray-500 rounded-lg py-3"
			/>

			<button className="inline-flex items-center justify-center rounded-full px-2 py-2 ml-1 text-white bg-green-600 hover:bg-green-500 focus:outline-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="h-6 w-6 ml-2 transform rotate-90"
				>
					<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
				</svg>
			</button>
		</div>
	);
};
export default Sendmessage;
