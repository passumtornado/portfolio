import React from 'react'


const NavLinks = [
  {href: '#home', label: 'Home'},
  {href: '#about', label: 'About'},
  {href: '#experience', label: 'Experience'},
  {href: '#contact', label: 'Contact'},
  {href: '#projects', label: 'Projects'},
]


const Navbar = () => {
  return (
    <header className="fixed top-0 left-0  right-0 bg-transparent py-5">
      <nav className="container mx-auto  px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          APAG <span className="text-primary">.</span>
        </a>
        {/* Desktop Navigation */}
        <div className='flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {NavLinks.map((link,index) => (
              <a key={index} href={link.href} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
