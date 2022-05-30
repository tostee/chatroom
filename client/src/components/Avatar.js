const Avatar = ({ src, id, onClick, closemodal }) => {
	return (
		<div onClick={closemodal} id={id}>
			<div className="flex items-center hover:cursor-pointer p-5 text-base font-bold text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white active:bg-teal-500">
				<img
					id={src}
					alt="avatar"
					className="h-10 w-10 "
					src={`/assets/images/avatars/${src}.png`}
					onClick={onClick}
				></img>
			</div>
		</div>
	);
};
export default Avatar;
