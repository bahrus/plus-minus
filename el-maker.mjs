//@ts-check

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import {akaMethods as m, aka, builtInEmoji} from 'assign-gingerly/DX/emojis.js';

/** @import {FontFaceFeatureConfig} from './types/font-face-feature/types'; */
/** @import {EndUserProps} from './types'; */
/** @import {RoundaboutOptions} from './types/roundabout/types' */
/** @import {ElMakerConfig} from './types/el-maker/types' */

/**
 * @type {{ [K in keyof EndUserProps]: K }}
 */
const props = {
    expanded: 'expanded'
};

/**
 * @type {RoundaboutOptions<EndUserProps>}
 */
const raConfig = {

}

/** @type {ElMakerConfig<EndUserProps>} */
const features = {
    assignFeatures: {
        roundabout: {
            customData: {

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