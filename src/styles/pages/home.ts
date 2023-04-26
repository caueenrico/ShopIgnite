import Link from "next/link";
import { styled } from "..";

export const HomeContainer = styled('main', {
  display: "flex",
  // gap: '3rem', isso atrapalha quando utilizamos o keen-slider

  width: '100%',    
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,

})

export const Product = styled(Link, { //este 'Link' que esta vindo do nextJS mas a mesma função da tag 'a' porem mantem o conceito de paginas SPA
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.25rem', isso atrapalha quando utilizamos o keen-slider
  cursor: 'pointer',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  overflow:'hidden',

  img: {
    objectFit: 'cover',
  },
 
  footer:{
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,0.6)',
    
    // efeito de subir e descer do footer
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
    
    

    strong:{
      fontSize: '$lg',
      color: '$gray300'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    }

  },

  '&:hover': {
    // faz parte do efeito de subir e descer do footer 
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})