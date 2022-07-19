import type { NextPage } from 'next'
import { Logo } from '../components/Logo/Logo.component'
import { Author, Container, Text, TextContainer } from '../styles/home/Home.style'
import { Button, ChakraProvider } from '@chakra-ui/react'
import theme from "../styles/theme";

const Home: NextPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Logo isDark={true} />
        <TextContainer>
          <Text>Vous avez faim mais vous ne savez pas où manger ? 🤔</Text>
          <Text>Répondez à notre questionnaire et nous trouvons pour vous ! 🍔</Text>
        </TextContainer>
        <Button variant="classic" >Commencer</Button>
        <Author>made by bluefox with ❤️</Author>
      </Container>
    </ChakraProvider>
  )
}

export default Home
