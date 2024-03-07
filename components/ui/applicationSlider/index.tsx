'use client';

import { GenericSlider, GenericSliderRef } from '../../genericSlider';
import './styles.css'
import { useRef, useState } from 'react';
import { Slide } from '../../genericSlider/slide';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import useScreenSize from '@/components/hooks/useScreenSize';

export const ApplicationSlider = ({title, data}:any) => {
    const {width, isLargeScreen} = useScreenSize(1024)
    const [currentSlidesOrder, setCurrentSlidesOrder] = useState(data);
    const [slideAuto, setSlideAuto] = useState(true)
    const [activeSlide, setActiveSlide] = useState(0)

    const handleSlideChange = (activeSlideId: number) => {
        setActiveSlide(activeSlideId);
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

    const activeSlidePosition = data.findIndex((slide:any) => slide.id === activeSlide) + 1;

    return (
    width &&
      <div
        className="application-slider"
        style={{paddingLeft:`${width > 930 ? (width - 930) / 2 : 15}px`}}
      >
        <h3>{title}</h3>
        <div className="application-slider-wrapper">
        <GenericSlider
            ref={genericSliderRef}
            slides={data}
            transition={700}
            perView={isLargeScreen ? 2.1 : 0.5}
            auto={slideAuto}
            duration={5000}
            gap={15}
            onSlideChange={handleSlideChange}
            slidesNewOrder={handleCurrentSlideChange}
        >
            {currentSlidesOrder.map((slide:any, index:number) => (
                <Slide key={index}>
                    <div
                        onMouseOver={() => setSlideAuto(false)}
                        onMouseLeave={() => setSlideAuto(true)}
                    >
                        <img src={slide.src} alt={slide.alt}></img>
                    </div>
                </Slide>
            ))}
        </GenericSlider>
        <div className="slide-index">
            <span>{activeSlidePosition} / {data.length}</span>
        </div>
        </div>
        <div className="slider-navigation">
            <div className="arrows">
                <button onClick={handlePrevClick}><MdArrowBackIos /></button>
                <button onClick={handleNextClick}><MdArrowForwardIos /></button>
            </div>
        </div>
      </div>
    );
  }
  