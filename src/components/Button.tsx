import React, { forwardRef } from "react";

const cx = (...parts: Array<string | false | null | undefined>) => {
  return parts.filter(Boolean).join(" ");
};

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  children?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ariaLabel?: string;
  disabled?: boolean;

};

type ButtonProps =
  | (CommonProps &
      React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (CommonProps &
      React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });



const VariantClasses: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300",
  secondary:
    "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-200",
  ghost:
    "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      children,
      className,
      leftIcon,
      rightIcon,
      ariaLabel,
      href,
      disabled,
      ...rest
    } = props as ButtonProps;
  }
);

export default Button;
