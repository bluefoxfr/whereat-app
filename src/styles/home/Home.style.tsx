import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  background-color: #E2E2E2;
  position: absolute;
  width: 100%;
  min-height: 100%;
`

export const Text = styled.h1`
  max-width: 1000px;
  min-height: 192px;
  font-size: 60px;
  text-align: center;
  margin-bottom: -50px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 30px;
  gap: 100px;
`

export const Author = styled.p`
  font-family: 16px;
  flex: none;
  order: 4;
  flex-grow: 0;
  margin-top: 20px;
`