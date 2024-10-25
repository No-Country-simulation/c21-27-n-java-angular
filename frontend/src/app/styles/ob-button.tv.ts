import { tv, VariantProps } from 'tailwind-variants';

export const obBtnCircle = tv({
  base: 'h-14 w-14 lg:h-16 lg:w-16 rounded-full bg-gray-500 flex justify-center items-center text-3xl',
  variants: {
    color: {
      primary:
        'bg-ob-main-bright-green text-black hover:bg-ob-main-bright-green/80 active:text-ob-title-medium-green',
      dark: 'bg-ob-black text-white hover:bg-ob-black/90 active:text-ob-white/70',
    },
  },
});

export const obBtnOutlined = tv({
  base: 'text-xs tracking-tighter px-4 py-1 bg-transparent rounded-full border border-black/50',
  variants: {
    neutral: '',
    selected: '',
  },
});

export const obBtnGhost = tv({
  base: '',
  variants: {
    neutral: '',
    selected: '',
  },
});

export type ObButtonCircleTypes = VariantProps<typeof obBtnCircle>;
export type ObButtonOutlinedTypes = VariantProps<typeof obBtnOutlined>;
export type ObButtonGhostTypes = VariantProps<typeof obBtnGhost>;
