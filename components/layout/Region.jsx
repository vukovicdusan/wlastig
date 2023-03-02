const Region = (props) => {
	return (
		<div
			className="region"
			style={
				props.bottomPadding && {
					paddingBottom: `${props.bottomPadding}`,
				}
			}
		>
			{props.children}
		</div>
	);
};

export default Region;
