import { useEffect, useState } from "react";

export const useDetectSection = () => {
  const [section, setSection] = useState<null | string>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setSection(entry.target.id);
        }
      },
      { threshold: 0.5 }
    );

    document
      .querySelectorAll("section")
      .forEach((target) => observer.observe(target));
  }, []);

  return section;
};
