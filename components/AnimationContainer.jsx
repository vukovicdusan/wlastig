import React from "react"
import styled from "styled-components"

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

let direction = (props) => props.direction || "translateY"
let distance = (props) => props.distance || "500px"

export const AnimationContainerStyled = styled.div`
	overflow: hidden;

	.hidden {
		opacity: 0;
		transition: all 1s ease;
		transform: ${direction}(${distance});
	}

	.show {
		opacity: 1;
		transform: ${direction}(0);
		transition: all 1s ease;
		transition-delay: ${(props) =>
			props.delay ? "0." + props.delay : "0"}s;
	}
`

export default AnimationContainer
