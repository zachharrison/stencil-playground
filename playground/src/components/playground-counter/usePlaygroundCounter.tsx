import { PlaygroundCounterViewProps } from './playground-counter-view';
import { useState } from '@saasquatch/stencil-hooks';

export interface PlaygroundCounterProps {
  background?: string;
  startCount?: number;
  incrementBy?: number;
  decrementBy?: number;
}

export function usePlaygroundCounter(props: PlaygroundCounterProps): PlaygroundCounterViewProps {
  const { startCount, incrementBy, decrementBy } = props;
  const [count, setCount] = useState(startCount);
  const increment = () => setCount(count + incrementBy);
  const decrement = () => setCount(count - decrementBy);
  return {
    count,
    increment,
    decrement,
    incrementBy,
    decrementBy,
    ...props,
  };
}
