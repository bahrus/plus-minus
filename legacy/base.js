// @ts-check
import {Mount} from 'trans-render/Mount.js';
/** @import {EndUserProps, AP, Actions} from "../types" */

/**
 * @implements {Actions}
 */
class Base extends Mount {
    /**
     * @type {Array<AbortController>}
     */
    #abortControllers = []
    /**
     * 
     * @param {AP} self 
     */
    addBeforeMatchListeners(self) {
        this.disconnect();
        const {controls} = self;
        for(const ctl of controls){
            const el = ctl.deref();
            if(el === undefined) continue;
            const ac = new AbortController;
            this.#abortControllers.push(ac);
            el.addEventListener('beforematch', e => {
                this.expanded = true;
            },  {signal: ac.signal})
        }
    }

    disconnect(){
        for(const ac of this.#abortControllers){
            ac.abort();
        }
        this.#abortControllers = [];
    }

    disconnectedCallback(){
        this.disconnect();
    }
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
        const ids = ariaControls.split(' ').filter(s => s.trim() !== '');
        const element = /** @type {HTMLElement} */ (/** @type {any} */ (self));
        const rn = /** @type {DocumentFragment} */ (element.getRootNode());
        /** @type {Set<string>} */
        let refsNotFound = new Set();
        /** @type {Array<WeakRef<Element>>} */
        const controls = [];
        for(const id of ids){
            const controlledEl = rn.getElementById(id);
            if(controlledEl === null){
                refsNotFound.add(id);
                continue;
            }
            controls.push(new WeakRef(controlledEl));
        }
        //const controls = split.map(s => rn.getElementById(s)).filter(el=> el !== null).map(el => new WeakRef(el));
        return {
            controls,
            refsNotFound
        };
    }



    
    
}

customElements.define('plus-minus-base', Base);