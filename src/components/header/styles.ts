import styled from "styled-components"  

export const HeaderContainer = styled.div `
    display: flex;
    background-color: #E0164F;
    width: 100%;
    align-items: center;
    height: 6.6rem;
    justify-content: space-evenly;

        h1 {
            color: white;
            font-size: 1.8rem;
        }

        .input {
            display: flex;
            background-color: white;
            width: 400px;
            border-radius: 15px;

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
            }

        }

    .header-images {
        display: flex;
        gap: 50px;
    }
`