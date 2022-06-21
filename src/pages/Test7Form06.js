import { Card, CardContent, Input, Span } from '@gadeoli/rjs-component-library-themed';
import React from 'react';
import styled from 'styled-components';
import Links from '../components/Links';

function Test7Form02() {
  return (    
    <div>
      <Links />

      <div>
        <Card>
          <CardContent>
              <InputContainer>
                <Span>Input 01</Span>
                <Input />
              </InputContainer>

              <InputContainer>
                <Span>Input 02</Span>
                <Input />
              </InputContainer>

              <InputContainer>
                <Span>Input 03</Span>
                <Input />
              </InputContainer>

              <InputContainer>
                <Span>Input 04</Span>
                <Input />
              </InputContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Test7Form02;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;