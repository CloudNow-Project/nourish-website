import { ShadowedHeading } from "@/components/ui/ShadowedHeading";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  variant?: "default" | "secondary" | "primary";
  customTextColor?: string;
  customShadowColor?: string;
  alignment?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  bottomMargin?: "none" | "small" | "medium" | "large";
}

export function SectionHeading({
  heading,
  subheading,
  variant = "default",
  customTextColor,
  customShadowColor,
  alignment = "center",
  size = "lg",
  bottomMargin = "large",
}: SectionHeadingProps) {
  const getColors = () => {
    switch (variant) {
      case "primary":
        return {
          text: "#ffffff",
          shadow: "rgba(255,255,255,0.3)",
        };
      case "secondary":
        return {
          text: "#ae431e",
          shadow: "#E5E7EB",
        };
      default:
        return {
          text: "#1f2937",
          shadow: "#E5E7EB",
        };
    }
  };

  const getBottomMarginClass = () => {
    switch (bottomMargin) {
      case "none":
        return "mb-0";
      case "small":
        return "mb-4";
      case "medium":
        return "mb-8";
      case "large":
        return "mb-16";
      default:
        return "mb-16";
    }
  };

  const colors = getColors();
  const textColor = customTextColor || colors.text;
  const shadowColor = customShadowColor || colors.shadow;
  const marginClass = getBottomMarginClass();

  return (
    <div className={`text-${alignment} ${marginClass}`}>
      <AnimatedElement variant="fadeInUp" delay={0.1}>
        <ShadowedHeading
          text={heading}
          as="h2"
          size={size}
          textColor={textColor}
          shadowColor={shadowColor}
          shadowOffset={3}
          className={`text-${alignment} mb-4`}
        />
      </AnimatedElement>

      {subheading && (
        <AnimatedElement variant="fadeInUp" delay={0.2}>
          <p
            className={`text-lg ${
              variant === "primary" ? "text-white/90" : "text-gray-600"
            } max-w-2xl mx-auto font-semibold`}
          >
            {subheading}
          </p>
        </AnimatedElement>
      )}
    </div>
  );
}
