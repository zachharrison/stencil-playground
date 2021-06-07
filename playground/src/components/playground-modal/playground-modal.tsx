import { Component, Host, h, Prop } from '@stencil/core';
import { withHooks } from '@saasquatch/stencil-hooks';
import { getProps } from '../../utils/getProps';
import { PlaygroundModalView } from './playground-modal-view';
import { usePlaygroundModal } from './usePlaygroundModal';

@Component({
  tag: 'playground-modal',
  styleUrl: 'playground-modal.css',
  shadow: true,
})
export class PlaygroundModal {
  @Prop() content: string;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const props = usePlaygroundModal(getProps(this));
    return (
      <Host>
        <PlaygroundModalView {...props} />
      </Host>
    );
  }
}
