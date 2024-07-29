// @ts-check
import {Mount} from 'trans-render/Mount.js';
/** @import {EndUserProps, AP, Actions} from "./types.d.ts" */

/**
 * @implements {Actions}
 */
class Base extends Mount {
    /**
     * 
     * @param {AP} self 
     */
    changeVisibility(self) {
        const {controls, expanded} = self;
        for(const control of controls){
            const ref = /** @type {HTMLElement} */ (control.deref());
            if(ref === undefined) continue;
            ref.hidden = !expanded ? 'until-found': false;
        }
    }
    /**
     * 
     * @param {AP} self 
     */
    onAriaControls(self) {
        const {ariaControls} = self;
        const split = ariaControls.split(' ');
        const element = /** @type {HTMLElement} */ (/** @type {any} */ (self));
        const rn = /** @type {DocumentFragment} */ (element.getRootNode());
        const controls = split.map(s => rn.getElementById(s)).filter(el=> el !== null).map(el => new WeakRef(el));
        return {
            controls
        };
    }

    
    
}

customElements.define('plus-minus-base', Base);