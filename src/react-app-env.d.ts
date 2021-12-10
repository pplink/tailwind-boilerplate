/// <reference types="react-scripts" />

declare namespace JSX {
  interface IntrinsicElements {
    "box-icon": BoxIconAttributes;
  }

  interface BoxIconAttributes extends React.HTMLProps<HTMLElement> {
    name: string;
    type?: "regular" | "solid" | "logo";
    color?: string;
    size?: "xs" | "sm" | "md" | "lg" | "cssSize";
    rotate?: "90" | "180" | "270";
    flip?: "horizontal" | "vertical";
    border?: "square" | "circle";
    animation?: string;
    pull?: "left" | "right";
  }
}
