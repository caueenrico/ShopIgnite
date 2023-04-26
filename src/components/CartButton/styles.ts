import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '3rem',
  width: '3rem',
  borderRadius: '8px',
  border: 'none',

  background:'$gray800',
  transition: '0.2s',
  
  svg: {
    color: '$gray700'
  },

  '&:hover': {
    background: '$gray700',
    svg: {
      color: '$white'
    }
  }
})