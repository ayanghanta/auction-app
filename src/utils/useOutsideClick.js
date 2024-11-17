import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const refEl = useRef(null);
  useEffect(
    function () {
      function handleClick(e) {
        if (refEl.current && !refEl.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.addEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return { refEl };
}
