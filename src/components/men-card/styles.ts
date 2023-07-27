import styled from "styled-components" 

export const CardContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

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

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .filter {
        display: flex;
        align-items: center;
        justify-content: space-around;;
        width: 30vw;
        height: 10vh;
        /* border: 1px solid red; */
        /* margin: 20px; */
        border-bottom: 1px solid #C4C4C4;

        select {
            width: 200px;
            height: 30px;
            border: 2px solid  #E0164F;
            color:  black;
        }

        input {
            width: 300px;
            height: 30px;
            border-radius: 3px;
            padding: 10px;
            border: 2px solid  #E0164F;
            margin: 5px;

            &::placeholder {
                color: #C4C4C4;
            }
        }
    }
`
