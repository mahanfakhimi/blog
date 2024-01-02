import { type FC, type ReactNode, useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  containerId?: string;
  children: ReactNode;
};

const Portal: FC<PortalProps> = ({ containerId = "#portals", children }) => {
  const [isEffectRun, setIsEffectRun] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containerElement = document.querySelector<HTMLDivElement>(containerId);

    if (!containerElement) return;

    containerRef.current = containerElement;
    setIsEffectRun(true);

    return () => {
      containerRef.current = null;
      setIsEffectRun(false);
    };
  }, [containerId]);

  if (!isEffectRun) return null;

  return ReactDOM.createPortal(children, containerRef.current!);
};

export default Portal;
