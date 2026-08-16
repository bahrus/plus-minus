import {SimpleWCInfo} from './types/wc-info/SimpleWCInfo';

export interface EndUserProps {
    /**
     * If true, the button is in expanded state
     */
    expanded: boolean,
    // /**
    //  * IDs of the elements that are controlled by this button
    //  */
    ariaControls: string,
    disabled: boolean,
    //initialized: boolean,

    
}

export interface AllProps extends EndUserProps{
    controls: Array<WeakRef<Element>>,
    refsNotFound: Set<string>,
    expandButton: HTMLButtonElement,
    collapseButton: HTMLButtonElement,
    clone: Element | DocumentFragment | ShadowRoot
}

export type AP = AllProps;

export interface RuntimeProps extends AllProps, HTMLElement{}


export type PAP = Partial<AP>

export interface Actions {
    onAriaControls(self: AP & HTMLElement): PAP;
    changeVisibility(self: AP): void;
    addBeforeMatchListeners(self: AP): void;
}

export abstract class PlusMinus implements SimpleWCInfo {
    src: './root.mjs';
    tagName: 'plus-minus';
    props: EndUserProps;
    cssParts?: {
        collapsed: 'Button that shows in collapsed state',
        expanded: 'Button that shows in expanded state',
        expand: 'The expand icon',
        collapse : 'The collapse icon',
        button: 'The main button element'
    };

}

export type Package = [PlusMinus]
