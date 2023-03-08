import React from "react"
import { AnimationContainerStyled } from "./styles/AnimationContainerStyled.styled"

const AnimationContainer = (props) => {
	let animationRef = React.useRef()
	const [show, setShow] = React.useState(false)

	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setShow(true)
				}
			})
		})
		observer.observe(animationRef.current)
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
