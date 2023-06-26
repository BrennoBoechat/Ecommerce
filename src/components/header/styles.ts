import styled from "styled-components"  

export const HeaderContainer = styled.div `
    display: flex;
    background-color: #E0164F;
    width: 100vw;
    height: 10vh;

    .header-itens {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 300px;

        h1 {
            color: white;
            font-size: 1.8rem;
        }

        input {
            border-radius: 15px;
            height: 30px;
            width: 370px;
            border: none;
            padding: 15px;
        }

    .header-images {
        display: flex;
        gap: 50px;
    }

    }
`