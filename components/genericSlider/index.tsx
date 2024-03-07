import { ReactNode, Ref, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { SliderContext } from './context';
import './styles.css'

interface GenericSliderProps {
    slides: {
        src: string;
        alt: string;
        id: number;
    }[];
    transition:number;
    perView:number;
    gap?:number;
    onSlideChange?: (activeSlideId: number) => void;
    children: ReactNode;
    slidesNewOrder: (slides: any) => void;
    auto?: boolean;
    duration?: number;
    externWidth?:number;
}

export interface GenericSliderRef {
    nextAction: () => void;
    prevAction: () => void;
    goToSlide: (index: number) => void;
}

export const GenericSlider = forwardRef(({
    duration, externWidth, slides, auto, transition, perView, gap, onSlideChange, children, slidesNewOrder
}: GenericSliderProps, ref: Ref<GenericSliderRef>) => {
    const [sliderWidth, setSliderWidth] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = slides.length;
    const wrapper = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if(!externWidth){
            const handleResize = () => {
                if (wrapper.current) {
                    setWidth(wrapper.current.getBoundingClientRect().width)
                }
            }
            handleResize()
            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }else{
            setWidth(externWidth)
        }
    }, [externWidth]);

    const [slidesToShow, setSlidesToShow] = useState(() => {
        const initialSlides = [];
        for (let i = 0; i < totalSlides; i++) {
            initialSlides.push(slides[(i + totalSlides - 1) % totalSlides]);
        }
        return initialSlides;
    });

    const goToSlide = (id: number) => {
        const targetIndex = slidesToShow.findIndex(slide => slide.id === id);

        setCurrentSlide(targetIndex % totalSlides);
        setTimeout(() => {
            updateSlides('next', targetIndex - 1);
        }, transition);
    };

    useEffect(() => {
        slidesNewOrder(slidesToShow)

        if (auto) {
            const intervalId = setInterval(() => {
                nextAction();
            }, duration ? duration : 3000);

            return () => clearInterval(intervalId);
        }
    }, [slidesToShow, auto])

    const nextAction = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        setTimeout(() => {
            updateSlides('next');
        }, transition);
    };

    const prevAction = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
        setTimeout(() => {
            updateSlides('prev');
        }, transition);
    };

    const updateSlides = (direction: 'next' | 'prev', goToSlide?:number) => {

        wrapper.current!.style.transition = '0s';
    
        const newSlides = [...slidesToShow];
    
        if (goToSlide !== undefined && goToSlide >= 0 && goToSlide < totalSlides) {
            setCurrentSlide(goToSlide);
            for (let i = 0; i < totalSlides; i++) {
                newSlides[i] = slidesToShow[(i + goToSlide) % totalSlides];
            }
        } else {
            if (direction === 'next') {
                for (let i = 0; i < totalSlides; i++) {
                    newSlides[i] = slidesToShow[(i + 1) % totalSlides];
                }
            } else {
                for (let i = 0; i < totalSlides; i++) {
                    newSlides[i] = slidesToShow[(i - 1 + totalSlides) % totalSlides];
                }
            }
        }
    
        setSlidesToShow(newSlides);
        slidesNewOrder(newSlides)

        setTimeout(() => {
            wrapper.current!.style.transition = (transition / 1000).toString() + 's';
        }, 50);

        setCurrentSlide(1)

        onSlideChange && onSlideChange(newSlides[1].id)
    };

    useImperativeHandle(ref, () => ({
        nextAction,
        prevAction,
        goToSlide,
        getWidth: () => sliderWidth
    }));

    const transValue = ((currentSlide * (width + ((gap ? gap : 0) * perView))) / perView);
    
    return (
        <SliderContext.Provider value={{ width, gap, perView }}>
        <div className="slider-container">
            <div className="slider">
                <div className="wrapper" ref={wrapper} style={{
                    transform: `translateX(-${transValue}px)`,
                    transition: (transition / 1000).toString() + 's',
                    gap: gap ? gap.toString() + 'px' : 0
                }}>
                    {width !== 0 ?
                        children
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
      </SliderContext.Provider>
    );
  });

  GenericSlider.displayName = "GenericSlider";
  