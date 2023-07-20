import styled from "styled-components"  

export const LoginContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

        .wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 60.4vh;

            h2 {
                margin-bottom: 30px;
                color: black;
            }

            .inputs {
                display: flex;
                flex-direction: column;

                input {
                    width: 350px;
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

            .buttons {
                display: flex;
                flex-direction: column;
                margin-top: 10px;

                button {
                    background-color: #E0164F;
                    height: 47.05px;
                    width: 350px;
                    border: none;
                    color: white;
                    margin-top: 10px;
                }

                .register {
                    background-color: transparent;
                    border: 1px solid #707070;
                    color: #707070;
                }
        }
}
`