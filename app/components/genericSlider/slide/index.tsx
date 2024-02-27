import { ReactNode } from 'react';
import { useSliderContext } from '../context';

interface SlideProps {
    children: ReactNode;
}

export const Slide = ({
    children
}: SlideProps) => {
    const { width, gap, perView } = useSliderContext() || { width: 0, gap: 0, perView: 0 };

    return (
        <div
            className="slide"
            style={{
                minWidth:`${((width - ((gap ? gap : 1) * perView)) / perView) + (gap ? gap : 1)}px`,
            }}
        >
            {children}
        </div>
    );
  };
  