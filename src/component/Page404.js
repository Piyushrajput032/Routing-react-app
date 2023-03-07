import { Link } from "react-router-dom";

const Page404=()=>{
    return(
        <div>
            <h1>404 ERORR page not found</h1>
            <h1>This URL is not present</h1>
            <Link to='/'>Go to home</Link>
        </div>
    )
}
export default Page404;