import { Button as AdobeButton, Link } from 'react-aria-components';

interface ButtonProps {
  type: 'primary' | 'secondary';
  href?: string;
  label: string;
}

const sharedStyles = 'rounded-lg text-white py-2.5 px-5'
const variantStyles = {
  'primary': `${sharedStyles} bg-blue-950`,
  'secondary': `${sharedStyles} bg-violet-700`
}

const Button = ({
  type,
  href, 
  label
}: ButtonProps) => {

  if (href){
    return (
      <Link href={href} className={variantStyles[type]}>
        {label}
      </Link>
    );
  }

  return (
    <AdobeButton>
      {label}
    </AdobeButton>
  );
};

export default Button;