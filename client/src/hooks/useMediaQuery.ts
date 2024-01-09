import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [isMatches, setIsMatches] = useState(() => matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = matchMedia(query);

    setIsMatches(mediaQueryList.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => setIsMatches(e.matches);

    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => mediaQueryList.removeEventListener("change", handleMediaQueryChange);
  }, [query]);

  return isMatches;
};

export default useMediaQuery;
