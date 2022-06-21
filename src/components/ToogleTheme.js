import React from 'react';
import { 
    darkThemeKey,
    lightThemeKey,
    ThemeContext,

    Span,
    Toggle
  } from '@gadeoli/rjs-component-library-themed';
import styled from 'styled-components';

function ToogleTheme() {
  return (<ThemeContext.Consumer>
    {({mode, setMode}) => {        
        return <Container>
            <Span>Current theme: {mode}</Span>
            <Toggle 
                value={mode}
                checkedValue={lightThemeKey}
                uncheckedValue={darkThemeKey}
                onChange={(value) => {
                    setMode(value);
                }}
            />
        </Container>;
    }}
  </ThemeContext.Consumer>);
}

export default ToogleTheme;

const Container = styled.div`
    display: flex;
`