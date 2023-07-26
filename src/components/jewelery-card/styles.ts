import styled from "styled-components" 

export const CardContainer = styled.div `
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

        button {
            display: flex;
            background-color: transparent;
            border: none;
            flex-direction: column;
            align-items: center;
            margin: 50px;
            width: 30vw;

            .image {
                :hover {
                    -xpedu-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                    transform: scale(1.1);
                    transition: 0.9s;
                }
            }

        h1 {
            line-height: 20px;
            margin: 35px;
            text-decoration: none;
            font-weight: 400;
            font-size: 20px;
        }
    }
`