import { useEffect, useState } from "react";

export default function useFetch(url, defaultMessages = {}) {
  const [state, setState] = useState(defaultMessages);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setPending(true);

    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((res) => res.json())
      .then((result) => {
        return setState(Object.values(result));
      });
    setPending(false);
    return () => {
      abortController.abort();
    };
  }, [url]);

  return [pending, state];
}
