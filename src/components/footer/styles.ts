import styled from "styled-components"

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 25vh;
    background-color: #E0164F;
    margin-top: 50px;

    .wrap {
        display: flex;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        justify-content: center;

        .newsletter {
            display: flex;
            align-items: center;
            gap: 25px;
            height: 10vh;

                h1 {
                color: white;
                font-size: 1.3rem;
                }

                p {
                    color: white;
                    font-size: 0.8rem;
                }

                input {
                    width: 15vw;
                    height: 4vh;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid white;

                    &::placeholder {
                        color: black;
                    }
                }

                button {
                    background: white;
                    border: none;
                    width: 80px;
                    height: 30px;
                    font-size: 20px
                }

            }
    }
`