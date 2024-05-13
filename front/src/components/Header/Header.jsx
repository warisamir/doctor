import {useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import Link
import logo from '../../assets/Image/logo.png';
import userImg from './../../assets/Image/avatar-icon.png';
import {BiMenu} from 'react-icons/bi';
const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctor',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
];

const Header = () => {
  const headerRef=useRef(null);
  const menuRef=useRef(null);
  const handleStickyHeader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header');
      }
      else{
        headerRef.current.classList.remove('sticky__header');
      }
    })
  }
  useEffect(()=>{
    handleStickyHeader()
    return ()=>window.removeEventListener('scroll', handleStickyHeader)
  })

const toggleMenu=()=> menuRef.current.classList.toggle('show__menu')
  

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='flex items-center justify-between w-full'>
        <div className="logo-container flex items-center">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.7rem]">
            {navLinks.map((item, index) => (
              <li key={index} className="menu-item">
                <NavLink
                  to={item.path}
                  className="nav-link"
                  activeClassName="active"
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>  
        <div className="flex items-center gap-4 px-30">
          <div className='hidden'>
            <Link to='/'>
              <figure className='w-[35px] rounded-full cursor-pointer' >
                <img src={userImg} className='w-full rounded-full '/>
              </figure>
            </Link>
          </div>
          <Link to='/login'>
            <button className='bg-primaryColor py-2 px-6 text-white font-semibold
             h-[44px] flex items-center rounded-[500px]'>Login</button>
          </Link>
          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer"/>
              
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
