import { useEffect, useState } from "react";

export function useDelayedBoolean(
  value: boolean,
  delayMilliseconds = 120,
): boolean {
  const [delayedValue, setDelayedValue] = useState(false);

  useEffect(() => {
    if (!value) {
      setDelayedValue(false);

      return;
    }

    const timeoutId = window.setTimeout(() => {
      setDelayedValue(true);
    }, delayMilliseconds);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [value, delayMilliseconds]);

  return delayedValue;
}
