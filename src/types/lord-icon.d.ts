// src/custom.d.ts
declare module 'lord-icon-element' {
    export function defineElement(loadAnimation: any): void;
  }
  
  // Definir 'lord-icon' como un elemento JSX válido
  declare namespace JSX {
    interface IntrinsicElements {
      'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
        trigger?: string;
        colors?: string;
        style?: React.CSSProperties;
      };
    }
  }
  