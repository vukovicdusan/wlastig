import React from "react"
import Image from "next/image"
import styles from "../styles/IconBox.module.css"

function IconBox(props) {
	let boxClass = props.boxStyle ? props.boxStyle : ""
	console.log(boxClass)
	return (
		<div
			className={`${
				boxClass === "light" ? styles.iconBoxLight : styles.iconBoxDark
			}}`}
		>
			<Image
				src={props.img}
				width={props.width}
				height={props.height}
				alt="icon"
			></Image>
			<h4 className={styles.title}>{props.title}</h4>
			<p>{props.content}</p>
		</div>
	)
}

export default IconBox
