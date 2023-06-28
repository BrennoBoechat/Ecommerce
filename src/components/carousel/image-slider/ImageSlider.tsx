import { useEffect, useRef, useState } from "react";
import Left from "../../../assets/left.svg"
import Right from "../../../assets/right.svg"
import { DotStyle, DotsContainerStyles, LeftArrowStyles, RightArrowStyles, SlideStyles, SliderStyles } from "./styles";
import Image from "next/image";


interface Slide {
    url: string;
    title: string
  }

interface Slides {
    slides: Slide[]
}

const ImageSlider = ({slides}: Slides) => {
    const timeRef = useRef<Promise<number> | null>(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide
            ? slides.length - 1
            : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        return newIndex
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };


    return (
        <SliderStyles>
            <div>
                <LeftArrowStyles onClick={goToPrevious}>
                    <Image alt="arrow" src={Left}/>
                </LeftArrowStyles>

                <RightArrowStyles onClick={goToNext}>
                    <Image alt="arrow" src={Right}/>
                </RightArrowStyles>
            </div>

            <SlideStyles backgroundImage= {slides[currentIndex].url} ></SlideStyles>

            <DotsContainerStyles>
                {slides.map((slide, slideIndex) => (
                    <DotStyle
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        <span>●</span>
                    </DotStyle>
                ))}
            </DotsContainerStyles>
        </SliderStyles>
    )
};

export default ImageSlider