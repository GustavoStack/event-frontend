import { useRef, useEffect, useState, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Para animar só uma vez
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "animate-fade-up animate-once animate-duration-700 animate-delay-[250ms] animate-ease-linear animate-fill-both"
          : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};
const FadeInSectionDawn: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Para animar só uma vez
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        isVisible
          ? "animate-fade-down animate-once animate-duration-300 animate-delay-[150ms] animate-ease-linear animate-fill-both"
          : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export {FadeInSection, FadeInSectionDawn};
