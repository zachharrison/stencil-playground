import { h } from '@stencil/core';

export interface PlaygroundModalViewProps {
  modalTitle: string;
  content: string;
  isOpen: boolean;
  openModal: () => void;
  closeModal: (e: Event) => void;
}

export function PlaygroundModalView(props: PlaygroundModalViewProps) {
  const { modalTitle, content, isOpen, openModal, closeModal } = props;

  return (
    <div class="mb-5">
      <playground-button text="Open Modal" type="dark" onClick={openModal}></playground-button>
      <div class={`overlay ${isOpen ? 'show' : ''}`} onClick={e => closeModal(e)}>
        <div class="modal" ref={(modal: HTMLDivElement) => modal}>
          <button class="close" onClick={e => closeModal(e)}>
            X
          </button>
          <h3 class="modal-header">{modalTitle}</h3>
          <p class="modal-content">{content}</p>
        </div>
      </div>
    </div>
  );
}
