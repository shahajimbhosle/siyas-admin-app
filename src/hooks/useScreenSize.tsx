import { useMediaQuery } from "rsuite";

type useScreenSizeReturnType = {
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
};

const useScreenSize = (): useScreenSizeReturnType => {
  const mediaQuerySizeMap = {
    // isSmallPhone: "(max-width: 576px)",
    isMobile: "(max-width: 768px)",
    isTablet: "(min-width: 992px)",
    isDesktop: "(min-width: 1200px)",
    // isLargeScreen: "(max-width: 1400px)",
    // isExtraLargeScreen: "(max-width: 1400px)",
  };

  const sizesArray = useMediaQuery(Object.values(mediaQuerySizeMap));

  let sizes: { [key: string]: any } = {};

  Object.keys(mediaQuerySizeMap).forEach(
    (key: string, i: number) => (sizes[key] = sizesArray[i])
  );

  return sizes;
};

export default useScreenSize;
