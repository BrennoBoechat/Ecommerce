import React from 'react'
import ImageSlider from './image-slider/ImageSlider';
import { BannerContainer } from './styles';


function Carousel() {

  const slides = [
    { url: "https://img.ltwebstatic.com/images3_ccc/2023/06/23/168750382665c3a55b5e84c19f061c37dec3ec4c02.webp", title: "beach" },
    { url: "https://img.ltwebstatic.com/images3_ccc/2023/06/23/16875038174fabd97fdc4fa4eed13f2ffa6b05c425.webp", title: "boat" },
    { url: "https://img.ltwebstatic.com/images3_ccc/2023/06/16/168692713876312a737e914548e1bc1a24a5076a1b.webp", title: "forest" },
    { url: "https://img.ltwebstatic.com/images3_ccc/2023/06/26/168776034301914454c2a28307b89f3f514712b3e2_thumbnail_1542x.webp", title: "city" },
  ];
  
  const containerStyles = {

  }

  return (
    <BannerContainer>
        <div>
          <ImageSlider slides={slides}/>
        </div>
    </BannerContainer>
  )
}

export default Carousel