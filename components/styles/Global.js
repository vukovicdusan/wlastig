import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
@media (prefers-color-scheme: dark) {
	html {
		color-scheme: dark;
	}
	body {
		color: white;
		background: black;
	}
}

/*===================*/
/** ==== MODULAR SCALE ==== */
:root {
	--ratio: 1.3;
	--s-5: calc(var(--s-4) / var(--ratio));
	--s-4: calc(var(--s-3) / var(--ratio));
	--s-3: calc(var(--s-2) / var(--ratio));
	--s-2: calc(var(--s-1) / var(--ratio));
	--s-1: calc(var(--s0) / var(--ratio));
	--s0: 1rem;
	--s1: calc(var(--s0) * var(--ratio));
	--s2: calc(var(--s1) * var(--ratio));
	--s3: calc(var(--s2) * var(--ratio));
	--s4: calc(var(--s3) * var(--ratio));
	--s5: calc(var(--s4) * var(--ratio));

	/** ==== VARIABLES ==== */

	--primary: #083d77;
	--primary-shade: #B4C5D6;
	--secondary: #f2545b;
	--text-dark: #1c2334;
	--text-light: #f8f8ff;
	--text-gray: #909090;
	--background-dark: #000;
	--background-light: #fff;
	--color-shadow: rgba(23, 11, 41, 0.12);
	--box-shadow: 0 2px 10px var(--color-shadow);
	--text-shadow: 0 0 10px rgb(0 0 0 / 30%);
	--poppinsbold: "poppinsextrabold", Times, serif;
	--poppinsregular: "poppinsregular", Times, serif;
	--poppinsmedium: "poppinsmedium", Times, serif;
}
/** ==== RESET ====*/
/* Box sizing rules */
*,
*::before,
*::after {
	box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
	margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
	list-style: none;
	margin: 0;
	padding: 0;
}

/* Set core root defaults */
html:focus-within {
	scroll-behavior: smooth;
}

/* Set core body defaults */
body {
	min-height: 100vh;
	text-rendering: optimizeSpeed;
	line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
	text-decoration-skip-ink: auto;
}

a, .disabled-link {
	color: var(--text-dark);
	text-decoration: none;
	transition: all 0.3s ease;
	position: relative;
}

a::after, .disabled-link::after {
	content: "";
	position: absolute;
	width: 0%;
	height: 3px;
	border-radius: 2px;
	background-color: var(--secondary);
	left: 0;
	bottom: -5px;
	transition: width 0.2s ease-in-out;
}

a:hover::after, .disabled-link:hover::after,
.navlink-active::after {
	width: 100%;
}

.a-exception:hover::after {
	width: 0;
}
/* Make images easier to work with */
img,
picture {
	max-width: 100%;
	display: block;
}

/* Inherit ../fonts for inputs and buttons */
input,
button,
textarea,
select {
	font: inherit;
}

button:disabled {
	cursor: auto;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
	html:focus-within {
		scroll-behavior: auto;
	}

	*,
	*::before,
	*::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}
/** ==== RESET UP ====*/

/* === FONTS === */
@font-face {
	font-family: "poppinsextrabold";
	src: url("/fonts/poppins-extrabold-webfont.woff2") format("woff2"),
		url("/fonts/poppins-extrabold-webfont.woff") format("woff");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "poppinsmedium";
	src: url("/fonts/poppins-medium-webfont.woff2") format("woff2"),
		url("/fonts/poppins-medium-webfont.woff") format("woff");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "poppinsregular";
	src: url("/fonts/poppins-regular-webfont.woff2") format("woff2"),
		url("/fonts/poppins-regular-webfont.woff") format("woff");
	font-weight: normal;
	font-style: normal;
}

body {
	font-family: var(--poppinsregular), 'Times New Roman', Times, serif;
	color: var(--text-dark);
}

h1,
h2,
h3,
h4,
h5,
h6 {
	max-width: 35ch;
	font-family: var(--poppinsbold), 'Times New Roman', Times, serif;
	line-height: 1.1;
}

h1 {
	font-size: var(--s4);
}
h2 {
	font-size: var(--s3);
}
h3 {
	font-size: var(--s2);
}
h4 {
	font-size: var(--s1);
}
h5 {
	font-size: var(--s0);
}
h6 {
	font-size: var(--s0);
}
.title-l {
	font-size: var(--s2);
	text-shadow: var(--text-shadow);
}

.title-xl {
	font-size: var(--s5);
	text-shadow: var(--text-shadow);
}

@media (max-width: 450px) {
	h1 {
		font-size: var(--s2);
	}
	h2 {
		font-size: var(--s2);
	}
	h3 {
		font-size: var(--s1);
	}
	h4 {
		font-size: var(--s0);
	}
	h5 {
		font-size: var(--s0);
	}
	h6 {
		font-size: var(--s0);
	}
	body {
		font-size: var(--s-1);
	}
	.title-l {
		font-size: var(--s1);
	}
	.title-xl {
	font-size: var(--s2);
	}
}

:focus {
	outline: 1px dotted var(--primary-shade);
	outline-offset: 0.25rem;
}

input,
select,
textarea {
	/* box-shadow: 0 2px 10px var(--color-shadow); */
	padding: 0.6rem;
	border: 1px solid #ccc;
	min-inline-size: 15rem;
}

select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

.select::after {
	content: "";
	background-image: url("../public/img/chevron-down.svg");
	right: 15px;
	top: 45%;
	transform: translateY(-50%);
	height: 15px;
	width: 15px;
	position: absolute;
	pointer-events: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
	border: 1px solid var(--primary);
	-webkit-text-fill-color: inherit;
	-webkit-box-shadow: 0 0 0px 1000px var(--background-light) inset;
	/* transition: background-color 5000s ease-in-out 0s; */
}

label {
	color: var(--primary);
	font-size: 0.9rem;
}
/* === UTILITIES === */
.visually-hidden {
	border: 0;
	clip: rect(0 0 0 0);
	height: auto;
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
	white-space: nowrap;
}

.text-center {
	text-align: center;
}

.text-light {
	color: var(--text-light);
}
`
