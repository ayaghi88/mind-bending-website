import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Author', path: '/author' },
  { label: 'Books', path: '/books' },
  { label: 'Publishing Services', path: '/publishing' },
  { label: 'App Creation', path: '/apps' },
  { label: 'DNS & Tech Setup', path: '/dns-tech' },
  { label: 'Speaking & Media', path: '/speaking' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      {/* Desktop left sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-56 bg-card border-r border-border flex-col z-50">
        <div className="p-6 border-b border-border">
          <Link to="/" className="font-playfair font-bold text-lg text-foreground hover:text-primary transition-colors">
            AMBER YAGHI
          </Link>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`block px-6 py-3 text-sm font-medium transition-colors border-l-4 ${
                location.pathname === item.path
                  ? 'border-primary bg-primary/10 text-primary font-semibold'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:border-primary/30'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile horizontal tab bar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
        <div className="px-4 py-3">
          <Link to="/" className="font-playfair font-bold text-lg text-foreground hover:text-primary transition-colors">
            AMBER YAGHI
          </Link>
        </div>
        <div className="overflow-x-auto">
          <div className="flex px-2 pb-2 gap-1 min-w-max">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`whitespace-nowrap px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
