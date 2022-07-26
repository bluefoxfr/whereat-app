import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const ErrorTitle = styled.h1`
  flex: 0;
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  font-size: 96px;
  line-height: 144px;
  color: #1d1d1d;
`;

const ErrorDesc = styled.h1`
  flex: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  color: #1d1d1d;
  margin-top: -20px;
`;

export default function FourOhFour() {
  return (
    <>
      <ErrorContainer>
        <ErrorTitle>Error 404</ErrorTitle>
        <ErrorDesc>Page not found</ErrorDesc>
      </ErrorContainer>
    </>
  );
}
