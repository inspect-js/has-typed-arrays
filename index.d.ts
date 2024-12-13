import whichTypedArray from 'which-typed-array';

declare namespace hasTypedArrays {
    type TypedArrayName = whichTypedArray.TypedArrayName;
}

declare function hasTypedArrays(): boolean;

export = hasTypedArrays;