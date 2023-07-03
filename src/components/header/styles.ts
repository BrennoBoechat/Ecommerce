import styled from "styled-components"  

export const HeaderContainer = styled.div `
    display: flex;
    background-color: #E0164F;
    width: 100%;
    align-items: center;
    height: 6.6rem;
    justify-content: center;

    .wrap {
        max-width: 1400px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

            @media (max-width : 1024px) {
                justify-content: space-between;
                max-width: 984px;
            } 

            @media (max-width : 768px) {
                    justify-content: space-between;
                    max-width: 738px;
            }

            @media (max-width : 425px) {
                justify-content: space-between;
                max-width: 395px;
            } 

            @media (max-width : 375px) {
                justify-content: space-between;
                max-width: 345px;
            }

            @media (max-width : 425px) {
                justify-content: space-between;
                max-width: 395px;
            } 
            
            @media (max-width : 320px) {
                justify-content: space-between;
                max-width: 290px;
            } 
            
    }

        h1 {
            color: white;
            font-size: 1.8rem;

            @media (max-width : 768px) {
                font-size: 1.5rem;
            }

            @media (max-width : 400px) {
                font-size: 1rem;
            }  
        }

        .input {
            display: flex;
            background-color: white;
            width: 400px;
            border-radius: 15px;

            @media (max-width : 768px) {
                display: none;
            }

            input {
            border-radius: 15px;
            height: 38px;
            width: 100%;
            border: none;
            padding: 10px;
        }

            button {
                border: none;
                border-radius: 15px;
                background-color: white;
                padding: 5px;

                :hover {
                    opacity: 50%;
                }
            }

        }

            .header-images {
                display: flex;
                gap: 50px;

                button {
                    background-color: transparent;
                    border: none;
                }

                @media (max-width : 768px) {
                    gap: 15px;
                }
    }
`