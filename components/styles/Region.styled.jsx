import styled from "styled-components"

export const Region = styled.section`
	margin-block-start: ${(props) => (props.first ? "65px" : "")};
	padding-bottom: 4rem;
	padding-top: 4rem;
	padding-top: ${(props) =>
		props.pt || "clamp(2.67rem, 2.07rem + 3vw, 4.21rem)"};
	padding-bottom: ${(props) =>
		props.pb || "clamp(2.67rem, 2.07rem + 3vw, 4.21rem)"};
`
