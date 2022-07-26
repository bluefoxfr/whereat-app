import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  padding-left: 10px;
  gap: 10px;
`

export const QtCurrent = styled.div`
width: 30px;
height: 15px;
border-radius: 44px;
background: #1D1D1D;
`

export const QtNext = styled.div`
width: 15px;
height: 15px;
border-radius: 100%;
background: rgba(29, 29, 29, 0.8);
`

export const QtFinal = styled.img`
width: 17px;
height: 15.5px;
`