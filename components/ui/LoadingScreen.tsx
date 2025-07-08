"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HeyoLogo } from "./HeyoLogo";
import styles from "./LoadingScreen.module.css";
import { useLoading } from "./LoadingContext";

export function LoadingScreen() {
  const { isLoading } = useLoading();
  const [isSplashing, setIsSplashing] = useState(false);
  const pathname = usePathname();

  // Only show on homepage
  const shouldShow = pathname === "/" && isLoading;

  useEffect(() => {
    if (!shouldShow) return;

    // Prevent scrolling when loading screen is shown
    document.body.style.overflow = "hidden";

    // Start splash animation after showing logo
    const splashTimer = setTimeout(() => {
      setIsSplashing(true);
    }, 1500); // Give logo time to show before splash

    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = "unset";
      clearTimeout(splashTimer);
    };
  }, [shouldShow]);

  if (!shouldShow) return null;

  return (
    <div className={`fixed inset-0 z-50 ${styles.container} ${isSplashing ? styles.splash : ""}`}>
      <div className={styles.fadeIn}>
        <HeyoLogo color="white" size={300} />
      </div>
    </div>
  );
}
