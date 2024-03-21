import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink } from 'react-router-dom'

// Dropdown menu component for the header
// It gets rendered when the screen size is small (mobile)
export default function BasicMenu({ authenticated, handleSignOut }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <MenuIcon sx={{ color: 'black' }} />
      </Button>
      <Menu
        sx={{ '& .MuiList-root': { backgroundColor: '#FFF7ED' } }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem>
          <NavLink
            to="host"
            className={`text-lg ${({ isActive }) => activeStyle(isActive)}`}>
            Host
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="about"
            className={`text-lg ${({ isActive }) => activeStyle(isActive)}`}>
            About
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="vans"
            className={`text-lg ${({ isActive }) => activeStyle(isActive)}`}>
            Vans
          </NavLink>
        </MenuItem>
        <MenuItem>
          {authenticated ? (
            <button
              className="text-lg hover:text-orange-500"
              onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <NavLink
              to={`${authenticated ? 'host' : 'SignIn'}`}
              className="text-lg hover:text-orange-500">
              {authenticated ? 'Sign Out' : 'Sign In'}
            </NavLink>
          )}
        </MenuItem>
      </Menu>
    </div>
  )
}
