import type { ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'normal',
    fontSize: '36px',
  },
  sizes: {},
  variants: {
    classic: {
      bg: 'none',
      fontSize: '32px',
      fontFamily: 'Poppins',
      fontWeight: '500',
      padding: '25px 50px',
      border: '2px',
      borderRadius: '22px',
      borderColor: '#1D1D1D',
      color: '#1D1D1D',
      _hover: {
        bg: '#1D1D1D',
        color: '#FAFAFF',
      },
      _active: {
        bg: '#2A2A2A',
      },
    },
    list: {
      bg: 'none',
      fontSize: '32px',
      fontFamily: 'Poppins',
      fontWeight: '500',
      padding: '25px 50px',
      border: '2px',
      borderRadius: '22px',
      borderColor: '#1D1D1D',
      color: '#1D1D1D',
      _hover: {
        bg: '#36BB33',
        color: '#FAFAFF',
        borderColor: '#36BB33',
      },
      _click: {
        bg: '#36BB33',
        borderColor: '#36BB33',
      },
    },
  },
};

export default Button;
