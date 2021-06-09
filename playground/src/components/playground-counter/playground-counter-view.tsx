import { h } from '@stencil/core';

export interface PlaygroundCounterViewProps {
  background?: string;
  count: number;
  incrementBy?: number;
  decrementBy?: number;
  increment: () => void;
  decrement: () => void;
}

export function PlaygroundCounterView(props: PlaygroundCounterViewProps) {
  const { background, count, increment, decrement, incrementBy, decrementBy } = props;
  return (
    <div class={`counter-container background-${background}`}>
      <h1 class="count">{count}</h1>
      <div class="flex-center">
        <playground-button onClick={increment} text={`+${incrementBy}`} type="primary"></playground-button>
        <playground-button onClick={decrement} text={`-${decrementBy}`} type="dark"></playground-button>
      </div>
    </div>
  );
}
