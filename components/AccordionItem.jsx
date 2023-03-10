import React from "react"
import { AccordionItemStyled } from "./styles/AccordionItemStyled.styled"
import { Stack } from "./styles/Stack.styled"

const AccordionItem = (props) => {
	const [accordionOpen, setAccordionOpen] = React.useState(false)

	const accordionRef = React.useRef()

	const accordionToggle = (e) => {
		e.preventDefault()
		!accordionOpen ? setAccordionOpen(true) : setAccordionOpen(false)

		if (accordionRef.current.style.maxHeight) {
			accordionRef.current.style.maxHeight = null
		} else {
			accordionRef.current.style.maxHeight =
				accordionRef.current.scrollHeight + "px"
		}
	}

	return (
		<AccordionItemStyled color={props.color}>
			<Stack stackJustify={"center"} stackAlign={"space-between"}>
				<div onClick={accordionToggle} className="accordion-title">
					<h4>{props.accTitle}</h4>
					<svg
						className={accordionOpen ? "rotate" : null}
						width={25}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 330 330"
					>
						<path d="M304 139L165 279 26 139a15 15 0 00-22 22l150 150a15 15 0 0022 0l150-150a15 15 0 10-22-22z"></path>
						<path d="M154 191a15 15 0 0022 0L326 41a15 15 0 10-22-22L165 159 26 19A15 15 0 104 41l150 150z"></path>
					</svg>
				</div>
				<div ref={accordionRef} className="accordion-body">
					{props.accBody}
				</div>
			</Stack>
		</AccordionItemStyled>
	)
}

export default AccordionItem
