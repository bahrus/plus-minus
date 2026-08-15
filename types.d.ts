import {SimpleWCInfo} from './ts-refs/wc-info/SimpleWCInfo';

export interface EndUserProps {
    /**
     * If true, the button is in expanded state
     */
    expanded: boolean,
    // /**
    //  * If true, the button is in collapsed state
    //  */
    // collapsed: boolean,
    // /**
    //  * Global attribute inheritance
    //  */
    // ariaExpanded: boolean,
    // /**
    //  * IDs of the elements that are controlled by this button
    //  */
    ariaControls: string,
    disabled: boolean,
    //initialized: boolean,
    expandButton: HTMLButtonElement,
    collapseButton: HTMLButtonElement,
    clone: Element | DocumentFragment | ShadowRoot
    
}

export interface AP extends EndUserProps{
    controls: Array<WeakRef<Element>>,
    refsNotFound: Set<string>,
}

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
