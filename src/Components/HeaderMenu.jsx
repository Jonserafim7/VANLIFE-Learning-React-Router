import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { NavLink } from 'react-router-dom'

export default function BasicMenu({ authenticated }) {
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
        sx={{
          color: 'black',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          fontSize: '1rem',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        Dashboard
      </Button>
      <Menu
        sx={{ '& .MuiList-root': { backgroundColor: '#ffcc8d' } }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem onClick={handleClose}>
          <NavLink
            to="host"
            className={`text-lg ${({ isActive }) => activeStyle(isActive)}`}>
            Host
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink
            to="about"
            About
            className={`text-lg ${({ isActive }) => activeStyle(isActive)}`}>
            About
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink
            to="vans"
            Vans
            className={`text-lg ${({ isActive }) => activeStyle(isActive)}`}>
            Vans
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {authenticated ? (
            <button
              className="hover:text-orange-500 text-lg"
              onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <NavLink
              to={`${authenticated ? 'host' : 'UserAccountSignIn'}`}
              className="hover:text-orange-500 text-lg">
              {authenticated ? 'Sign Out' : 'Sign In'}
            </NavLink>
          )}
        </MenuItem>
      </Menu>
    </div>
  )
}
