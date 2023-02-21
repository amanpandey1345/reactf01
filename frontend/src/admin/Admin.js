import React from 'react'
import { useState } from 'react'
import "./Admin.css"
import { useSelector } from 'react-redux';
// import AdminUser from './AdminUser';
// import AdminBets from './AdminBets';
import { Link } from 'react-router-dom';
import AdminUser from './AdminUser';
const Admin = (props) => {
    const { user } = useSelector((state) => state.user);
  const [closeNave, setCloseNave] = useState(false);
//   const [switchMode, setSwitchMode] = useState(false);

  const toggleNav = ()=>{
    setCloseNave(!closeNave);
  }

  const getNavWidth =()=>(closeNave ? "toggle" : "close")
  const getNav =()=>(closeNave ? "" : "toggle")



  return (
    <>
    <div className="mainAdmin">

    <nav className={"sidebar " + getNavWidth()}>
        <header className={""}  >
            <div className="image-text">
                <span className="image">
                    <img src="/Profile.png" alt=""/>
                </span>

                <div className="text logo-text">
                    <span className="name">{user.fname}</span>
                    <span className="profession">Admin Dashboard</span>
                </div>
            </div>

            <i className='bx bx-chevron-right toggle' onClick={toggleNav}  ></i>
        </header>

        <div className="menu-bar">
            <div className="menu ">

                {/* <li className={"search-box "+getNav()}>
                    <i className='bx bx-search icon 'onClick={toggleNav} ></i>
                    <input type="text" placeholder="Search..."  />
                </li> */}


                    <li className={"nav-link "+` ${props.dashboard}` }>
                        <Link to="/admin/dashboard"  >
                            <i className={'bx bx-home-alt icon '} ></i>
                            <span className="text nav-text">Dashboard</span>
                        </Link>
                    </li>

                    <li className={"nav-link "+` ${props.userinfo}`}>
                        <Link to="/admin/users">
                            <i className='bx bx-bar-chart-alt-2 icon' ></i>
                            <span className="text nav-text">User Info</span>
                        </Link>
                    </li>

                    <li className={"nav-link "+` ${props.withdrawal}`}>
                        <Link to="/admin/withdrawals">
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Withdrawals</span>
                        </Link>
                    </li>
 
                    <li className={"nav-link "+` ${props.deposit}`}>
                        <Link to="/admin/deposits">
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span className="text nav-text">Deposits</span>
                        </Link>
                    </li>

                    <li className={"nav-link "+` ${props.bet}`}>
                        <Link to="/admin/bets">
                            <i className='bx bx-heart icon' ></i>
                            <span className="text nav-text">Bets</span>
                        </Link>
                    </li>

                    <li className={"nav-link "+` ${props.Wallets}`}>
                        <Link to="/admin/kit">
                            <i className='bx bx-wallet icon' ></i>
                            <span className="text nav-text">Wallets</span>
                        </Link>
                    </li>


            </div>

            <div className="bottom-content">
                <li className="">
                    <Link to="/">
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Back</span>
                    </Link>
                </li>

                {/* <li className="mode">
                    <div className="sun-moon">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                    </div>
                    <span className="mode-text text">Dark mode</span>

                    <div className="toggle-switch">
                        <span className="switch"></span>
                    </div>
                </li> */}
                
            </div>
        </div>

    </nav>
    <section className="home">
        {props.component1}
        {props.component2}
        {props.component3}

    </section>
    </div>
    </>
  )
}

export default Admin