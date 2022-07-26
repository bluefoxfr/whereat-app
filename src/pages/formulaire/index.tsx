import React, { FunctionComponent } from 'react';
import type { NextPage } from 'next';
import { ChakraProvider } from '@chakra-ui/react';
import { Logo } from '../../components/Logo/Logo.component';
import theme from '../../styles/theme';
import { Wrapper } from '../../styles/formulaire/Formulaire.style';
import { QuestionBar } from '../../components/QuestionBar/QuestionBar.component';

const Formulaire: FunctionComponent<NextPage> = ({
}) => {
  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
        <Logo isDark={true} />
        <QuestionBar numberDone={0} isCurrent={true} isNext={true} />
      </Wrapper>
    </ChakraProvider>
  );
};

export default Formulaire;