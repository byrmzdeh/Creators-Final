import React, { useContext, useState } from 'react'
import './style.scss'
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { SearchContext } from '../../context/SearchContext';
import Search from '../../components/Search';
import { BasketContext } from '../../context/BasketContex';



const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    let location = useLocation();
    const { logOut, decode } = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    const { basket } = useContext(BasketContext)

    const [showSearchResult, setShowSearchResult] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const { searchQuery, setSearchQuery } = useContext(SearchContext);

    const [showWishlist, setShowWishlist] = useState(false);

    const toggleWishlist = () => {
        setShowWishlist(!showWishlist);
    };

    const handleSearch = () => {
        setShowSearchResult(!showSearchResult);
    };

    // function toggleSearch() {
    //     setOpenSearch(!openSearch);
    // }

    function toggleNavbar() {
        setIsOpen(!isOpen)
    }





    function stickyNavbar() {
        if (window.scrollY >= 150) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }
    window.addEventListener("scroll", stickyNavbar);
    return (
        <div className={`navbar
         ${sticky === true
                ? "sticky"
                : "" || location.pathname === "/add"
                    ? "navbarBcgColor"
                    : "" || location.pathname === "/faq"
                        ? "navbarBcgColor"
                        : ""}
              `}>

            <div className="nav">
                <div className="img">
                    <img width={60} src="https://shtheme.com/demosd/upcreatorswp/wp-content/themes/upcreators/assets/svg/logo--black.svg" alt="err" />
                    <h2>Creators</h2>
                </div>
                <ul>
                    <li><NavLink to={"/"}>  Home </NavLink></li>
                    <li><NavLink to={"/about"}>About Us</NavLink></li>
                    <li className='pages'><NavLink to={""}>  Pages </NavLink>
                        <ul id='submenu'>
                            <li><NavLink to={"/faq"}>  Faq </NavLink></li>
                            <li><NavLink to={"*"}>  Error Page </NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to={"/events"}>  Events </NavLink></li>
                    <li><NavLink to={"/shop"}>  Shop </NavLink></li>
                    <li><NavLink to={"/contact"}>  Contact </NavLink></li>

                    {decode && decode.role === 'admin' ?
                        <>
                            <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
                            <li><NavLink to={"/add"}>Add</NavLink></li>
                        </>
                        :
                        decode && decode.role === 'user' ?
                            <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
                            : null
                    }



                </ul>
                


                <div className={`searchPanel  ${openSearch ? "searchToggle" : ""}`}>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter Search ..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>

                    </div>
                    {showSearchResult && <Search />}
                </div>


                <div className="icon">
                <Link to={'/wishlist'} onClick={toggleWishlist}>
                    <i className="fa-regular fa-heart"></i>
                </Link>
                <Link to={'/basket'}>
                    <i className="fa-solid fa-basket-shopping"></i>
                    <sup>{basket.length ? basket.length : ''}</sup>
                </Link>
            </div>

            {/* ... (previous code) */}

            {decode && (decode.role === 'admin' || decode.role === 'user') ?
                <div className={`wishlistPanel ${showWishlist ? "wishlistToggle" : ""}`}>
                    {/* Render your wishlist content here */}
                </div>
                : null
            }


                {decode ?
                    <div className='loginnn'>
                        <div className="profile"><i className="fa-regular fa-user"></i> <span>Profile</span></div>
                        <div onClick={() => logOut()}><p>Logout</p></div>
                    </div>
                    :
                    <div className='head'>
                        <li><NavLink to='/login'>Login </NavLink></li>
                        <li><NavLink to='/register'>Register </NavLink></li>
                    </div>}


            
            </div>

            <div className="resNavbar">
                <div className="row">
                    <div className="logosss">
                        
                           <img width={60} src="https://shtheme.com/demosd/upcreatorswp/wp-content/themes/upcreators/assets/svg/logo--black.svg" alt="" />
                    </div>
                    {decode ?
                        <div className='loginnn'>
                            <div className="profile"><i className="fa-regular fa-user"></i> Profile</div>
                            <div onClick={() => logOut()}><p>Logout</p></div>
                        </div>
                        :
                        <div className='head'>
                            <li><NavLink to='/login'>Login </NavLink></li>
                            <li><NavLink to='/register'>Register </NavLink></li>
                        </div>}
                    <div className="bars" onClick={toggleNavbar}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className={`resMenu ${isOpen ? "open" : ""} `}>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop"}>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/events"}>Events</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/faq"}>Faq</NavLink>
                        </li>
                        {decode && decode.role === 'admin' ?
                            <>
                                <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
                                <li><NavLink to={"/add"}>Add</NavLink></li>
                                <li> <NavLink to={'/basket'}>Basket</NavLink></li>
                                <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
                            </>
                            :
                            decode && decode.role === 'user' ?
                             <>
                                <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
                                <li> <NavLink to={'/basket'}>Basket</NavLink></li>
                                <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
                                </>
                                : null
                        }

                      
                    </ul>



                </div>
            </div>
         
        </div >
    )
}

export default Navbar
