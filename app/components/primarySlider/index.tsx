'use client';

import { GenericSlider, GenericSliderRef } from '../genericSlider';
import './styles.css'
import { useRef, useState } from 'react';
import { Slide } from '../genericSlider/slide';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IndexItemSlider } from './indexItemSlider';
import { HomeSlide } from '../homeSlide';

export const PrimarySlider = () => {

    const sliderMock = [
        {
            src:'/mockslide.jpg',
            alt:'teste1',
            category:'Triturador de Resíduos',
            title:'Picados Florestal T-Rex',
            id:1
        },
        {
            src:'/mockslide.jpg',
            alt:'teste2',
            category:'Triturador de Resíduos',
            title:'Usina de Triagem para Reciclagem',
            id:2
        },
        {
            src:'/mockslide.jpg',
            alt:'teste3',
            category:'Triturador de Resíduos',
            title:'Tridurador Móvel de dois eixos MRW',
            id:3
        },
        {
            src:'/mockslide.jpg',
            alt:'teste4',
            category:'Triturador de Resíduos',
            title:'Picados Florestal T-Rex',
            id:4
        },
        {
            src:'/mockslide.jpg',
            alt:'teste5',
            category:'Triturador de Resíduos',
            title:'Usina de Triagem para Reciclagem',
            id:5
        },
        {
            src:'/mockslide.jpg',
            alt:'teste6',
            category:'Triturador de Resíduos',
            title:'Tridurador Móvel de dois eixos MRW',
            id:6
        },
    ]

    const [currentSlidesOrder, setCurrentSlidesOrder] = useState(sliderMock);
    const [slideAuto, setSlideAuto] = useState(true)

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

    return (
      <div className="section-slider">
        <GenericSlider
            ref={genericSliderRef}
            slides={sliderMock}
            transition={500}
            perView={1}
            auto={slideAuto}
            duration={3000}
            // gap={20}
            onSlideChange={handleSlideChange}
            slidesNewOrder={handleCurrentSlideChange}
        >
            {currentSlidesOrder.map((slide, index) => (
                <Slide key={index}>
                    <div
                        onMouseOver={() => setSlideAuto(false)}
                        onMouseLeave={() => setSlideAuto(true)}
                    >
                        <HomeSlide data={slide}/>
                    </div>
                </Slide>
            ))}
        </GenericSlider>
        <div className="slider-navigation">
            <div className="arrows">
                <button onClick={handlePrevClick}><GoArrowLeft /></button>
                <button onClick={handleNextClick}><GoArrowRight /></button>
            </div>
            <div className="index">
                <span className="active-slide"></span>
                <GenericSlider
                    ref={genericSliderNavigationRef}
                    slides={sliderMock}
                    transition={500}
                    perView={3}
                    gap={20}
                    duration={3000}
                    auto={slideAuto}
                    onSlideChange={handleSlideChange}
                    slidesNewOrder={handleCurrentSlideChange}
                >
                    {currentSlidesOrder.map((slide, index) => (
                        <Slide key={index}>
                            <IndexItemSlider
                                slide={slide}
                                index={sliderMock.findIndex(sld => sld.id === slide.id) + 1}
                                handleIndexClick={handleIndexClick}
                            />
                        </Slide>
                    ))}
                </GenericSlider>
            </div>
        </div>
      </div>
    );
  }
  