import {SimpleWCInfo} from './ts-refs/wc-info/SimpleWCInfo';

export interface EndUserProps {
    expanded: boolean,
    collapsed: boolean,
    ariaExpanded: boolean,
    ariaControls: string,
    
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
