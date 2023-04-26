import { styled } from "../../styles";

export const CartItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  
});

export const ContainerImage = styled('div', {
  width: '6.371rem',
  height: '5.812rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '0.5rem',

  padding: '0.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',

  marginRight: '1.25rem',

  img: {
    height: '5.92rem',
    width: '5.92rem',
    objectFit: 'cover',
  }

});
  
export const DescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '94px',

  h3: {
    fontSize: '18px',
    fontWeight: 400,
    color: '$gray300',
  },
  p: {
    fontSize: '18px',
    fontWeight: 700,
    color: '$gray100',
  },

  button: {
    background: 'none',
    border: 'none',
    color: '$green300',
    fontSize: '18px',
    fontWeight: 700,
    cursor: 'pointer',
    width: '65px',
  }
});
     