import { PlaygroundCounterViewProps } from './playground-counter-view';
import { useState } from '@saasquatch/stencil-hooks';

export interface PlaygroundCounterProps {
  background?: string;
  startCount?: number;
}

export function usePlaygroundCounter(props: PlaygroundCounterProps): PlaygroundCounterViewProps {
  const { startCount } = props;
  const [count, setCount] = useState(startCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return {
    count,
    increment,
    decrement,
    ...props,
  };
}
