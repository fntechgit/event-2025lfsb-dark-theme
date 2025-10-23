import {
  useState,
  useEffect
} from "react";

const useIntersectionObserver = (
  ref,
  options = {
    rootMargin: "0px",
    threshold: "1.0"
  }
) => {
  const [intersecting, setIntersecting] = useState(false);
  const callback = ([entry]) => setIntersecting(entry.isIntersecting);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(callback, options);
    const currentRef = ref.current;
    currentRef && observer.observe(currentRef);
    return () => {
      currentRef && observer.unobserve(currentRef);
    };
  }, [ref, options]);
  return intersecting;
};

export default useIntersectionObserver;
