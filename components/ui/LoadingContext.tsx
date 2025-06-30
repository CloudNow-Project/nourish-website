"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface LoadingContextType {
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType>({ isLoading: true });

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll when loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Show loader for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return <LoadingContext.Provider value={{ isLoading }}>{children}</LoadingContext.Provider>;
}

export const useLoading = () => useContext(LoadingContext);
