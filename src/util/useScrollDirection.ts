import { useState, useEffect } from "react";

export const useScrollDirection = () => {
  const [isScrollDown, setIsScrollDown] = useState<null | boolean>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const direction = currentScrollPos > prevScrollPos ? true : false;

      setIsScrollDown(direction);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return isScrollDown;
};
