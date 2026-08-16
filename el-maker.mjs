//@ts-check

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import {akaMethods as m, aka, builtInEmoji} from 'assign-gingerly/DX/emojis.js';
import {paths, doAssign, set, smoothOver} from 'assign-gingerly/DX/paths.js';

/** @import {EndUserProps, AP} from './types'; */
/** @import {RoundaboutOptions} from './types/roundabout/types' */
/** @import {ElMakerConfig} from './types/el-maker/types' */

const withMethods = [m['🔍']];

const $ = (/** @type {typeof paths<AP>} */ (/** @type {any} */(paths)))({withMethods});


/**
 * @type {RoundaboutOptions<EndUserProps>}
 */
const raConfig = {
    weakRef: {
        properties: ['expandButton', 'collapseButton'],
        logIfCollected: 'warn'
    },
    assignOptions: {
        akaMethods:{
            '🔍': m['🔍']
        },
    },
    compacts: {
        on_click_of_expandButton_assign: {
            [$.expandButton.hidden.Path]: true,
            [$.collapseButton.hidden.Path]: false,
            expanded: true,
            
        },
        on_click_of_collapseButton_assign: {
            expanded: false,
            [$.expandButton.hidden.Path]: false,
            [$.collapseButton.hidden.Path]: true,
        } 
    },
    merges: smoothOver([
        {
            ifKeyIn: ['clone'],
            assign: {
                expandButton: $.clone.querySelector('[name=expand]'),
                collapseButton: $.clone.querySelector('[name=collapse]'),
            }
        },
        {
            ifKeyIn: ['expanded'],
            ...doAssign(
                set($.ariaExpanded).to($.expanded),
                set($.ariaControlsElements.Each.hidden.QMEq).to([$.expanded, false, 'until-found'])
            )
        },
        {
            ifKeyIn: ['disabled'],
            ifAllOf: ['clone'],
            ...doAssign(
                set($.expandButton.disabled).to($.disabled),
                set($.collapseButton.disabled).to($.disabled),
            )
        },

    ]),
    defaultPropVals: {
        disabled: false
    }
}

/** @type {ElMakerConfig<EndUserProps>} */
const features = {
    assignFeatures: {
        roundabout: {
            customData: {
                raConfig,
            }
        },
        templateMaker: {}
    }
}

export function render() {
    return JSON.stringify(features, null, 4);
}

const __filename = fileURLToPath(import.meta.url);
const outputFile = __filename.replace(/\.mjs$/, '.json');
writeFileSync(outputFile, render(), 'utf8');