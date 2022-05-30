const Youmessage = ({ message, avatar, user }) => {
	return (
		<div>
			<div className="flex items-end">
				<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
					<div>
						<p className="text-green-400">{user}</p>
						<p className="px-4 py-2 rounded-lg rounded-tl-none inline-block bg-gray-500 text-white">
							{message}
						</p>
					</div>
				</div>
				<img
					src={`/assets/images/avatars/${avatar}.png`}
					alt="My profile"
					className="w-6 h-6 rounded-full order-1"
				/>
			</div>
		</div>
	);
};
export default Youmessage;
