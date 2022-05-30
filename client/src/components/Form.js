import Mymodal from "./Mymodal";
import React, { useState } from "react";

const Form = ({ onComplete, onChange, initialAvatar }) => {
	const [avatar, setAvatar] = useState(initialAvatar);
	const [username, setUsername] = useState("");
	const [error, setError] = useState(null);

	let color = "";
	if (error) {
		color = "red-700";
	} else {
		color = "gray-700";
	}

	const validate = (value) => {
		if (/^[a-bA-Z]+[a-bA-Z0-9]*$/.test(value)) {
			return "Username cannot contain blank characters.";
		}

		if (value.length < 4) {
			return "Username must be more than 4 characters.";
		}

		if (value.length > 20) {
			return "Username must be less than 20 characters";
		}

		return null;
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (!error) {
			onComplete({ username, avatar });
		}
	};

	return (
		<form
			className="sm:mx-16 md:mx-60 lg:mx-[450px] w-full max-w-sm bg-white rounded-md"
			onSubmit={onSubmit}
		>
			<div className="flex flex-col border-b border-teal-500 py-2">
				<div className="border-b-2 border-gray-200 pb-1">
					<input
						className={`appearance-none bg-transparent w-4/5 border-2 ml-1 text-${color} mr-3 py-1 px-2 leading-tight focus:outline-none required:border-red-500`}
						type="text"
						value={username}
						placeholder="Chat Nickname"
						onChange={(e) => {
							const value = e.target.value;
							const err = validate(value);
							setError(err);
							setUsername(value);
						}}
						aria-label="Full name"
					/>

					<Button type="submit">Join</Button>

					<Display show={error}>
						<p className="mt-2 text-sm ml-2 text-red-600 dark:text-red-500">
							<span className="font-medium">Oops!</span> {error ?? ""}
						</p>
					</Display>
				</div>
				<div className="">
					<div className="flex items-center justify-center bg-gray-100 bg-opacity-5 mt-2">
						<Mymodal onSelect={(index) => setAvatar(index)} avatar={avatar} />
					</div>
				</div>
			</div>
		</form>
	);
};

const Button = ({ children, onClick, type }) => {
	return (
		<button
			onClick={onClick}
			type={type ?? "button"}
			className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-base border-4 text-white py-1 px-2 rounded mr-1"
		>
			{children}
		</button>
	);
};

const Display = ({ show, children }) => {
	return show ? children : <></>;
};

export default Form;
