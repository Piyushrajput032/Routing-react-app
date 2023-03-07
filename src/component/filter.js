import { useSearchParams } from "react-router-dom";

const Filter=()=>{
    const[searchParams,setSearchParms]=useSearchParams()
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
    const age=searchParams.get('age')
    const city=searchParams.get('city')
    return(
        <div>
            <h1>Filter Page</h1>
            
            <h3>and your age is {age} and city is {city}</h3>
            <input type='text' onChange={(e)=>setSearchParms({text:e.target.value,age:20})} placeholder='enter the city'/>
            <button onClick={()=>setSearchParms({age:40})}>Click me to see</button>
        </div>
    )
}
export default Filter;