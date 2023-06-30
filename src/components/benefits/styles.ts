import styled from "styled-components"

export const BenefitsContainer = styled.div`
    display: flex;
    max-width: 1400px;
    margin: auto;
    margin-top: 20px;

    .wrap {
        width: 100%;
        display: flex;
        justify-content: space-around;

        @media (max-width : 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
    }

    .benefits-cards {
        display: flex;
        align-items: center;
        width: 300px;
        padding: 22px;
        border: 1px solid #d5dce9;;
        border-radius: 8px;
        height: 56px;
        color: red;

        p {
            font-size: 0.8rem;
            color: black;
        }
    }
`