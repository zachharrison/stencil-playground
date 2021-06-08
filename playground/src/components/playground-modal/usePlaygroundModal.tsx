import { PlaygroundModalViewProps } from './playground-modal-view';
import { useState } from '@saasquatch/stencil-hooks';

export interface PlaygroundModalProps {
  modalTitle: string;
  content: string;
}

export function usePlaygroundModal(props: PlaygroundModalProps): PlaygroundModalViewProps {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);
  const closeModal = (e: Event) => {
    const target = e.target as HTMLDivElement;
    // DON'T CLOSE MODAL IF CLICK IS INSIDE MODAL DIV
    if (target.classList.contains('modal') || target.classList.contains('modal-header') || target.classList.contains('modal-content')) {
      return;
    }
    setIsOpen(false);
  };
  return {
    ...props,
    isOpen,
    openModal,
    closeModal,
  };
}
