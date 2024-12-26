import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

/*===================*/
/** ==== MODULAR SCALE ==== */
:root {
	--ratio: 1.3;
	--s-7: calc(var(--s-6) / var(--ratio));
	--s-6: calc(var(--s-5) / var(--ratio));
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
	--s6: calc(var(--s5) * var(--ratio));
	--s7: calc(var(--s6) * var(--ratio));

	/** ==== VARIABLES ==== */
	--primary: #083d77;
	--theme-primary: #083d77;
	--primary-shade: #B4C5D6;
	--secondary: #f2545b;
	--secondary-soft: #F13C44;
	--text-dark: #1c2334;
	--theme-text-dark: #1c2334;
	--text-light: #f8f8ff;
	--text-gray: #909090;
	--background-dark: #000;
	--background-light: #fff;
	--success-color: #4bb543;
	--disabled-btn-color: #d0d2e7;
	--active-slider-btn-color: rgb(8, 61, 119);
	--error-color: indianred;
	--testimonial-frames: rgba(0, 0, 0, 0.05);
	--color-shadow: rgba(23, 11, 41, 0.12);
	--box-shadow: 0 2px 10px var(--color-shadow);
	--text-shadow: 0 0 10px rgb(0 0 0 / 30%);
	--poppinsbold: "poppinsextrabold", Times, serif;
	--poppinsregular: "poppinsregular", Times, serif;
	--poppinsmedium: "poppinsmedium", Times, serif;

	/* --bf-black: #100C08; */
	--bf-black: #000;
	--bf-gray: #262626;
	--bg-bf: linear-gradient(34deg, rgba(16,12,8,1) 0%, rgba(38,38,38,1) 100%);

	--reel-analytics-dark: #242d3c;
}
/** ==== RESET ====*/
/* Box sizing rules */
*,
*::before,
*::after {
	box-sizing: border-box;
}

html {
	overflow-x: hidden;
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
	color: var(--text-dark);
	background: ${({ backgroundColor }) => backgroundColor || ""};
}

/* A elements that don't have a class get default styles */
a:not([class]) {
	text-decoration-skip-ink: auto;
}

a {
	color: inherit;
	text-decoration: none;
	transition: all 0.3s ease;
	position: relative;
}

a::after {
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

a:hover::after,
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
	font-size: var(--s1);
	text-shadow: var(--text-shadow);
}

.title-xl {
	font-size: var(--s3);
	text-shadow: var(--text-shadow);
}

.max-w-prose-sm {
	max-width: 40ch;
}

.max-w-prose {
max-width: 60ch;
}

.max-w-prose-plus {
max-width: 80ch;
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
		font-size: 15px;
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
	background-color: var(--background-light);
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
}

label {
	color: var(--theme-primary);
	font-size: 0.9rem;
}
/* === UTILITIES === */
.visually-hidden {
	position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
}

.overflow-hidden {
	overflow: hidden;
}

.text-center {
	text-align: center;
}

.text-light {
	color: var(--text-light);
}

.calendly-popup-content {
	color-scheme:light;
}

.pt-s-1 {
	padding-top: var(--s-1);
}
.pb-s-1 {
	padding-bottom: var(--s-1);
}

.mb-s-1 {
margin-bottom: var(--s-1);
}

@media only screen and (max-width: 780px) {
    .calendly-inline-widget {
        min-height: 1050px;
    }
}

.show-in-dark {
		display: ${({ isBlackFriday }) => (isBlackFriday ? "block" : "none")};
	}
	
.hide-in-dark {
		display: ${({ isBlackFriday }) => (isBlackFriday ? "none" : "block")};
	}

@media (prefers-color-scheme: dark) {
	html {
		color-scheme: dark;
	}

	:root {
		--primary: #020024;
		--theme-primary: #f8f8ff;
		--primary-shade: rgba(2, 0, 36, .4);
		--secondary: #f2545b;
		--secondary-soft: #083262;
		--text-dark: #ddd;
		--theme-text-dark: #f8f8ff;
		--text-light: #f8f8ff;
		--text-gray: #909090;
		--background-dark: #49709B;
		--background-light: #353350;
		/* --background-light: #49709B; */
		--testimonial-frames: rgba(250,250,250,0.5);
		--disabled-slider-btn-color: rgba(0,0,0,.2);
		--active-slider-btn-color: var(--text-light);

		--reel-analytics-dark: #777777;
	}

	.show-in-dark {
		display: block;
	}
	.hide-in-dark {
		display: none;
	}
}
`;
