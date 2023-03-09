import styled from "styled-components"

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
		transition-delay: ${(props) => "0." + props.delay || "0"}s;
	}
`
