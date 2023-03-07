import styled from "styled-components"

export const Sidebar = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${(props) => props.sidebarGap || "var(--s1)"};

	& > ${(props) => (props.reverse ? ":last-child" : ":first-child")} {
		flex-grow: 1;
	}

	& > ${(props) => (props.reverse ? ":first-child" : ":last-child")} {
		flex-basis: 0;
		flex-grow: 999;
		min-inline-size: ${(props) => props.sidebarPercent || "50%"};
	}
`
