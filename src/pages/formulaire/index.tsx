import React, { FunctionComponent, useState } from 'react';
import type { NextPage } from 'next';
import { ChakraProvider, Checkbox } from '@chakra-ui/react';
import { Logo } from '../../components/Logo/Logo.component';
import theme from '../../styles/theme';
import { Container, NavContainer, QuestionContainer, QuestionTitle, RightElement, Wrapper } from '../../styles/formulaire/Formulaire.style';
import { QuestionBar } from '../../components/QuestionBar/QuestionBar.component';

const Formulaire: FunctionComponent<NextPage> = ({
}) => {
  const [nbDone, setNbDone] = useState(0);
  const [current, SetCurrent] = useState(true);
  const [next, SetNext] = useState(true);
  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
        <Logo isDark={true} />
        <Container>
          <NavContainer>
            <QuestionBar numberDone={nbDone} isCurrent={current} isNext={next} />
          </NavContainer>
          <QuestionContainer>
            <QuestionTitle>Quelle(s) spécialité(s) ?</QuestionTitle>
          </QuestionContainer>
          <RightElement />
        </Container>
      </Wrapper>
    </ChakraProvider>
  );
};

export default Formulaire;