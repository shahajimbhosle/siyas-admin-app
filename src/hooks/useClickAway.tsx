import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useClickAway = (ref: React.RefObject<any>, onClickAway = () => {}) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: TouchEvent | MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickAway();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickAway]);
};

export default useClickAway;
