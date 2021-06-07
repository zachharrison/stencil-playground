import { withHooks } from '@saasquatch/stencil-hooks';
import { Component, Host, h, Prop } from '@stencil/core';
import { getProps } from '../../utils/getProps';
import { PlaygroundButtonView } from './playground-button-view';
import { usePlaygroundButton } from './usePlaygroundButton';

@Component({
  tag: 'playground-button',
  styleUrl: 'playground-button.css',
  shadow: true,
})
export class PlaygroundButton {
  @Prop() text: string;

  constructor() {
    withHooks(this);
  }

  render() {
    const props = usePlaygroundButton(getProps(this));
    return (
      <Host>
        <PlaygroundButtonView {...props} />
      </Host>
    );
  }
}
