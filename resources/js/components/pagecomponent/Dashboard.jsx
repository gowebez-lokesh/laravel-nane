import React from 'react'
import { NavLink,Link} from "react-router-dom";
import { useLocation, useNavigate } from 'react-router'


const Dashboard = () => {
    const location = useLocation();
    const token = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate();
    const path     = location.pathname.split("/")

    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/login')
    }

  return (
    <>
        <div className="EON-container container">
            <div className="top-section  d-flex justify-content-between align-items-center mt-5">
                <h1 className='m-0 p-0'>Elements of Nature</h1>
                {
                    token &&
                    <button className='btn text-white outline-none border-none m-0 px-3' onClick={handleLogout} >LOGOUT</button>
                }
            </div>
            
            <div className="cards-container  d-flex justify-content-between align-items-center mt-5 flex-wrap">
                <div className="cards fire-card d-flex align-items-center justify-content-center">
                    <Link to='/flame'>
                        <h5 className='m-0 p-0'>Flame</h5>
                    </Link>
                </div>
                <div className="cards water-card d-flex align-items-center justify-content-center">
                    <Link to='/water'>
                        <h5 className='m-0 p-0'>H<sub>2</sub>O</h5>
                    </Link>
                </div>
                <div className="cards air-card d-flex align-items-center justify-content-center">
                    <Link to='/air'>
                        <h5 className='m-0 p-0'>O<sub>2</sub></h5>
                    </Link>
                </div>
                <div className="cards land-card d-flex align-items-center justify-content-center">
                    <Link to='/land'>
                        <h5 className='m-0 p-0'>Land</h5>
                    </Link>
                </div>
                <div className="cards sky-card d-flex align-items-center justify-content-center">
                    <Link to='/sky'>
                        <h5 className='m-0 p-0'>Sky</h5>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard