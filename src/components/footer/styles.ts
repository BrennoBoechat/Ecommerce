import styled from "styled-components"

export const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #E0164F;
    margin-top: 50px;
    
    .wrap {
        display: flex;
        width: 100%;
        max-width: 1136.060px;
        margin: 0 auto;
        align-items: center;
        flex-direction: column;

        .newsletter {
            display: flex;
            align-items: center;
            margin-top: 20px;
            gap: 20px;
            height: 10vh;

                @media (max-width : 1024px) {
                        max-width: 984px;
                }

                @media (max-width : 768px) {
                    flex-direction: column;
                }

                h1 {
                    color: white;
                    font-size: 1.3rem;

                    @media (max-width : 1024px) {
                        font-size: 0.8rem;
                    }

                    @media (max-width : 768px) {
                        display: flex;
                        justify-content: center;
                    }
                }

                p {
                    color: white;
                    font-size: 0.7rem;

                    @media (max-width : 1024px) {
                        font-size: 0.7rem;
                        justify-content: center;
                    }

                    @media (max-width : 768px) {
                        font-size: 0.7rem;
                        justify-content: center;
                    }
                }

                input {
                    min-width: 300px;
                    height: 3.90vh;
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid white;

                    &::placeholder {
                        color: black;
                    }
                }

                button {
                    width: 120px;
                    border: 0;
                    position: relative;
                    padding: 7px 0;
                    outline: 0;
                    background-color: white;
                    font: 600 12px/15px "Source Sans Pro",sans-serif;
                    color: black;
                    text-align: center;
                    text-transform: uppercase;
                    cursor: pointer;
                }

            }

            .itens {
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                margin-top: 30px;
                margin-bottom: 30px;

                @media (max-width : 1024px) {
                        max-width: 984px;
                }

                @media (max-width : 768px) {
                flex-direction: column;
                gap: 30px;
                margin-top: 200px;
                }

                p {
                    color: white;

                    @media (max-width : 768px) {
                        font-size: 0.8rem;
                    }
                }

                .social-midia {
                    display: flex;
                    gap: 10px;

                    button {
                        border: none;
                        background: transparent;
                    }
                }

                .pay {
                    display: flex;
                    gap: 10px;

                    .payment {
                    width: 50px;
                    height: 30px;
                    }
                }
            }
    }
`