import React, { Component ,useEffect,useState} from 'react'

import {Link} from 'react-router-dom'

import '../css/Details.css'
import '../css/Cart.css'
const Cart  = ()=>{
    const   [t,setT]=useState('')
    const   [cartuserr,setcartuser]=useState()
    var [tt,setnew]=useState();
    useEffect(() =>{
        getTotal();
        getcartuserr();
      },[]);
const getcartuserr = ()=>{

    var acn=JSON.parse(localStorage.getItem('loginfo'))
    if(acn !==null){
        var  nam=acn[0].n
        setcartuser(nam)
    }
    else{
       alert('please login')
       window.location.href='/log'
    }
   
}


  const   getTotal = ()=>{
      
    var carttotal=JSON.parse(localStorage.getItem("cart"));
    if( carttotal !==null){
        var fg=localStorage.getItem("cart")
        var fg1=JSON.parse(fg);
        var unamewe=JSON.parse(localStorage.getItem('loginfo'))
        var k=unamewe.length
        if(k>0){
           var  userrr=unamewe[0].n

        var w =   fg1.filter(function (id,index) {
            return  fg1[index].name===userrr
         });
        
     
        }
        
// console.log('cartlength',userrr);
// console.log('carwwwwwwwww',w);   // settot(tot);
// // console.log('ee',e);
// console.log('tot',q);


    }
    var q= w.reduce((a,v) =>  a = a + (v.price *v.count) , 0 )
    console.log('to',q)
    setnew(q)
    tt=q
    console.log('t',tt)
   
    };
    
  const  reduction = (i)=>{
    var incartt=JSON.parse(localStorage.getItem("cart"));
    var newda=[];
   var inc=incartt.map((id,index)=>{
       if((incartt[index].id ===i)){
            var newcount=incartt[index].count;
            if(newcount>0){
            newcount-=1;    
            incartt[index].count=newcount;
        }
    }
        newda.push(incartt[index]);
    })
    localStorage.setItem("cart",JSON.stringify(newda));
    window.location.reload();
     
    };
const increase = (i) =>{
  //  alert(i);
    var incartt=JSON.parse(localStorage.getItem("cart"));
    var newda=[];
   var inc=incartt.map((id,index)=>{
       if((incartt[index].id ===i)){
            var newcount=incartt[index].count;
            newcount+=1;    
            incartt[index].count=newcount;
        }
        newda.push(incartt[index]);
    })
    localStorage.setItem("cart",JSON.stringify(newda));
    window.location.reload();




 };
   const removeProduct = (i) =>{
        //alert(i);//id is here
        console.log('"id'+i);
        if(window.confirm("Do you want to delete this product?")){
            var cartdata=JSON.parse(localStorage.getItem("cart"));
	    let deldata = cartdata.filter(function (id,index) {
			return (cartdata[index].id !==i)
         });
         localStorage.setItem("cart", JSON.stringify(deldata));
         window.location.reload();
	
      
        
        
        
    }
       
    }





    var incart=JSON.parse(localStorage.getItem("cart"));
    if( incart !==null){
    var newincart= incart.filter(function (id,index) {
		return incart[index].name===cartuserr
     });
    
     console.log(newincart)
    }
    if(newincart ===null){
       
        return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
    }
  

    else{
                    
    return(
        <div>
            { newincart.map((ite,index )=>{
		
         return(
          <div className="details cart" key={ite.id}>
            <img src={ite.src} alt=""/>
            <div className="box">
                <div className="row">
                    <h2>{ite.title}</h2>
                    <span>${ite.price * ite.count}</span>
                </div>
               
                <p>{ite.description}</p>
                <p>{ite.content}</p>
                <div className="amount">
                    <button className="count" onClick={() => reduction(ite.id)}> - </button>
                    <span>{ite.count}</span>
                    <button className="count"  onClick={() => increase(ite.id)}> + </button>
                </div>
            </div>
            <div className="delete" onClick={() => removeProduct(ite.id)} >X</div>
        </div>
       )
    })
   
}
 <div className="total">
                        <Link to="/payment">Payment</Link>
                        <h3>Total: ${tt}</h3>
                    </div>
   
     </div>
    )

 

}
}
export default Cart;
