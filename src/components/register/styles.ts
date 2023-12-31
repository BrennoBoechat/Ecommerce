import styled from "styled-components" 

export const RegisterContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .wrap {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-top: 40px;

        input {
            width: 300px;
            height: 47.05px;
            border-radius: 3px;
            padding: 10px;
            border: 1px solid rgb(231, 231, 231);
            margin: 5px;

            &::placeholder {
            color: #C4C4C4;
            }
        }

    }

    button {
        background-color: #E0164F;
        height: 47.05px;
        width: 300px;
        border: none;
        color: white;
        margin-top: 20px;
    }
`