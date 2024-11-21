import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutilinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
          <span>gathering</span>
        </Link>
          <HomeOutlinedIcon/>
          <DarkModeOutlinedIcon />
          <GridViewOutlinedIcon />
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search..." />
          </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutilinedIcon />
        <div className="user">
          {/* <img src="" alt="" /> */}
          <span>Jonh Doe</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar