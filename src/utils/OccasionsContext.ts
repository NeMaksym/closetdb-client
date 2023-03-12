import { createContext } from 'react';
import { Occasion } from '../types';

interface ContextProps {
    occasions: Occasion[];
    setOccasions: (occasions: Occasion[]) => void;
}

export const OccasionsContext = createContext<ContextProps>({
    occasions: [],
    setOccasions: () => {console.log('setOccasions not implemented')},
});
