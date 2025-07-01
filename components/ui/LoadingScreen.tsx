"use client";

import { useEffect, useState } from "react";
import { HeyoLogo } from "./HeyoLogo";
import styles from "./LoadingScreen.module.css";
import { useLoading } from "./LoadingContext";

export function LoadingScreen() {
  const { isLoading } = useLoading();
  const [isSplashing, setIsSplashing] = useState(false);

  useEffect(() => {
    if (!isLoading) return;

    // Start splash animation after showing logo
    const splashTimer = setTimeout(() => {
      setIsSplashing(true);
    }, 1500); // Give logo time to show before splash

    return () => clearTimeout(splashTimer);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className={`${styles.container} ${isSplashing ? styles.splash : ""}`}>
      <div className={styles.fadeIn}>
        <HeyoLogo color="white" size={300} />
      </div>
    </div>
  );
}
