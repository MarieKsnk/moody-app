import { useEffect, useRef } from "react";

export const useScrollSnapping = (selector = ".snap-section") => {
  const isScrolling = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = Array.from(
      document.querySelectorAll(selector)
    ) as HTMLElement[];
    if (sections.length < 2) return;

    let currentIndex = 0;

    const scrollToSection = (index: number) => {
      if (isScrolling.current) return;

      const clamped = Math.max(0, Math.min(sections.length - 1, index));
      currentIndex = clamped;
      isScrolling.current = true;

      sections[clamped].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    const onWheel = (e: WheelEvent) => {
      const withinSnap = sections.some((section) =>
        section.contains(e.target as Node)
      );
      if (!withinSnap) return;

      e.preventDefault();

      if (e.deltaY > 0) {
        scrollToSection(currentIndex + 1);
      } else if (e.deltaY < 0) {
        scrollToSection(currentIndex - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [selector]);
};
