/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PlaygroundButton {
        "text": string;
        "type": string;
    }
    interface PlaygroundCounter {
        "background": string;
        "decrementBy": number;
        "incrementBy": number;
        "startCount": number;
    }
    interface PlaygroundModal {
        "content": string;
        "modalTitle": string;
    }
}
declare global {
    interface HTMLPlaygroundButtonElement extends Components.PlaygroundButton, HTMLStencilElement {
    }
    var HTMLPlaygroundButtonElement: {
        prototype: HTMLPlaygroundButtonElement;
        new (): HTMLPlaygroundButtonElement;
    };
    interface HTMLPlaygroundCounterElement extends Components.PlaygroundCounter, HTMLStencilElement {
    }
    var HTMLPlaygroundCounterElement: {
        prototype: HTMLPlaygroundCounterElement;
        new (): HTMLPlaygroundCounterElement;
    };
    interface HTMLPlaygroundModalElement extends Components.PlaygroundModal, HTMLStencilElement {
    }
    var HTMLPlaygroundModalElement: {
        prototype: HTMLPlaygroundModalElement;
        new (): HTMLPlaygroundModalElement;
    };
    interface HTMLElementTagNameMap {
        "playground-button": HTMLPlaygroundButtonElement;
        "playground-counter": HTMLPlaygroundCounterElement;
        "playground-modal": HTMLPlaygroundModalElement;
    }
}
declare namespace LocalJSX {
    interface PlaygroundButton {
        "text"?: string;
        "type"?: string;
    }
    interface PlaygroundCounter {
        "background"?: string;
        "decrementBy"?: number;
        "incrementBy"?: number;
        "startCount"?: number;
    }
    interface PlaygroundModal {
        "content"?: string;
        "modalTitle"?: string;
    }
    interface IntrinsicElements {
        "playground-button": PlaygroundButton;
        "playground-counter": PlaygroundCounter;
        "playground-modal": PlaygroundModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "playground-button": LocalJSX.PlaygroundButton & JSXBase.HTMLAttributes<HTMLPlaygroundButtonElement>;
            "playground-counter": LocalJSX.PlaygroundCounter & JSXBase.HTMLAttributes<HTMLPlaygroundCounterElement>;
            "playground-modal": LocalJSX.PlaygroundModal & JSXBase.HTMLAttributes<HTMLPlaygroundModalElement>;
        }
    }
}
