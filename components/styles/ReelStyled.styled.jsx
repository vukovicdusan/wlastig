import styled from "styled-components"

export const ReelStyled = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	block-size: 800px;
	inline-size: 100%;
	overflow: hidden;
	scrollbar-color: #fff #000;

	.reel-inside {
		background-color: var(--primary-shade);
		display: flex;
		inline-size: 300vw;
		transition: all 0.5s ease-in-out;
		position: relative;
	}

    .reel-item {
        display: flex;
        justify-content: center;
        block-size: 700px;
        inline-size: 100vw;
    }
    
    .reel-item--content {
        display: flex;
        inline-size: 65%;
        margin-inline: auto;
        justify-content: center;
        align-items: center;
        font-size: var(--s1);
        font-family: var(--poppinsregular);
    }
    
    .reel-item--content img {
        object-fit: contain;
    }
    
    .reel-item--content span {
        font-family: var(--poppinsbold);
    }
    
    .reel-item--content > *:nth-child(1) {
        flex: 1 1 60%;
    }
    
    .reel-item--content > *:nth-child(2) {
        flex: 1 1 40%;
        max-width: 60ch;
    }
    
    .reel-links {
        display: flex;
        justify-content: space-between;
        gap: calc(var(--s5) + 4rem);
        margin-inline: auto;
        z-index: 100;
        padding-block: 2rem;
    }
    
    .reel-button {
        display: inline-block;
        padding: none;
        border: none;
        border-bottom: 2px solid transparent;
        background-color: none;
        background: none;
        color: var(--primary);
        cursor: pointer;
        text-align: center;
        text-decoration: none !important;
        text-transform: uppercase;
        font-family: var(--poppinsbold);
        transition: all 0.2s ease;
    }
    
    .reel-button:focus {
        transform: translateY(-25px) scale(1.15);
        outline: none;
        border-bottom: 2px solid var(--primary);
    }
    
    .reel-link-icon {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        flex: 200px 1 1;
        align-items: center;
    }

    @media (max-width: 800px) {
        .reel-item--content {
            font-size: var(--s0);
            inline-size: 90%;
        }
        .reel-item--content > *:nth-child(1) {
            flex: 1 1 40%;
        }
    
        .reel-item--content > *:nth-child(2) {
            flex: 1 1 60%;
            max-width: 60ch;
        }
    
        .reel-links {
            gap: var(--s2);
        }
    
        .reel-button {
            font-size: var(--s-1);
        }
`
