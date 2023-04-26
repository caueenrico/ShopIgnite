import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '../../styles';

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30rem',
  background: '$gray800',
  paddingTop: "4.5rem",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  display: "flex",
  flexDirection: "column",
  padding: '3rem',

  h1: {
    marginTop: '24px',
    marginBottom: "2rem",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "$gray100",
    
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  footer: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    
    
    padding: '1.5rem',
    
    div: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '7px',

      h2: {
        fontSize: '16px',
        fontWeight: 400,
      }, 

      span: {
        fontSize: '18px',
      },

      h3: {
        fontSize: '18px',
        fontWeight: 700,
      },

      p:{
        fontSize: '24px',
        fontWeight: 700,
      },
    },

    button: {
      width: '100%',
      height: '69px',
      background: '$green500',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '18px',
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'filter 0.2s',
      marginTop: '55px',
    },
  },

});

export const CartClose = styled(Dialog.Close, {
  background: "none",
  border: "none",
  color: "$gray500",
  position: "absolute",
  top: "1.75rem",
  right: "1.75rem",
});
