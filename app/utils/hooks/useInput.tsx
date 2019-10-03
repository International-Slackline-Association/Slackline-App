import { useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from 'utils/storage';
import { convertLength } from 'components/Converter/Length/formula';
import { convertMass } from 'components/Converter/Mass/formula';
import { convertForce } from 'components/Converter/Force/formula';
import { Utils } from 'utils/index';

export function useInput(
  storageKey: string,
  type: 'length' | 'weight',
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
  let defaultValue: number | undefined;
  const storedValue = getStorageItem(storageKey);
  if (storedValue) {
    defaultValue = valueType.type === 'int' ? parseInt(storedValue, 10) : parseFloat(storedValue);
  } else if (defaultValues.initial) {
    defaultValue = defaultValues.initial;
  }

  const [value, setValue] = useState(defaultValue);
  const [valueString, setValueString] = useState(!Utils.isNil(value) ? value!.toString() : '');
  console.log(value);

  // useEffect(() => {}, []);

  function updateValue(newValue: string, switchValue?: boolean) {
    let v: number | undefined;
    if (newValue) {
      v =
        valueType.type === 'int'
          ? parseInt(newValue, 10)
          : parseFloat(newValue);
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

    setValueString(!Utils.isNil(v) ? v!.toString() : '');
    if (switchValue) {
      switch (type) {
        case 'length':
          v = convertLength(undefined, v)!.meters;
          break;
        case 'weight':
          v = convertMass(undefined, v)!.kg;
          break;
        default:
          break;
      }
    }
    setValue(v);
    if (!Utils.isNil(v)) {
      setStorageItem(storageKey, v!.toString());
    }
  }

  return { value, valueString, updateValue };
}
