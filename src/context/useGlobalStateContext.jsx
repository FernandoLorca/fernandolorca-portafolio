import { useContext } from 'react';
import { GlobalStatesContext } from './GlobalStateProvider';

export const useGlobalStateContext = () => useContext(GlobalStatesContext);
