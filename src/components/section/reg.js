import React,{useState} from "react"; 
import '../css/reg.css'

const Reg= () =>{
	//state
	const [nameText, setNameText ] = useState();
	const [emailText, setEmailText ] = useState();
	const [passwordText, setpasswordText ] = useState();
	const [passwordText1, setpasswordText1 ] = useState();
	const [regdata,setdata] =useState([]);
	const [r,setrdata] =useState([]);
	const [rm,setrmdata] =useState([]);
	
	//set functions
	const  handlerName= (e) =>{
		///console.log(e.target.value);
		setNameText(e.target.value);
		
		}
	
	const handlerEmail  = (e) =>{
		//console.log(e.target.value);
		setEmailText(e.target.value);
	};
	const handlerpass= (e) =>{
		//console.log(e.target.value);
		setpasswordText(e.target.value);
	};
	const handlerpass1= (e) =>{
	//console.log(e.target.value);
	   setpasswordText1(e.target.value);
	}; 
	const handlersub = (e) =>{
		e.preventDefault()
	 	if(nameText== null || (!/^[a-zA-Z]*$/g.test(nameText)) ){			
			
		alert("please fill with proper name" );
	
		
		}
		
		else if(emailText == null || (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(emailText))){
			alert("please fill with proper email");

		}
		else if(passwordText == null){
			alert("please fill password");
		}
		else if(passwordText1 == null){
			alert("please fill password");
		}
		else if(passwordText !=passwordText1 ){
			alert("password mismatch");
		}
		
		 else{
			var dat1= localStorage.getItem("r");
			 console.log("rrr"+dat1);
			 if(dat1 !=null){
				var reg1 = JSON.parse(dat1);
				reg1.push({
					name:nameText,
					pa:passwordText
					})
			}
			else {
				r.push({
					name:nameText,
					pa:passwordText
				 })
				reg1=r;
			}
			setrdata(reg1);
			localStorage.setItem("r", JSON.stringify(reg1));
			var arr=localStorage.getItem("localData");
			if(arr !=null){
				var reg = JSON.parse(arr);
				reg.push({
					name:nameText,
					email:emailText,
					pass1:passwordText,
					pass2:passwordText1 ,
					id:Math.random() * 1000 
	
				 })
			}
			else {
				regdata.push({
					name:nameText,
					email:emailText,
					pass1:passwordText,
					pass2:passwordText1 ,
					id:Math.random() * 1000 
	
				 })
				reg=regdata;
			}

			setdata(reg);
			//console.log(reg);
			localStorage.setItem("localData", JSON.stringify(reg));
		    window.location.href = "/log";
			// 
		
			setNameText("")
		
			setEmailText("");
			setpasswordText("");
			setpasswordText1("")
			
			}

			
			// 
		
			

		 }
	 
	
    return(
     <div>
          
			<form>
				<ul class="left-form">
					<h2 class="h2">New Account</h2>
					<li>
				     <input type="text" value={nameText} onChange={handlerName} placeholder="Username" />
					</li> 
					<li>
					<input type="text"  value={emailText} onChange={handlerEmail} placeholder="Email" />
					</li> 
					<li>
						<input type="password" value={passwordText} onChange={handlerpass} placeholder="password" />	
					</li> 
					<li>
						<input type="password"  value={passwordText1} onChange={handlerpass1} placeholder="password" />
					</li> 
				  
                      <li><button class="but1" onClick={handlersub}>REGISTER</button></li> 
                  </ul>
				
			</form>
			
	
        </div>
       
    )
}
export default Reg;