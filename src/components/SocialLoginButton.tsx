import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react'; // For type hinting

interface SocialLoginButtonProps extends ButtonProps {
  providerName: string;
  icon?: React.ReactElement<LucideIconProps>; // Using React.ReactElement for icons like <Icon />
  onClick: () => void;
}

// Define a simple type for LucideIcon props if not readily available
// This is often just LucideProps from 'lucide-react' but can be simplified
interface LucideIconProps {
  className?: string;
  size?: number | string;
  // other props lucide icons might take
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  providerName,
  icon,
  onClick,
  className,
  variant = "outline", // Default variant
  ...props
}) => {
  console.log("Rendering SocialLoginButton for:", providerName);

  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={`w-full flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {icon && React.cloneElement(icon, { className: 'h-5 w-5' })}
      <span>Sign in with {providerName}</span>
    </Button>
  );
};

export default SocialLoginButton;