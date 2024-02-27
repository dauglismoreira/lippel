import { createContext, useContext } from 'react';

interface SliderContextProps {
  width: number;
  gap?: any;
  perView: number;
}

export const SliderContext = createContext<SliderContextProps | null>(null);

export const useSliderContext = (): SliderContextProps | null => {
  return useContext(SliderContext);
};