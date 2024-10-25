import { tv, VariantProps } from 'tailwind-variants';

export const OB_BUTTON_CIRCLE = tv({
  base: 'h-14 w-14 lg:h-16 lg:w-16 rounded-full bg-gray-500 flex justify-center items-center text-3xl',
  variants: {
    color: {
      primary:
        'bg-ob-main-bright-green text-black hover:bg-ob-main-bright-green/80 active:text-ob-title-medium-green',
      dark: 'bg-ob-black text-white hover:bg-ob-black/90 active:text-ob-white/70',
    },
  },
});

export const OB_BUTTON_OUTLINED = tv({
  base: 'text-xs tracking-tighter px-4 py-1 bg-transparent rounded-full border border-black/50',
  variants: {
    neutral: '',
    selected: '',
  },
});

export const OB_BUTTON_GHOST = tv({
  base: '',
  variants: {
    neutral: '',
    selected: '',
  },
});

export type ObButtonCircleTypes = VariantProps<typeof OB_BUTTON_CIRCLE>;
export type ObButtonOutlinedTypes = VariantProps<typeof OB_BUTTON_OUTLINED>;
export type ObButtonGhostTypes = VariantProps<typeof OB_BUTTON_GHOST>;
