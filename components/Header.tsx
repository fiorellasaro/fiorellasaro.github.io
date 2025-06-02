import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const Header = () => {
  const { pathname } = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-between items-center py-6 px-6 border-b border-neutral-200 dark:border-neutral-800 backdrop-blur-md bg-white/80 dark:bg-black/60 sticky top-0 z-50">
      <div className="text-xl font-bold text-[#4EBA65] tracking-tight">
        Fiorella
      </div>

      <nav className="flex gap-6 text-sm font-medium">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <span
              className={clsx(
                "transition-all duration-200 hover:text-[#4EBA65] cursor-pointer relative",
                pathname === link.href
                  ? "text-[#4EBA65] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-[#4EBA65] after:rounded-full"
                  : "text-neutral-700 dark:text-neutral-300"
              )}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
