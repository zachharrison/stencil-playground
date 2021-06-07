import { h } from '@stencil/core';

export interface PlaygroundButtonViewProps {
  text: string;
}

export function PlaygroundButtonView(props: PlaygroundButtonViewProps) {
  const { text } = props;
  return <button>{text}</button>;
}
