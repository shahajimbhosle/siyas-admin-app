import React from "react";
import { Container, Content } from "rsuite";
// import AppNav from "../app-nav";
// import AppBar from "../app-bar";
import AppBody from "../app-body";
import styled from "styled-components";
import { useNavContext, useScreenSize } from "../../hooks";
import Swipeable from "../common/swipeable";
import { NavigationObjectType } from "../../types";

const NavOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  z-index: 998;
  left: 0;
  top: 50px;
  background-color: black;
  opacity: 0.3;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  max-height: calc(100vh - 50px);
  overflow: auto;
`;

interface LayoutProps {
  children: any;
  navigation: NavigationObjectType;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  navigation,
}) => {
  const { expanded, setExpanded } = useNavContext();
  const { isMobile } = useScreenSize();

  const handleSwipeRight = () => {
    setExpanded(true);
  };

  const handleSwipeLeft = () => {
    setExpanded(false);
  };

  return (
    <Container>
      {/* <AppBar /> */}
      <Container>
        {/* <AppNav navigation={navigation} /> */}
        <ContentContainer>
          <Swipeable
            onSwipeRight={handleSwipeRight}
            onSwipeLeft={handleSwipeLeft}
            minDiff={100}>
            <Content>
              <AppBody>{children}</AppBody>
              {isMobile && expanded && <NavOverlay />}
            </Content>
          </Swipeable>
        </ContentContainer>
      </Container>
    </Container>
  );
};

export default Layout;
