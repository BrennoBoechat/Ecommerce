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

        h1 {

            @media (max-width : 1024px) {
                justify-content: center;
                display: flex;
            }

            @media (max-width : 768px) {
                justify-content: center;
                display: flex;
            }
        }

        .categories {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 15px;

            @media (max-width : 1024px) {
                flex-direction: column;
            }

            @media (max-width : 768px) {
                justify-content: center;
                align-items: center;
                display: flex;
            }

            button {
                border: none;
                background-color: transparent;
            }
        }
    }
`

export const StyledImageWrapper = styled.div`

    .image-style {
        max-width: 400px;
        height: 400px;
        object-fit: cover;
        filter: grayscale(100%);
        width: 100%;
        transition: filter 600ms ease;
        border-radius: 25px;
        

        @media (max-width : 768px) {
            padding: 15px;
        }

        @media (max-width : 1024px) {
            padding: 15px;
        }
    }

    :hover {
        filter: grayscale(0%); 
    }
`