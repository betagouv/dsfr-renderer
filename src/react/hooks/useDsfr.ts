import { useEffect, useRef } from "react";

declare global {
  interface Window {
    __dsfrInitialized?: boolean;
  }
}

export function useDsfr() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (typeof window !== "undefined" && !window.__dsfrInitialized) {
      window.__dsfrInitialized = true;
    }
  }, []);
}

export function useDsfrInstance<T extends HTMLElement>(
  ref: React.RefObject<T>,
  onSuccess?: (element: T) => void
) {
  useEffect(() => {
    if (!ref.current) return;
    if (onSuccess) {
      onSuccess(ref.current);
    }
  }, [ref, onSuccess]);
}
