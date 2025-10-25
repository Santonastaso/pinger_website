import { Link, matchPath, useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  let currentPath: string | boolean = "/";
  if (matchPath("/", location.pathname)) {
    currentPath = "/";
  } else if (matchPath("/projects/*", location.pathname)) {
    currentPath = "/projects";
  } else if (matchPath("/contact/*", location.pathname)) {
    currentPath = "/contact";
  } else {
    currentPath = false;
  }

  return (
    <nav className="flex-grow">
      <header className="bg-secondary">
        <div className="px-4">
          <div className="flex justify-between items-center flex-1">
            <Link
              to="/"
              className="flex items-center gap-2 text-secondary-foreground no-underline"
            >
              <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-sm"></div>
              </div>
              <h1 className="text-xl font-semibold">Pinger</h1>
            </Link>
            <div>
              <nav className="flex">
                <NavigationTab
                  label="Home"
                  to="/"
                  isActive={currentPath === "/"}
                />
                <NavigationTab
                  label="Projects"
                  to="/projects"
                  isActive={currentPath === "/projects"}
                />
                <NavigationTab
                  label="Contact"
                  to="/contact"
                  isActive={currentPath === "/contact"}
                />
              </nav>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

const NavigationTab = ({
  label,
  to,
  isActive,
}: {
  label: string;
  to: string;
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
      isActive
        ? "text-secondary-foreground border-secondary-foreground"
        : "text-secondary-foreground/70 border-transparent hover:text-secondary-foreground/80"
    }`}
  >
    {label}
  </Link>
);

export default Header;
