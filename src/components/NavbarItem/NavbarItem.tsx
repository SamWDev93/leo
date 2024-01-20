'use client'

import { NavigationLink } from '@/interfaces/NavigationLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarItemProps extends NavigationLink {}

const NavbarItem = ({
  href, 
  label
}: NavbarItemProps) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link href={href} className={`${isActive ? 'underline' : ''} hover:underline`}>
      {label}
    </Link>
  );
};

export default NavbarItem;