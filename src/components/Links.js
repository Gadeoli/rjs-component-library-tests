import { Card, CardContent, Span } from '@gadeoli/rjs-component-library-themed';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ToogleTheme from './ToogleTheme';

function Links() {
  return (
    <Card style={{marginBottom: '1rem'}}>
      <CardContent>
        <Container>
          <LinkContainer>
            <ToogleTheme />
          </LinkContainer>
          <LinkContainer><Link to='/test1'><Span>Test 01</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test2'><Span>Test 02</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test3'><Span>Test 03</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test4'><Span>Test 04</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test5'><Span>Test 05</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test6'><Span>Test 06</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test7'><Span>Test 07</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test7_2'><Span>Test 07_2</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test7_3'><Span>Test 07_3</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test7_4'><Span>Test 07_4</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test7_5'><Span>Test 07_5</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test7_6'><Span>Test 07_6</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test7_7'><Span>Test 07_7</Span></Link></LinkContainer>
          <LinkContainer><Link to='/test8'><Span>Test 08</Span></Link></LinkContainer>
        </Container>
      </CardContent>
    </Card>
  );
}

export default Links;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const LinkContainer = styled.div`
  margin-right: .5rem;
`;