import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Contact from "./Contact"

const Modal = () => {
	const [modalOpen, setModalOpen] = useState(false)
	const modalCloseHandler = () => {}

	useEffect(() => {
		modalOpen
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto")
	}, [modalOpen])
	return (
		<>
			{modalOpen ? (
				<ModalStyled>
					<dialog>
						<span
							onClick={modalCloseHandler}
							className="modal-close"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="#f8f8ff"
							>
								<path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z" />
							</svg>
						</span>
						<Contact popup={true}></Contact>
					</dialog>
				</ModalStyled>
			) : null}
		</>
	)
}

export const ModalStyled = styled.div`
	position: fixed;
	inset-block-start: 50%;
	inset-inline-start: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(0, 0, 0, 0.7);
	backdrop-filter: blur(0);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	z-index: 10;
	overflow: auto;
	opacity: 1;
	transition: all 0.4s ease-in;

	dialog {
		display: block;
		background-color: transparent;
		color: revert;
		border: none;
		padding: 0;
		margin-block: auto;
	}

	.modal-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 10;
	}

	.modal-close svg {
		fill: var(--secondary);
		transition: fill 0.2s ease;
	}

	.modal-close svg:hover {
		fill: var(--primary);
	}
`

export default Modal
