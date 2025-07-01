import React, { ReactNode } from "react";
import Link from "next/link";
import { TextSwipeAnimation } from "./TextSwipeAnimation";
import { cn } from "@/lib/utils";

interface IconButtonProps {
  href: string;
  children: ReactNode;
  icon: ReactNode;
  className?: string;
  variant?: "black" | "orange" | "olive" | "custom";
  customClasses?: {
    button?: string;
    iconWrapper?: string;
  };
  onClick?: () => void;
}

export function IconButton({
  href,
  children,
  icon,
  className = "",
  variant = "black",
  customClasses,
  onClick,
}: IconButtonProps) {
  // Define styling based on variant
  let buttonStyle = "";
  let iconWrapperStyle = "bg-white rounded-full p-1 mr-2 flex items-center justify-center";

  switch (variant) {
    case "black":
      buttonStyle = "bg-black hover:bg-gray-800 text-white";
      break;
    case "orange":
      buttonStyle = "bg-nourish-orange hover:bg-nourish-orange/90 text-nourish-text shadow-lg shadow-nourish-orange/20";
      break;
    case "olive":
      buttonStyle = "bg-olive hover:bg-olive/90 text-white shadow-lg shadow-olive/20";
      break;
    case "custom":
      buttonStyle = customClasses?.button || "";
      iconWrapperStyle = customClasses?.iconWrapper || iconWrapperStyle;
      break;
  }

  const buttonClasses = cn(
    buttonStyle,
    "rounded-full px-3 py-3 flex items-center font-medium transition-all group cursor-pointer",
    className
  );

  const content = (
    <>
      <span className={iconWrapperStyle}>{icon}</span>
      <TextSwipeAnimation>{children}</TextSwipeAnimation>
    </>
  );

  // If onClick is provided, render a button, otherwise render a Link
  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClasses}>
        {content}
      </button>
    );
  }

  // Otherwise render as a Link
  return (
    <Link href={href} className={buttonClasses}>
      {content}
    </Link>
  );
}
