import Modal from "react-modal";
import React, { useState } from "react";
import Avatar from "./Avatar";
import avatars from "../avatars";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		padding: "1px 1px 1px 1px",
	},
};

const MyModal = ({ onSelect, avatar }) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
	Modal.setAppElement("#root");

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<label
				className="w-36 flex flex-col items-center px-1 py-1 bg-white text-teal-500 rounded-lg shadow-lg tracking-wide border border-teal-500 cursor-pointer hover:bg-teal-500 hover:text-white"
				onClick={openModal}
			>
				<Previewavatar avatar={avatar} />
				<span className="mt-1 text-sm">Choose Avatar</span>
			</label>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<div className="relative p-4 w-full max-w-md h-full md:h-auto">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<button
							onClick={closeModal}
							className="absolute top-3 right-2.5 text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
							data-modal-toggle="crypto-modal"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						<div className="py-4 px-4 justify-center rounded-t bg-teal-500 border-b dark:border-gray-600">
							<h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
								Select Avatar
							</h3>
						</div>

						<div className="p-6 grid grid-cols-3 gap-4">
							{avatars.map((e) => {
								return (
									<Avatar
										key={e.key}
										src={e.src}
										onClick={(_) => {
											onSelect(e.src);
											closeModal();
										}}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

const Previewavatar = ({ avatar }) => {
	if (avatar) return <Avatar src={avatar} />;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth="2"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
			/>
		</svg>
	);
};

export default MyModal;
