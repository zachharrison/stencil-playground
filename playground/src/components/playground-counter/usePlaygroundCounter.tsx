import { PlaygroundCounterViewProps } from './playground-counter-view';

export interface PlaygroundCounterProps {
  background?: string;
  startCount?: number;
}

export function usePlaygroundCounter(props: PlaygroundCounterProps): PlaygroundCounterViewProps {
  return {
    ...props,
  };
}
