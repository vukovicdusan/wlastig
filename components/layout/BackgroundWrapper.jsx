const BackgroundWrapper = (props) => {
	return (
		<div
			style={
				props.bckg && {
					backgroundColor: `${props.bckg}`,
				}
			}
		>
			{props.children}
		</div>
	);
};

export default BackgroundWrapper;
