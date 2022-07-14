import React from 'react';
import Links from '../components/Links';
import styled from 'styled-components';
import { CardToggle } from '@gadeoli/rjs-component-library-themed';

function Test8() {
  return (
    <div>
        <Links />

        <Test>
          <CardToggle toggleTrigger={(trigger) => (<button onClick={() => trigger()}>triggerMe</button>)}>
              MyToggleContent
          </CardToggle>

          <CardToggle toggleTrigger={(trigger) => (<button onClick={() => trigger()}>triggerMe</button>)}>
              MyToggleContent MyToggleContent
          </CardToggle>
        </Test>
    </div>
  );
}

export default Test8;

const Test = styled.div`
  height: calc(100vh - 80px);
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`