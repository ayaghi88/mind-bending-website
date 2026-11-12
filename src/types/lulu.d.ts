declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lulu-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'buy-button-id'?: string;
        variant?: string;
      };
    }
  }
}

export {};
