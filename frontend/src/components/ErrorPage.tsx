// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  font-family: 'Lexend Deca', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  font-size: 0.875rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  line-height: 1.5rem;
`;

const Header = styled.h1`
  text-shadow: 0 0 1px transparent;
  margin-bottom: 1.25rem;
  color: #33475b;
  font-size: 1.25rem;
  margin-top: 10px;
`;

export const IframeErrorPage = () => (
  <Container>
    <img
      alt="Cannot find page"
      width="375"
      src={`${window.accessiblyConfig.pluginPath}/public/assets/images/error.svg`}
    />
    <Header>
      The Accessibly for WordPress plugin is not able to load pages
    </Header>
    <p>
      Try disabling your browser extensions and ad blockers, then refresh the page.
    </p>
    <p>
      Or try to open the plugin in a different browser.
    </p>
  </Container>
);
