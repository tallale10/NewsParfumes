import { React, useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../images/logo.jpg';
// import driver from '../driver/Driver';
import {Link} from "react-router-dom" ;
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={Logo} alt='Logo' />
      <h1 style={{color: 'rgb(115, 51, 6)'}}>Welcome <span style={{color: 'rgb(236, 122, 15)'}}>- to my page</span></h1>

      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]} >
          <li>
            <Link to='/Driver'>Home</Link>
          </li>
          <li>
          <Link to='/Find'>Find</Link>
          </li>
          <li>
            <Link to='/Luxury'>Company</Link>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: '6px' }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: '6px' }} />
          </li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        
      </div>
    </header>
  );
};

export default Navbar;
