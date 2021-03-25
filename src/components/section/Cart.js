import React, { Component ,useEffect,useState} from 'react'

import {Link} from 'react-router-dom'

import '../css/Details.css'
import '../css/Cart.css'
const Cart  = ()=>{
    const[tot,settot]=useState()
    useEffect(() =>{
        getTotal();
      },[]);
  const   getTotal = ()=>{
    var carttotal=JSON.parse(localStorage.getItem("cart"));

        const tot = carttotal.reduce((prev, item1) => {
            return prev + (item1.price * item1.count);
        },0)
        settot(tot);
        // this.setState({total: res})
       console.log(tot)
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
	
      
        
        //     this.getTotal();
        
    }
       
    }





    var incart=JSON.parse(localStorage.getItem("cart"));
    if(incart ===null){
       
        return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
    }
  

    else{
                    
    return(
        <div>
            { incart.map((ite,index )=>{
		
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
                        <h3>Total: ${tot}</h3>
                    </div>
   
     </div>
    )

 

}
}
export default Cart;
