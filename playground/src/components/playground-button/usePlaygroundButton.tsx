import { PlaygroundButtonViewProps } from './playground-button-view';

export interface PlaygroundButtonProps {
  text: string;
}

export function usePlaygroundButton(props: PlaygroundButtonProps): PlaygroundButtonViewProps {
  return {
    ...props,
  };
}
