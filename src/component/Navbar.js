import { Link ,NavLink} from 'react-router-dom'


function Navbar(){
    return(
        <div>
         
        <ul className='navbar'>
            <li>
            <NavLink className='nav-bar-link' to='/'> <h1>Home</h1></NavLink>
            </li>
            <li>
            <NavLink className='nav-bar-link' to='/about'> <h1>About</h1></NavLink>
            </li>
            <li>
            <NavLink className='nav-bar-link'to='/contact'> <h1>Contact</h1></NavLink>
            </li>
            <li>
            <NavLink className='nav-bar-link'to='/filter'> <h1>Filter</h1></NavLink>
            </li>
        </ul>
         {/* <Link to='/contact/:name'><h1>Anshu</h1></Link> */}
        </div>
        )
}
export default Navbar