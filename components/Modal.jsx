import { useRouter } from "next/router"
import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import ModalCtx from "../public/store/ModalCtx"
import Contact from "./Contact"

const Modal = (props) => {
	const modalCtx = useContext(ModalCtx)
	const router = useRouter()

	const [modalOpen, setModalOpen] = useState(false)

	const modalCloseHandler = () => {
		modalOpen ? setModalOpen(false) : setModalOpen(true)
		props.modalClosedHandler()
	}

	useEffect(() => {
		props.forceOpen ? setModalOpen(true) : setModalOpen(false)
	}, [props.forceOpen])

	useEffect(() => {
		modalOpen
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "auto")
	}, [modalOpen])

	useEffect(() => {
		if (
			Object.keys(router.components).length === 3 &&
			!modalCtx.hasOpened
		) {
			setModalOpen(true)
			modalCtx.modalOpenedHandler()
		}
	}, [router])

	return (
		<>
			{modalOpen ? (
				<ModalStyled show={modalOpen}>
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
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	z-index: 10;
	overflow: auto;
	opacity: 0;
	animation: ${(props) => (props.show ? "fadeIn .4s forwards" : "")};
	transition: all 0.4s ease-in;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	dialog {
		display: block;
		background-color: transparent;
		color: revert;
		border: none;
		padding: 0;
		margin-block: auto;
		animation: ${(props) => (props.show ? "slideDown .8s forwards" : "")};
	}

	@keyframes slideDown {
		0% {
			opacity: 0;
			transform: translateY(-500px);
		}
		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}

	.modal-close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 10;
		cursor: pointer;
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
