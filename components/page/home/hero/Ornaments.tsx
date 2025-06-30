import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroProductImageProps {
  initialDelay?: number;
}

export const HeroProductImage = ({ initialDelay = 0 }: HeroProductImageProps) => {
  const width = "100%";
  const height = "100%";
  const group1Ref = useRef<SVGRectElement>(null);
  const group2Ref = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (!group1Ref.current || !group2Ref.current) return;

    // Entrance animation
    gsap.fromTo(
      [group1Ref.current, group2Ref.current],
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: initialDelay,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    // Parallax: move group1 up, group2 down as you scroll
    gsap.fromTo(
      group1Ref.current,
      {
        rotate: 25,
        transformOrigin: "center center",
      },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: group1Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      group2Ref.current,
      {
        rotate: -35,
        transformOrigin: "center center",
      },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: group2Ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1362 804"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ display: "block" }}
      className="absolute top-0 left-0"
    >
      <g clipPath="url(#clip0_339_1779)">
        <rect
          ref={group1Ref}
          x="724.859"
          y="303"
          width="290.849"
          height="409.007"
          transform="rotate(15 714.859 283)"
          fill="url(#pattern0_339_1779)"
        />
        <rect
          ref={group2Ref}
          x="928"
          y="216.878"
          width="266.125"
          height="369.904"
          transform="rotate(-15 918 196.878)"
          fill="url(#pattern1_339_1779)"
        />
      </g>
      <defs>
        <pattern id="pattern0_339_1779" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_339_1779" transform="scale(0.00130208 0.000925926)" />
        </pattern>
        <pattern id="pattern1_339_1779" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1_339_1779" transform="scale(0.001287 0.000925926)" />
        </pattern>

        <image
          id="image0_339_1779"
          width="768"
          height="1080"
          preserveAspectRatio="none"
          xlinkHref="/images/hero/hero-product-01.webp"
        />
        <image
          id="image1_339_1779"
          width="777"
          height="1080"
          preserveAspectRatio="none"
          xlinkHref="/images/hero/hero-product-02.webp"
        />
      </defs>
    </svg>
  );
};
