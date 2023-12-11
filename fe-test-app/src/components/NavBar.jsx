import { useState, useRef, useEffect } from 'react'
import logo from '../images/logo.svg'
import { navLinks } from '../data'

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const navBurgerRef = useRef(null)
  const navMenuRef = useRef(null)

  const toggleNav = () => {
    setIsMenuActive(prevIsMenuActive => !prevIsMenuActive)
  }

  useEffect(() => {
    const navBurger = navBurgerRef.current
    const navMenu = navMenuRef.current

    if (navBurger && navMenu) {
      navBurger.addEventListener('click', toggleNav)

      return () => {
        navBurger.removeEventListener('click', toggleNav)
      }
    }
  }, [])

  return (
    <header>
      <div className='container is-fluid'>
        <nav className='navbar center-menu pad-LR' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand py-2'>
            <a className='navbar-item pad-m' href='#'>
              <img src={logo} id='logoColor' alt='Brand Logo' />
            </a>
            <a role='button' className='navbar-burger burger' ref={navBurgerRef} aria-label='menu' aria-expanded='false' data-target='brandNavbar'>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div id='brandNavbar' className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`} ref={navMenuRef}>
            <div className='navbar-start'>
              {navLinks.map(Link => (
                <span key={Link.id} className='navbar-item'>
                  <a href={Link.href}>{Link.text}</a>
                </span>
              ))}
            </div>
            <div className='navbar-end'>
              <div className='navbar-item'>
                <div className='buttons'>
                  <a href='#' className='button is-inverted is-rounded'>
                    {' '}
                    Let's Talk{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
