import React from "react"
import { AnimationContainerStyled } from "./styles/AnimationContainerStyled.styled"

const AnimationContainer = (props) => {
	let animationRef = React.useRef()
	const [show, setShow] = React.useState(false)

	React.useEffect(() => {
		let config = {
			threshold: 0.4,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setShow(true)
				}
			})
		}, config)
		observer.observe(animationRef.current)
		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<AnimationContainerStyled
			direction={props.direction}
			distance={props.distance}
			delay={props.delay}
			ref={animationRef}
		>
			<div className={show ? "show" : "hidden"}>{props.children}</div>
		</AnimationContainerStyled>
	)
}

export default AnimationContainer
