import { useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from 'utils/storage';
import { convertLength } from 'components/Converter/Length/formula';

export function useLengthInput(
  storageKey: string,
  valueType: {
    type: 'int' | 'float';
    decimalLimit?: number;
  } = { type: 'int' },
  defaultValues: {
    initial?: number;
    empty?: number;
    min?: number;
  } = {},
) {
  let defaultLength: number | undefined;
  const storedValue = getStorageItem(storageKey);
  if (storedValue) {
    defaultLength = parseInt(storedValue, 10);
  } else if (defaultValues.initial) {
    defaultLength = defaultValues.initial;
  }

  const [length, setLength] = useState(defaultLength || undefined);
  const [lengthString, setLengthString] = useState(
    length ? length.toString() : '',
  );

  // useEffect(() => {}, []);

  function updateLengthValue(value: string, switchValue?: boolean) {
    let v: number | undefined;
    if (value) {
      v = valueType.type === 'int' ? parseInt(value, 10) : parseFloat(value);
      if (valueType.decimalLimit && valueType.type === 'float') {
        v = parseFloat(v.toFixed(valueType.decimalLimit));
      }
    } else {
      if (defaultValues.empty) {
        v = defaultValues.empty;
      }
    }

    if (defaultValues.min) {
      if (!v || v <= defaultValues.min) {
        v = defaultValues.min;
      }
    }

    setLengthString(v ? v.toString() : '');
    if (switchValue) {
      v = convertLength(undefined, v)!.meters;
    }
    setLength(v);
    if (v) {
      setStorageItem(storageKey, v.toString());
    }
  }

  return { length, lengthString, updateLengthValue };
}
