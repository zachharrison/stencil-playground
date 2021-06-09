import { h } from '@stencil/core';

export interface PlaygroundCounterViewProps {
  background?: string;
  count: number;
  increment: () => void;
  decrement: () => void;
}

export function PlaygroundCounterView(props: PlaygroundCounterViewProps) {
  const { background, count, increment, decrement } = props;
  return (
    <div class={`counter-container background-${background}`}>
      <h1 class="count">{count}</h1>
      <div class="flex-center">
        <playground-button onClick={increment} text="Increment" type="primary"></playground-button>
        <playground-button onClick={decrement} text="Decrement" type="dark"></playground-button>
      </div>
    </div>
  );
}
