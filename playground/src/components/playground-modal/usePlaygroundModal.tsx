import { PlaygroundModalViewProps } from './playground-modal-view';
import { useState } from '@saasquatch/stencil-hooks';

export interface PlaygroundModalProps {
  content: string;
}

export function usePlaygroundModal(props: PlaygroundModalProps): PlaygroundModalViewProps {
  const [isOpen, setIsOpen] = useState(false);
  // let isOpen = false;
  const openModal = () => setIsOpen(!isOpen);
  // const openModal = () => console.log('hello');
  return {
    ...props,
    isOpen,
    openModal,
  };
}
