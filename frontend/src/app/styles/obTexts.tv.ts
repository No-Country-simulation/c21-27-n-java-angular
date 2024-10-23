import { tv, VariantProps } from 'tailwind-variants';

export const OB_TEXT_HEADINGS = tv({
  base: 'font-bold tracking-tight',
  variants: {
    tag: {
      h1: 'tracking-tight text-2xl lg:text-3xl lg:text-ob-title-medium-green',
      h2: 'tracking-tight',
    },
    color: {},
  },
});

export const OB_TEXT_PARAGRAPHS = tv({
  base: 'text-ob-black',
  variants: {
    color: {
      primary: 'text-ob-main-bright-green',
      danger: 'text-ob-danger-red',
    },
  },
});

export const OB_TEXT_BALANCE = tv({
  base: 'text-5xl font-bold tracking-wide',
});

export type ObHeadingTypes = VariantProps<typeof OB_TEXT_HEADINGS>;
export type ObParagrhaphTypes = VariantProps<typeof OB_TEXT_PARAGRAPHS>;
export type ObBalanceTypes = VariantProps<typeof OB_TEXT_BALANCE>;
