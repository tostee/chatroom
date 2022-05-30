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

export const AvatarCircle = ({ src, title, className }) => {
	const cNames = className ?? "w-10 h-10";
	return (
		<div
			title={title}
			className={`${cNames} aspect-square rounded-full overflow-hidden bg-white`}
		>
			<img alt="Avatar" className="h-full w-full object-cover" src={src} />
		</div>
	);
};

export default Avatar;
