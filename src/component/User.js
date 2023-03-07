import { useLocation, useParams ,useSearchParams} from "react-router-dom"


const User=()=>{
    const location = useLocation();
    console.log(location)
    const params=useParams();
    const {name}=params;
     
    return(
        <div>
            <h1>This is {name} Page</h1>
        </div>
    )
}
export default User