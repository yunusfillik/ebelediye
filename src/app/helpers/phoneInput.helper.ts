import { MaskitoElementPredicate, MaskitoOptions } from '@maskito/core';

export const PhoneMask: MaskitoOptions = {
  mask: [
    '+',
    '9',
    '0',
    ' ',
    '(',
    /\d/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
  ],
};

export const MaskPredicate: MaskitoElementPredicate = async (el) =>
  (el as HTMLIonInputElement).getInputElement();
