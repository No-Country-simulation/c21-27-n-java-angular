import { tv, VariantProps } from 'tailwind-variants';

export const OB_HEADINGS = tv({
  base: 'font-bold tracking-tight',
  variants: {
    tag: {
      h1: 'tracking-tight text-2xl lg:text-3xl lg:text-ob-title-medium-green',
      h2: 'tracking-tight',
    },
    color: {},
  },
});

export const OB_PARAGRAPHS = tv({
  base: 'text-ob-black',
  variants: {
    color: {
      primary: 'text-ob-main-bright-green',
      danger: 'text-ob-danger-red',
    },
  },
});

export type ObHeadingTypes = VariantProps<typeof OB_HEADINGS>;
export type ObParagrhaphTypes = VariantProps<typeof OB_PARAGRAPHS>;
