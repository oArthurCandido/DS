import React from "react";
import { AvatarBase, AvatarFallback, AvatarImage } from "./base";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVariants = cva("",{
    variants: {
      size: {
        default: "h-10 w-10",
        sm: "h-9 w-9",
        lg: "h-11 w-11",
        xl: "h-14 w-14",
      },
      
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface AvatarProps 
extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
VariantProps<typeof avatarVariants>  {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
}


const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
    const {size , src, fallback, alt, className, ...rest } = props;

    return (
        <AvatarBase ref={ref} className={cn(avatarVariants({  size, className }))} {...rest}>
            <AvatarImage src={src} alt={alt} />
            {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
        </AvatarBase>
    );
});

Avatar.displayName = 'Avatar';

export {Avatar} ;

