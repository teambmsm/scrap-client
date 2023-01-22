import { DefaultTheme } from 'styled-components';

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1439px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
  desktop: `screen and (max-width: ${deviceSizes.desktop})`,
};

export const theme: DefaultTheme = {
  device,

  colors: {
    black: '#1e1f1d',
    yellow: '#edb83c',
    orange: '#eb7952',
    gray: '#6e6e6e',
    gray_background: '#f5f5f5',
  },
};
