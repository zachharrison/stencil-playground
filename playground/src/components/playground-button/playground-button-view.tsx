import { h } from '@stencil/core';

export interface PlaygroundButtonViewProps {
  text: string;
  type?: string;
}

export function PlaygroundButtonView(props: PlaygroundButtonViewProps) {
  const { text, type } = props;
  return <button class={`btn btn-${type}`}>{text}</button>;
}
