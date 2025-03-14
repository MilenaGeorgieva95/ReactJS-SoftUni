import { useEffect, useState } from "react";

export default function useFetch(url, defaultMessages = {}) {
  const [state, setState] = useState(defaultMessages);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setPending(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        return setState(Object.values(result));
      });
    setPending(false);
  }, [url]);

  return [pending, state];
}
