import { type TypedArrayName } from 'which-typed-array';

declare namespace hasTypedArrays {
    export type { TypedArrayName }
}

declare function hasTypedArrays(): boolean;

export = hasTypedArrays;