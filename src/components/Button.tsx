import React from 'react'

type ButtonProps = {
    className?: string;
    size: 'sm' | 'default' | 'lg';
    children: React.ReactNode;
}


const Button = ({className,size,children}: ButtonProps) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/50 cursor-pointer";
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        default: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',

    }
    const classess =`${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${className || ''}`;
  return (
    <div className={classess}>
      <span className="relative flex items-center justify-center gap-2">{children}</span>
    </div>
  );
}

export default Button
