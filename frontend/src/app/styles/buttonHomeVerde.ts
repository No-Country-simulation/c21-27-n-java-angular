import { tv } from "tailwind-variants";

export const UI_Button = tv({
    base: 'font-medium bg-main hover:secondary size:large rounded-full mb-4 mt-4',
    
    variants: {
        color: {
            primary: 'bg-main hover:bg-secondary',
            dark: 'bg-slate-950 hover:bg-slate-400',
            normal: 'bg-green-700 hover:bg-green-400'
        },
        size: {
            small: 'py-2 px-2',
            medium: 'py-4 px-4',
            large: 'py-6 px-6 ',
        }
    },
    
    defaultVariants: {
        color: 'primary',
        size: 'medium'
    },
    compoundVariants: [
        {
            color: 'primary',
            size: 'large',
            className: 'rounded-full'
        }
        
    ]
});






        