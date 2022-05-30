const Avatar = ({ src, onClick }) => {
	return (
		<div
			onClick={onClick}
			className="h-10 w-10 cursor-pointer rounded-lg overflow-hidden bg-white"
		>
			<img alt="Avatar" className="h-full w-full object-cover" src={src} />
		</div>
	);
};
export default Avatar;
