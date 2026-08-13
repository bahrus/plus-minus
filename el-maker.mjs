//@ts-check

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import {akaMethods as m, aka, builtInEmoji} from 'assign-gingerly/DX/emojis.js';

/** @import {EndUserProps} from './types'; */
/** @import {RoundaboutOptions} from './types/roundabout/types' */
/** @import {ElMakerConfig} from './types/el-maker/types' */

/**
 * @type {{ [K in keyof EndUserProps]: K }}
 */
const props = {
    expanded: 'expanded',
    ariaControls: 'ariaControls',
    disabled: 'disabled',
};

/**
 * @type {RoundaboutOptions<EndUserProps>}
 */
const raConfig = {
    assignOptions: {
        akaMethods:{
            '🔍': m['🔍']
        },
    },
    merges: [
        {
            ifAllOf: ['expanded'],
            assign: {
                '?.shadowRoot?.🔍?.button.ariaExpanded': 'true'
            }
        },
        {
            ifKeyIn: ['disabled'],
            assign: {
                '?.shadowRoot?.🔍?.input?.disabled': '?.disabled',
            }
        }
    ]
}

/** @type {ElMakerConfig<EndUserProps>} */
const features = {
    assignFeatures: {
        roundabout: {
            customData: {
                raConfig,
            }
        }
    }
}

export function render() {
    return JSON.stringify(features, null, 4);
}

const __filename = fileURLToPath(import.meta.url);
const outputFile = __filename.replace(/\.mjs$/, '.json');
writeFileSync(outputFile, render(), 'utf8');