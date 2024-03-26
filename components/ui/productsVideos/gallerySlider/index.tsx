'use client';

import { GenericSlider, GenericSliderRef } from '../../../genericSlider';
import './styles.css'
import { useRef, useState } from 'react';
import { Slide } from '../../../genericSlider/slide';
import useScreenSize from '@/components/hooks/useScreenSize';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


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

    const genericSliderRef2 = useRef<GenericSliderRef | null>(null);
    const genericSliderNavigationRef2 = useRef<GenericSliderRef | null>(null);

    const handleNextClick = () => {
        genericSliderRef2.current && genericSliderRef2.current.nextAction();
        genericSliderNavigationRef2.current && genericSliderNavigationRef2.current.nextAction();
    };

    const handlePrevClick = () => {
        genericSliderRef2.current && genericSliderRef2.current.prevAction();
        genericSliderNavigationRef2.current && genericSliderNavigationRef2.current.prevAction();
    };

    const handleIndexClick = (id: number) => {
        genericSliderRef2.current && genericSliderRef2.current.goToSlide(id);
        genericSliderNavigationRef2.current && genericSliderNavigationRef2.current.goToSlide(id);
    };

    const activeSlidePosition = data.findIndex((slide:any) => slide.id === activeSlide) + 1;
    const activeSlideAlt = data.filter((slide:any) => slide.id === activeSlide)[0]?.alt;

    return (
      <div className="gallery-video-slider">
        <GenericSlider
            ref={genericSliderRef2}
            slides={data}
            transition={500}
            perView={1}
            auto={false}
            // duration={3000}
            // gap={20}
            onSlideChange={handleSlideChange}
            slidesNewOrder={handleCurrentSlideChange}
        >
            {currentSlidesOrder.map((slide:any, index:number) => (
                <Slide key={index}>
                    <div
                        // onMouseOver={() => setSlideAuto(false)}
                        // onMouseLeave={() => setSlideAuto(true)}
                    >
                        <div className="selected-video" dangerouslySetInnerHTML={{ __html: slide.iframe }}></div>
                    </div>
                </Slide>
            ))}
        </GenericSlider>
        <div className="arrow-prev">
            <button onClick={handlePrevClick}><IoIosArrowBack /></button>
        </div>
        <div className="arrow-next">
            <button onClick={handleNextClick}><IoIosArrowForward /></button>
        </div>
        <div className="atual-slide-info">
            <span>{activeSlidePosition}/{data.length}</span>
            <p>{activeSlideAlt}</p>
        </div>
        <div className="slider-navigation">
            <div className="index">
                <GenericSlider
                    ref={genericSliderNavigationRef2}
                    slides={data}
                    transition={500}
                    perView={isLargeScreen ? 4 : 2}
                    gap={10}
                    // duration={3000}
                    auto={false}
                    onSlideChange={handleSlideChange}
                    slidesNewOrder={handleCurrentSlideChange}
                >
                    {currentSlidesOrder.map((slide:any, index:number) => (
                        <Slide key={index}>
                            <div className="video-index" dangerouslySetInnerHTML={{ __html: slide.iframe }}></div>
                        </Slide>
                    ))}
                </GenericSlider>
            </div>
        </div>
      </div>
    );
  }
  