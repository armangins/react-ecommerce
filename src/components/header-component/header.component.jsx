import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebaseConfig';


const Header = ({currentUser}) => {
console.log(currentUser);

    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/contacts">Contact</Link>
           {
               currentUser?
               <span className="option signout" onClick={()=>auth.signOut()} >Sign out</span>
               :
               <Link  className="option" to="/auth">Login</Link>
            }
            </div>
        </div>
    )
}





export default Header;