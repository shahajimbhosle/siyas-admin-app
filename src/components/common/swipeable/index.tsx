import styled from "styled-components";

const Container = styled.div`
  display: content;
`;

const Swipeable = ({
  children,
  onSwipeRight = () => {},
  onSwipeLeft = () => {},
  onSwipeUp = () => {},
  onSwipeDown = () => {},
  minDiff = 0,
}) => {
  let xDown = null;
  let yDown = null;
  let xUp = null;
  let yUp = null;

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    evt.stopPropagation();
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    evt.stopPropagation();
    xUp = getTouches(evt)[getTouches(evt).length - 1].clientX;
    yUp = getTouches(evt)[getTouches(evt).length - 1].clientY;
  }

  function handleTouchEnd(evt) {
    evt.stopPropagation();

    if (!xDown || !yDown || !xUp || !yUp) {
      return;
    }

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > minDiff) {
        /* left swipe */
        onSwipeLeft();
      } else if (xDiff * -1 > minDiff) {
        /* right swipe */
        onSwipeRight();
      }
    } else {
      if (yDiff > minDiff) {
        /* up swipe */
        onSwipeUp();
      } else if (yDiff * -1 > minDiff) {
        /* down swipe */
        onSwipeDown();
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  return (
    <Container
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </Container>
  );
};

export default Swipeable;
