import {useEffect, useRef} from 'react';

export const usePrevious = value => {
  const ref = useRef(value);

  useEffect(() => {
    if (ref.current !== value) {
      ref.current = value;
    }
  }, [value]);

  return ref.current;
};
