'use client';

import { useEffect, useRef, useState } from 'react';
import { ProductCard } from '../productCard';
import './styles.css'
import { GenericSlider, GenericSliderRef } from '@/components/genericSlider';
import { Slide } from '@/components/genericSlider/slide';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import useScreenSize from '@/components/hooks/useScreenSize';

interface RelatedProductsCarouselProps{
    data:any;
}

export const RelatedProductsCarousel = ({data}: RelatedProductsCarouselProps) => {
    const {isLargeScreen: notebook} = useScreenSize(1420)
    const {isLargeScreen: desktop} = useScreenSize(1920)
    const {isLargeScreen: tablet} = useScreenSize(1024)
    const {isLargeScreen: mobile} = useScreenSize(540)
    const {width} = useScreenSize(1024)
    const [numberSlides, setNumberSlides] = useState(4)
    const [currentSlidesOrder, setCurrentSlidesOrder] = useState(data);
    const [slideAuto, setSlideAuto] = useState(true)
    const [widthBug, setwithBug] = useState(120)

    const handleSlideChange = (activeSlideId: number) => {
        console.log('Slide ativo:', activeSlideId);
    };

    const handleCurrentSlideChange = (slides: any) => {
        setCurrentSlidesOrder(slides)
    };

    const genericSliderRef = useRef<GenericSliderRef | null>(null);
    const genericSliderNavigationRef = useRef<GenericSliderRef | null>(null);

    const handleNextClick = () => {
        genericSliderRef.current && genericSliderRef.current.nextAction();
        genericSliderNavigationRef.current && genericSliderNavigationRef.current.nextAction();
    };

    const handlePrevClick = () => {
        genericSliderRef.current && genericSliderRef.current.prevAction();
        genericSliderNavigationRef.current && genericSliderNavigationRef.current.prevAction();
    };

    const handleIndexClick = (id: number) => {
        genericSliderRef.current && genericSliderRef.current.goToSlide(id);
        genericSliderNavigationRef.current && genericSliderNavigationRef.current.goToSlide(id);
    };

    useEffect(() => {
        if(!desktop){
            setNumberSlides(4)
            setwithBug(120)
        }
        if(!notebook){
            setNumberSlides(3)
            setwithBug(80)
        }
        if(!tablet){
            setNumberSlides(2)
            setwithBug(40)
        }
        if(!mobile){
            setNumberSlides(1)
            setwithBug(0)
        }
    }, [width])

    return(
        <>
            <div className="products-related-container">
            <GenericSlider
                ref={genericSliderRef}
                slides={data}
                externWidth={width - widthBug}
                transition={500}
                perView={numberSlides}
                auto={slideAuto}
                duration={3000}
                gap={20}
                onSlideChange={handleSlideChange}
                slidesNewOrder={handleCurrentSlideChange}
            >
                {currentSlidesOrder.map((slide:any, index:number) => (
                    <Slide key={index}>
                        <div
                            onMouseOver={() => setSlideAuto(false)}
                            onMouseLeave={() => setSlideAuto(true)}
                        >
                            <ProductCard key={index} data={slide}/>
                        </div>
                    </Slide>
                ))}
            </GenericSlider>
            </div>
            <div className="products-related-navigation">
                <div className="share">
                    <button>
                        Compartilhar
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" fill="#435861"/>
                            <path d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z" fill="black" fill-opacity="0.2"/>
                        </svg>
                    </button>
                </div>
                <div className="arrows">
                    <button onClick={handlePrevClick}><BsArrowLeft />Anterior</button>
                    <button onClick={handleNextClick}>Próxima<BsArrowRight /></button>
                </div>
            </div>
        </>
    )
}