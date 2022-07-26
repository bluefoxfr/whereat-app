import styled from 'styled-components';
import { Checkbox } from '@chakra-ui/react';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 70px;
background-color: #e2e2e2;
position: absolute;
width: 100%;
min-height: 100%;
`

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-content: center;
width: 100%;
`

export const RightElement = styled.div`
  justify-content: flex-end;
`

export const NavContainer = styled.div`
  justify-self: flex-start;
  align-self: center;
`

export const QuestionContainer = styled.div`
  justify-self: center;
`

export const QuestionTitle = styled.h1`
font-style: normal;
font-weight: 500;
font-size: 60px;
line-height: 105px;
text-align: center;
max-width: 1200px;
`