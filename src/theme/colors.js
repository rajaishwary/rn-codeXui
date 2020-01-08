const buttonTypes = {
  primary: 'PRIMARY',
  secondary: 'SECONDARY',
  outlined: 'OUTLINED',
  danger: 'DANGER',
};

export const colors = {
  primary: '#009688',
  darkPrimary: '#00796B',
  lightPrimary: '#B2DFDB',
  primaryText: '#212121',
  accent: '#FFC107',
  secondaryText: '#757575',
  divider: '#BDBDBD',
  linearGradient: ['#009688', '#00d1be'],
  disabled: '#f5f5f5',
  lightGray:'#EBEBEB',
  white:'#FFFFFF',
  black:'#000000',
  darkSilver:'#6c6c6c',
  button: {
    [buttonTypes.primary]: {
      background: '#009688',
      text: '#FFF',
      linearGradient: ['#009688', '#35d8c9']
    },
    [buttonTypes.secondary]: {
      background: '#ffce00',
      text: '#000',
      linearGradient: ['#ffce00', '#ffe267']
    },
    [buttonTypes.outlined]: {
      background: '#FFFFFF',
      text: '#000',
      linearGradient: ['#FFFFFF', '#e4e4e4']
    },
    [buttonTypes.danger]: {
      background: '#f63c3f',
      text: '#FFF',
      linearGradient: ['#f63c3f', '#ff696b']
    },
  },
};
