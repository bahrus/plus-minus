export interface EndUserProps {
    expanded: boolean,
    collapsed: boolean,
    ariaExpanded: boolean,
    ariaControls: string,
    
}

export interface AP extends EndUserProps{
    controls: Array<WeakRef<Element>>
}

export type PAP = Partial<AP>

export interface Actions {
    onAriaControls(self: AP & HTMLElement): PAP;

    changeVisibility(self: AP): void;
}