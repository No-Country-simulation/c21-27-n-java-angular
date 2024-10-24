import { tv, VariantProps } from 'tailwind-variants';

export const OB_TEXT_HEADINGS = tv({
  base: 'tracking-tight',
  variants: {
    tag: {
      h1: 'text-ob-title-medium-green text-3xl lg:text-4xl',
      h2: 'font-bold text-lg',
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
  base: 'text-6xl md:text-6xl lg:text-7xl lg:font-bold w-full overflow-hidden text-ellipsis tracking-tight lg:tracking-normal',
});

export type ObHeadingTypes = VariantProps<typeof OB_TEXT_HEADINGS>;
export type ObParagrhaphTypes = VariantProps<typeof OB_TEXT_PARAGRAPHS>;
export type ObBalanceTypes = VariantProps<typeof OB_TEXT_BALANCE>;
