import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(() => matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = matchMedia(query);

    setMatches(mediaQueryList.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    mediaQueryList.addEventListener("change", handleMediaQueryChange);

    return () => mediaQueryList.removeEventListener("change", handleMediaQueryChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
