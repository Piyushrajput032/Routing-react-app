import { Link, useLocation } from 'react-router-dom'

function About() {

    return (
        <div>
            <h1>About Page</h1>
            <p>this is the about page of my site for the game changing</p>
            <Link to='/user/golu' state={{age:343}}><h1>Golu</h1></Link>
            <Link to='/user/anshu'><h1>Anshu</h1></Link>

        </div>
    )
}

export default About;

//protected routing
// it help to hide page which we dont want to show before login


//localStorage.setItem('login',true)
//let login = localStorage.getItem('login')
















