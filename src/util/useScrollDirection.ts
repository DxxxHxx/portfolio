import { useState, useEffect } from "react";
import { ScrollDirectionType } from "../types/interface";

export function useScrollDirection(distance: number = 200) {
  const [scrollDirection, setScrollDirection] =
    useState<ScrollDirectionType>(null);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  useEffect(() => {
    const hanndleScroll = () => {
      if (window.scrollY > distance) {
        setIsTop(false);
        return;
      }
      setIsTop(true);
    };
    window.addEventListener("scroll", hanndleScroll);

    return () => window.removeEventListener("scroll", hanndleScroll);
  }, [distance]);

  return { scrollDirection, isTop };
}
