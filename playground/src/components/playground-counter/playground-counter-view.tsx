import { h } from '@stencil/core';

export interface PlaygroundCounterViewProps {
  background?: string;
  startCount?: number;
}

export function PlaygroundCounterView(props: PlaygroundCounterViewProps) {
  const { background, startCount } = props;
  return (
    <div class={`counter-container background-${background}`}>
      <h1 class="count">{startCount}</h1>
      <div class="flex-center">
        <playground-button text="Increment" type="primary"></playground-button>
        <playground-button text="Decrement" type="dark"></playground-button>
      </div>
    </div>
  );
}
