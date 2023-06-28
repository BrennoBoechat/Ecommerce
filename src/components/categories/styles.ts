import Image from "next/image"
import styled from "styled-components"

export const CategoriesContainer = styled.div `
    display: flex;
    max-width: 1400px;
    margin: auto;
    margin-top: 100px;

    .wrap {
        display: flex;
        width: 100%;
        flex-direction: column;

        .categories {
            display: flex;
            margin-top: 50px;
            justify-content: space-between;

            button {
                border: none;
                background-color: transparent;
            }
        }
    }
`

export const StyledImageWrapper = styled.div` 

    .image-style {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 10px; 
        filter: grayscale(100%);
        transition:filter 600ms ease;
    }

    :hover {
        filter: grayscale(0%); 
    }
`