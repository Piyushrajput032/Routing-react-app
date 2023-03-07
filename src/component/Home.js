import { Link ,useNavigate} from "react-router-dom";

function Home(){

    // const location = useLocation();
    // console.log(location)
const navigate=useNavigate();
 const navToPage=(url)=>{
    navigate(url)
    // let x=true;
    // if(x){
    // navigate('/about')
    // }else{
    //     navigate('/filter')
    // }
 }
    return(
    <div>
        <h1>This is home Page</h1>
        <p> this is the testing of the site home Page for the next router</p>
        <Link to='/about'><h1>go to about page</h1></Link>
        <br/>
       
        <button onClick={()=>navToPage('/about')}> Go to About Page</button>
        <button onClick={()=>navToPage('/filter')}> Go to Filter Page</button>
    
    </div>    


    )
}

export default Home;