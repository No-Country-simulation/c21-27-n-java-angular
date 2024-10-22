import { tv } from 'tailwind-variants';

export const OB_TITLES = tv({
  base: '',
  variants: {
    tag: {
      h1: 'font-bold tracking-tight text-2xl lg:text-3xl lg:text-ob-title-medium-green',
      h2: 'font-bold tracking-tight',
    },
  },
});
