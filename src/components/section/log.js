import '../css/reg.css'
import React ,{useState} from "react"; 
const Log = () =>{
    const[lname,lnameset]=useState()
    const[pa,setpass]=useState()
    
   
    const  hl= (e) =>{
	
		lnameset(e.target.value);
		
     }
    const  hp= (e) =>{
          
            setpass(e.target.value);
            
            }

    const hlog = (e) => {
        e.preventDefault()
        var dat1= localStorage.getItem("r");
  
		var log = JSON.parse(dat1);
        var count=0;
        for(let i=0;i<log.length;i++){
           
            if(( log[i].name===lname ) && (log[i].pa===pa)){
                 count=count+1
                 console.log("count"+count);
             }}
    if(count>0){




        alert("welcome");
        window.location.href = "/prod";
    }
    else{

        alert("give correct information");
        window.location.href = "/log";
    }
   

    }
    return(
        <div>
           <form>
				<ul className="left-form">
					<h2 className="h2">Login</h2>
					<li>
				     <input type="text" value={lname} onChange={hl} placeholder="Username" />
					</li> 
					<li>
						<input type="password"  value={pa} onChange={hp} placeholder="password" />
					</li> 
				  
                      <li><button class="but1" onClick={hlog}>LOGIN</button></li> 
                  </ul>
				
			</form>
        </div>
    )
}
export default Log;