/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { Dimensions } from 'react-native';
/**
 * Colors
 */
export const Colors = {
  //Main Colors
  PRIMARY: '#000',
  BRAND_COLOR: '#898EFA',
  ACTION: '#D23655',
  BRAND_CONTRAST: '#FFFFFF',
  WHITE  : '#FFFFFF',
  DARK: "#1B1B1B",

  //Base Colors
  OUTLINE: "#2E2E2E20",
  BGCOLOR: "#F7F7F7",
  TEXT: "#2E2E2E",
  TEXT_LIGHT: "#2E2E2E80",
  BASE_YELLOW: "#FBB917",
  TRANSLUCENT_LIGHT : "#FFFFFF50",
  BASE_BADGE: "#C4FBD7",
  TRANSPARENT: "#FFFFFF00",

  //Indicators
  ERROR: "#EF4444",
  MESSAGE: "#D4CCF5 ",
  SUCCESS: "#60F4BF",
  ALERT: "#BED68B",
  

  //Gradients
  GRADIENT_IMGMASK: ["#1B1B1B00", "#1B1B1B",],
};

export const NavigationColors = {
  primary: Colors.PRIMARY,
};

/**
 * Metrics Sizes
 */

let { height, width} = Dimensions.get('window');
// let pixelRatio = Dimensions.get('window').scale;
// let pixelRatio = PixelRatio.get();

// let screenWidthInches = width * pixelRatio;
// let screenHeightInches = height * pixelRatio;

// const diagonalScreenSizeInches = Math.sqrt(Math.pow(screenWidthInches, 2) + Math.pow(screenHeightInches, 2)) / 160;


// // Calculate diagonal in inch assuming a standard dpi of 160 (mdpi)
// let diagonalInInch = Math.sqrt(width * width + height * height) / 160;
// alert('HELLO HERE WE GO ' + pixelRatio + ' ' + fontScale + ' ' + scale + ' ' + width + ' ' + height + ' ' + screenWidthInches + ' ' + screenHeightInches + ' ' + diagonalScreenSizeInches + ' ' + diagonalInInch)

// // Suppose that we want base10 to be 10 on a 4.7 inch screen (approximately an iPhone 6)
// let standardScreenSizeInInch = 6.4;

// let base10 = 10 * ( diagonalScreenSizeInches/diagonalInInch);
let base10 = width/40

export const MetricsSizes = {
  //Default Metrics
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  BASE_HEIGHT: base10*6.4,
  BASE_RADIUS : base10*2,

  //Sizes Metrics
  TINY: base10 / 2,
  SMALL: base10,
  REGULAR: base10 * 1.5,
  MEDIUM: base10 * 2,
  LARGE: base10 * 3,
  XLARGE: base10 * 4,
  XXLARGE: base10 * 5,
  BASE80: base10 * 8,
  BASE100: base10 * 10,
  BASE200: base10 * 20,

  //Negative Metrics
  NEG_TINY: -base10 / 2,
  NEG_SMALL: -base10,
  NEG_REGULAR: -base10 * 1.5,

  //Rating width
  RATING_SMALL : width/4,
  RATING_MEDIUM : width/3,
  RATING_LARGE : width/2,
  RATING_XLARGE : width/1.5,
  RATING_XXLARGE : width,
};

const { SMALL, REGULAR, LARGE } = MetricsSizes;

/**
 * FontSize
 */
export const FontSize = {
  xs: SMALL, //  10
  sm: SMALL * 1.2, //12
  bs : SMALL * 1.4, //14 i.e. base size
  rg: SMALL * 1.4, // 15
  md: REGULAR * 1.2, // 18
  lg: LARGE * 0.8, // 24
  xl: LARGE, //30
  xxl: LARGE * 1.2, //36
};

/**
 * FontFamily
 */

let fontPrefix = 'Poppins'; //REPLACE WITH YOUR FONT NAME

const FontFamily = {
  BLACK: fontPrefix + '-Black',
  BLACK_ITALIC: fontPrefix + '-BlackItalic',
  BOLD: fontPrefix + '-Bold',
  BOLD_ITALIC: fontPrefix + '-BoldItalic',
  EXTRA_BOLD: fontPrefix + '-ExtraBold',
  EXTRA_BOLD_ITALIC: fontPrefix + '-ExtraBoldItalic',
  EXTRA_LIGHT: fontPrefix + '-ExtraLight',
  EXTRA_LIGHT_ITALIC: fontPrefix + '-ExtraLightItalic',
  ITALIC: fontPrefix + '-Italic',
  LIGHT: fontPrefix + '-Light',
  LIGHT_ITALIC: fontPrefix + '-LightItalic',
  MEDIUM: fontPrefix + '-Medium',
  MEDIUM_ITALIC: fontPrefix + '-MediumItalic',
  REGULAR: fontPrefix + '-Regular',
  SEMI_BOLD: fontPrefix + '-SemiBold',
  SEMI_BOLD_ITALIC: fontPrefix + '-SemiBoldItalic',
  THIN: fontPrefix + '-Thin',
  THIN_ITALIC: fontPrefix + '-ThinItalic',
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  FontFamily,
};
