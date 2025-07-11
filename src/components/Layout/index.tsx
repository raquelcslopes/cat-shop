import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar'

const navItems = ['SHOP NOW', 'BREED','TOP FAVORITES']

function Layout() {
  return (
    <div>
      <NavBar navItems={navItems}></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
