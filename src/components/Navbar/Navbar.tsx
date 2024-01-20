import NavbarItem from "@/components/NavbarItem/NavbarItem";
import { NavigationLink } from "@/interfaces/NavigationLink";

const Navbar = () => {
  const navbarItems: NavigationLink[] = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/gift-ideas',
      label: 'Gift Ideas'
    },
    {
      href: '/outgrown',
      label: 'Things I\'ve Outgrown'
    }
  ];

  return (
    <nav className="p-2.5 flex justify-center items-center gap-10">
      {navbarItems.map((navbarItem, index) => {
        return (
          <NavbarItem
            key={index}
            href={navbarItem.href}
            label={navbarItem.label}
          />
        )
      })}
    </nav>
  );
};

export default Navbar;