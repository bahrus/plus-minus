//@ts-check

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import {akaMethods as m, aka, builtInEmoji} from 'assign-gingerly/DX/emojis.js';

/** @import {EndUserProps} from './types'; */
/** @import {RoundaboutOptions} from './types/roundabout/types' */
/** @import {ElMakerConfig} from './types/el-maker/types' */

// /**
//  * @type {{ [K in keyof EndUserProps]: K }}
//  */
// const props = {
//     expanded: 'expanded',
//     ariaControls: 'ariaControls',
//     disabled: 'disabled',
//     initialized: 
// };

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
            '?.expandButton?.hidden': true,
            '?.collapseButton?.hidden': false,
            expanded: true,
            
        },
        on_click_of_collapseButton_assign: {
            expanded: false,
            '?.expandButton?.hidden': false,
            '?.collapseButton?.hidden': true,
        } 
    },
    merges: [
        {
            ifKeyIn: ['clone'],
            assign: {
                expandButton: '?.clone?.🔍?.[name=expand]',
                collapseButton: '?.clone?.🔍?.[name=collapse]'
            }
        },
        {
            ifKeyIn: ['expanded'],
            assign: {
                '?.ariaExpanded': '?.expanded',
                '?.ariaControlsElements?.@each?.hidden =!': '?.expanded',
            }
        },
        {
            ifKeyIn: ['disabled'],
            ifAllOf: ['clone'],
            assign: {
                '?.expandButton?.disabled': '?.disabled',
                '?.collapseButton?.disabled': '?.disabled',
            }
        },

    ],
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