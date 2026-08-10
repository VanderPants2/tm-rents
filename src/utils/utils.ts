import {CSSProperties} from 'react';

type ClassValue = string | false | null | undefined;

export function cx(...classes: ClassValue[]) {
    return classes.filter(Boolean).join(' ');
}

/** Sets the live service hue on a subtree. Everything downstream reads
 *  `--service`, so no component has to be told which colour it is in. */
export function serviceStyle(hue: string) {
    return {'--service': hue} as CSSProperties;
}
