import { tv, VariantProps } from 'tailwind-variants';

export const OB_HEADINGS = tv({
  base: '',
  variants: {
    size: {
      mobile: '',
      desktop: '',
    },
    color: {},
  },
});

export const OB_PARAGRAPHS = tv({
  base: '',
  variants: {
    size: {
      mobile: '',
      desktop: '',
    },
    color: {},
  },
});

export type ObHeadingTypes = VariantProps<typeof OB_HEADINGS>;
export type ObParagrhaphTypes = VariantProps<typeof OB_PARAGRAPHS>;
