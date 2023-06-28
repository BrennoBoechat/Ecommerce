import { styled } from "styled-components";

interface SlideProps {
    backgroundImage: string
}

export const SlideStyles = styled.div<SlideProps>`
    width: 100%;
    max-width: 1400px;
    margin-top: 30px;
    height: 500px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    background-image: ${({backgroundImage})=>`url(${backgroundImage})`};
`

export const SliderStyles = styled.div`
    position: relative;
    height: 100%;
`;

export const LeftArrowStyles = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 32px;
    font-size: 45px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
`;

export const RightArrowStyles = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 32px;
    font-size: 45px;
    color: #fff;
    z-index: 1;
    cursor: pointer;
`;

export const DotsContainerStyles = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
`;

export const DotStyle = styled.div`
    margin: 0 3px;
    cursor: pointer;
    font-size: 20px;
    position: relative
`;