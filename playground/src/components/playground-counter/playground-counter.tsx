import { withHooks } from '@saasquatch/stencil-hooks';
import { Component, Host, h, Prop } from '@stencil/core';
import { getProps } from '../../utils/getProps';
import { PlaygroundCounterView } from './playground-counter-view';
import { usePlaygroundCounter } from './usePlaygroundCounter';

@Component({
  tag: 'playground-counter',
  styleUrl: 'playground-counter.css',
  shadow: true,
})
export class PlaygroundCounter {
  @Prop() background: string = 'primary';
  @Prop() startCount: number = 0;

  constructor() {
    withHooks(this);
  }

  disconnectedCallback() {}

  render() {
    const props = usePlaygroundCounter(getProps(this));
    return (
      <Host>
        <PlaygroundCounterView {...props} />
      </Host>
    );
  }
}
