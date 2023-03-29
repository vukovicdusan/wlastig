import * as React from "react"

const AnalyticsSvg = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
		style={{
			enableBackground: "new 0 0 512 512",
		}}
		xmlSpace="preserve"
		{...props}
	>
		<path
			style={{
				fill: "var(--primary)",
			}}
			d="M239.35 238.7V33.3c-126.459 0-228.943 102.484-228.943 228.943 0 57.219 21.046 109.501 55.757 149.64L239.35 238.7z"
		/>
		<path
			style={{
				fill: "var(--secondary)",
			}}
			d="M262.894 262.244 89.708 435.428c40.133 34.708 92.411 55.757 149.642 55.757 126.459 0 228.943-102.525 228.943-228.943H262.894v.002z"
		/>
		<path
			style={{
				fill: "#242d3c",
			}}
			d="M176.922 218.547h20.813v20.813h-20.813zM135.286 218.547h20.813v20.813h-20.813zM93.658 218.547h20.813v20.813H93.658zM309.082 153.672 413.914 48.837a230.146 230.146 0 0 0-17.175-12.257L289.864 143.455c6.725 2.862 13.135 6.302 19.218 10.217zM272.65 0v29.432l27.702-27.704C291.267.63 282.033 0 272.65 0zM358.131 211.735l106.883-106.883a229.568 229.568 0 0 0-12.257-17.175L347.919 192.515c3.912 6.082 7.348 12.497 10.212 19.22zM321.039 5.171 272.65 53.56v29.432l71.532-71.537a226.47 226.47 0 0 0-23.143-6.284zM337.649 178.662 441.728 74.58a231.577 231.577 0 0 0-14.715-14.715L322.931 163.948a130.339 130.339 0 0 1 14.718 14.714zM499.866 201.239l-27.702 27.702h29.43c0-9.38-.633-18.617-1.728-27.702zM490.138 157.409l-71.532 71.532h29.432l48.389-48.389a227.95 227.95 0 0 0-6.289-23.143zM474.04 119.951 365.051 228.943h29.43l89.121-89.121a228.745 228.745 0 0 0-9.562-19.871zM361.777 17.992l-89.126 89.121v29.432L381.642 27.553a228.343 228.343 0 0 0-19.865-9.561zM387.789 491.187h80.504V512h-80.504zM468.293 471.675H383.48l-59.975-59.976 14.722-14.715 53.87 53.878h76.196zM10.406 12.488H90.91v20.813H10.406zM140.472 127.503l-53.87-53.877H10.406V52.813h84.813l59.976 59.975z"
		/>
	</svg>
)

export default AnalyticsSvg
