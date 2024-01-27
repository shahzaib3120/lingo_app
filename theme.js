import { MD3LightTheme, MD3DarkTheme, configureFonts } from 'react-native-paper'
const fontConfig = {
  regular: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: 'normal',
    fontSize: 14
  },
  medium: {
    fontFamily: 'Axiforma-Medium',
    fontWeight: 'normal',
    fontSize: 16
  },
  heading: {
    fontFamily: 'Axiforma-Bold',
    fontWeight: 'bold',
    fontSize: 24
  },
  subheading: {
    fontFamily: 'Axiforma-Regular',
    fontWeight: 'normal',
    fontSize: 14
  }
}
const lightTheme = {
  ...MD3LightTheme,
  // Specify custom property
  myOwnProperty: true,
  dark: false,
  // Specify custom property in nested object

  // configure fonts for the app
  fonts: configureFonts({ config: fontConfig }),

  colors: {
    primary: 'rgb(10, 84, 232)',
    onPrimary: 'rgb(255, 255, 255)',
    text: 'rgb(0, 0, 0)',
    primaryContainer: 'rgb(220, 225, 255)',
    onPrimaryContainer: 'rgb(0, 22, 78)',
    secondary: 'rgb(30, 91, 187)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(217, 226, 255)',
    onSecondaryContainer: 'rgb(0, 26, 67)',
    tertiary: 'rgb(182, 204, 238)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(203, 230, 255)',
    onTertiaryContainer: 'rgb(0, 30, 48)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(254, 251, 255)',
    onBackground: 'rgb(27, 27, 31)',
    surface: 'rgb(254, 251, 255)',
    onSurface: 'rgb(27, 27, 31)',
    surfaceVariant: 'rgb(226, 225, 236)',
    onSurfaceVariant: 'rgb(69, 70, 79)',
    outline: 'rgb(118, 118, 128)',
    outlineVariant: 'rgb(198, 198, 208)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(48, 48, 52)',
    inverseOnSurface: 'rgb(242, 240, 244)',
    inversePrimary: 'rgb(181, 196, 255)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(241, 242, 254)',
      level2: 'rgb(234, 237, 253)',
      level3: 'rgb(226, 232, 252)',
      level4: 'rgb(224, 231, 252)',
      level5: 'rgb(218, 227, 251)'
    },
    surfaceDisabled: 'rgba(27, 27, 31, 0.12)',
    onSurfaceDisabled: 'rgba(27, 27, 31, 0.38)',
    backdrop: 'rgba(46, 48, 56, 0.4)',
    border: 'rgb(212, 230, 251)',
    success: '#39A58B',
  }
}

const darkTheme = {
  ...MD3DarkTheme,
  // Specify custom property
  myOwnProperty: true,
  dark: true,
  // Specify custom property in nested object

  fonts: configureFonts({ config: fontConfig }),

  colors: {
    primary: 'rgb(181, 196, 255)',
    text: 'rgb(255, 255, 255)',
    onPrimary: 'rgb(0, 40, 124)',
    primaryContainer: 'rgb(0, 60, 174)',
    onPrimaryContainer: 'rgb(220, 225, 255)',
    secondary: 'rgb(175, 198, 255)',
    onSecondary: 'rgb(0, 45, 108)',
    secondaryContainer: 'rgb(0, 67, 151)',
    onSecondaryContainer: 'rgb(217, 226, 255)',
    tertiary: 'rgb(182, 204, 238)',
    onTertiary: 'rgb(0, 52, 79)',
    tertiaryContainer: 'rgb(0, 75, 113)',
    onTertiaryContainer: 'rgb(203, 230, 255)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(27, 27, 31)',
    onBackground: 'rgb(228, 226, 230)',
    surface: 'rgb(27, 27, 31)',
    onSurface: 'rgb(228, 226, 230)',
    surfaceVariant: 'rgb(69, 70, 79)',
    onSurfaceVariant: 'rgb(198, 198, 208)',
    outline: 'rgb(143, 144, 154)',
    outlineVariant: 'rgb(69, 70, 79)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(228, 226, 230)',
    inverseOnSurface: 'rgb(48, 48, 52)',
    inversePrimary: 'rgb(0, 80, 226)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(35, 35, 42)',
      level2: 'rgb(39, 41, 49)',
      level3: 'rgb(44, 46, 56)',
      level4: 'rgb(46, 47, 58)',
      level5: 'rgb(49, 51, 62)'
    },
    surfaceDisabled: 'rgba(228, 226, 230, 0.12)',
    onSurfaceDisabled: 'rgba(228, 226, 230, 0.38)',
    backdrop: 'rgba(47, 48, 56, 0.4)',
    border: 'rgb(143, 144, 154)',
    success: '#39A58B',
  }
}

export { lightTheme, darkTheme }
