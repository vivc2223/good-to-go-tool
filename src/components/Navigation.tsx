import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Research", href: "/research", active: true },
    { name: "Press", href: "/press1" },
    { name: "Culture", href: "/culture" },
    {
      name: "Careers",
      href: "https://ats.rippling.com/en-GB/dyna-careers/jobs",
    },
  ];

  return (
    <nav className="w-full border-b border-border/20 bg-white">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src="/lovable-uploads/dyna_logo_black.avif"
            alt="Dyna Logo"
            className="h-6 w-auto"
          />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  item.active
                    ? "text-black underline underline-offset-2"
                    : "text-black"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
