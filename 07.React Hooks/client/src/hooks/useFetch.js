import { useEffect, useState } from "react";

export default function useFetch(url, defaultMessages = {}) {
  const [messages, setMessages] = useState(defaultMessages);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setPending(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        return setMessages(Object.values(result));
      });
    setPending(false);
  }, [url]);

  return [pending, messages];
}
