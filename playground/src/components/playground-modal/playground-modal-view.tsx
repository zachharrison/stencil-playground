import { h } from '@stencil/core';

export interface PlaygroundModalViewProps {
  content: string;
  isOpen: boolean;
  openModal: () => void;
}

export function PlaygroundModalView(props: PlaygroundModalViewProps) {
  const { content, isOpen, openModal } = props;

  return (
    <div>
      <p>The modal is {isOpen ? 'Open' : 'Closed'}</p>
      <playground-button text="Open Modal" type="dark" onClick={openModal}></playground-button>
    </div>
  );
}
