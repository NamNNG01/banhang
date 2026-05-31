import PropTypes from "prop-types";
import { cn } from "../lib/utils";

Button.propTypes = {
    variant: PropTypes.oneOf([
        "default",
        "neon",
    ]),
    label: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    href: PropTypes.string,
    download: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default function Button({ variant = "default", label = "Button", onClick, className = "", href, download }) {
    const variantStyles = {
        default: "bg-blue-500 hover:bg-blue-600 text-white",
        neon: `
  bg-gradient-to-r 
  from-[#5FD28E] 
  to-[#10A29F] 
  rounded-2xl 
  p-3 
  h-fit

  transition-all duration-200

  hover:brightness-110
  hover:scale-[1.02]

  active:scale-[0.98]
  active:brightness-90
`,
    };

    if (href) {
        return (
            <a 
                href={href} 
                download={download} 
                className={cn(variantStyles[variant], 'w-fit inline-flex items-center justify-center select-none text-center font-medium', className)} 
                onClick={onClick}
            >
                {label}
            </a>
        );
    }

    return (
        <button className={cn(variantStyles[variant], 'w-fit', className)} onClick={onClick}>
            {label}
        </button>
    )
}