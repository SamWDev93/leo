import { getSession } from "@auth0/nextjs-auth0";
import Button from "@/components/Button/Button";
import NavbarItem from "@/components/NavbarItem/NavbarItem";
import { NavigationLink } from "@/interfaces/NavigationLink";

const Navbar = async () => {
  const session = await getSession();
  const user = session?.user;
  const navbarItems: NavigationLink[] = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/whats-in-my-toy-box',
      label: 'What\'s In My Toy Box'
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
    <nav className="p-2.5 flex justify-center items-center gap-6">
      {navbarItems.map((navbarItem, index) => {
        return (
          <NavbarItem
            key={index}
            href={navbarItem.href}
            label={navbarItem.label}
          />
        )
      })}
      <Button
        type="primary"
        href={user ? '/api/auth/logout' : '/api/auth/login'}
        label={user ? 'Logout' : 'Parent login'}
      />
    </nav>
  );
};

export default Navbar;