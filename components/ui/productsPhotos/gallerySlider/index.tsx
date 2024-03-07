'use client';

import { GenericSlider, GenericSliderRef } from '../../../genericSlider';
import './styles.css'
import { useRef, useState } from 'react';
import { Slide } from '../../../genericSlider/slide';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IndexItemSlider } from './indexItemSlider';
import useScreenSize from '@/components/hooks/useScreenSize';


export const GallerySlider = ({data}:any) => {
    const {width, isLargeScreen} = useScreenSize(1024)
    const [currentSlidesOrder, setCurrentSlidesOrder] = useState(data);
    const [slideAuto, setSlideAuto] = useState(true)
    const [activeSlide, setactiveSlide ] = useState(1)

    const handleSlideChange = (activeSlideId: number) => {
        setactiveSlide(activeSlideId);
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

    const activeSlidePosition = data.findIndex((slide:any) => slide.id === activeSlide) + 1;
    const activeSlideAlt = data.filter((slide:any) => slide.id === activeSlide)[0]?.alt;

    return (
      <div className="gallery-slider">
        <GenericSlider
            ref={genericSliderRef}
            slides={data}
            transition={500}
            perView={1}
            auto={slideAuto}
            duration={3000}
            // gap={20}
            onSlideChange={handleSlideChange}
            slidesNewOrder={handleCurrentSlideChange}
        >
            {currentSlidesOrder.map((slide:any, index:number) => (
                <Slide key={index}>
                    <div
                        onMouseOver={() => setSlideAuto(false)}
                        onMouseLeave={() => setSlideAuto(true)}
                    >
                        <img className="seletec-img-carousel" src={slide.src}/>
                    </div>
                </Slide>
            ))}
        </GenericSlider>
        <div className="arrow-prev">
            <button onClick={handlePrevClick}><GoArrowLeft /></button>
        </div>
        <div className="arrow-next">
            <button onClick={handleNextClick}><GoArrowRight /></button>
        </div>
        <div className="atual-slide-info">
            <span>{activeSlidePosition}/{data.length}</span>
            <p>{activeSlideAlt}</p>
        </div>
        <div className="slider-navigation">
            <div className="index">
                <GenericSlider
                    ref={genericSliderNavigationRef}
                    slides={data}
                    transition={500}
                    perView={isLargeScreen ? 4 : 3}
                    // gap={20}
                    duration={3000}
                    auto={slideAuto}
                    onSlideChange={handleSlideChange}
                    slidesNewOrder={handleCurrentSlideChange}
                >
                    {currentSlidesOrder.map((slide:any, index:number) => (
                        <Slide key={index}>
                            <img
                                className="img-index-carousel" 
                                src={slide.src}
                                onClick={() => handleIndexClick(slide.id)}
                            />
                        </Slide>
                    ))}
                </GenericSlider>
            </div>
        </div>
      </div>
    );
  }
  