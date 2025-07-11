import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FastOmit, Interpolation } from "styled-components";

export interface ColorPalette {
  [x: string]: Interpolation<
    FastOmit<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      never
    >
  >;
  WHITE: string;
  BLACK: string;
  BACKGROUND: string;
  BLUE: string;
  YELLOW: string;
  GRAY: string;
}

export interface FontSize {
  small: string;
  medium: string;
  large: string;
  xl: string;
}

export interface BorderRadius {
  small: string;
  medium: string;
}

export interface FontFamily {
  primary: string;
  secondary?: string;
}


export interface Theme {
  colors: ColorPalette;
  fontSize: FontSize;
  borderRadius: BorderRadius;
  font:FontFamily;
}

export const theme: Theme = {
  colors: {
    WHITE: "#FFFFFF",
    BLACK: "#000000",
    BACKGROUND: "#F2EDE5",
    BLUE: "#20262D",
    YELLOW: "#866F1C",
    GRAY: "#484343",
  },
  fontSize: {
    small: "14px",
    medium: "16px",
    large: "32px",
    xl: "34px",
  },
  borderRadius: {
    small: "10px",
    medium: "20px",
  },
  font: {
    primary: "Antonio, sans-serif",
    secondary: "'Anton', sans-serif",
  }
};
