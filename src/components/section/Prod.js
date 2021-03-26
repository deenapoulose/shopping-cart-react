import {Link} from 'react-router-dom'
import '../css/Products.css'
import React, { useState,useEffect } from 'react';
import f1 from '../svg/img4.jpg'
import f2 from '../svg/img1.jpg';
import f3 from '../svg/img2.jpg';
import f4 from '../svg/img3.jpg';
import f5 from '../svg/img8.jpg';
import f6 from '../svg/img6.jpg';
const Prod = () =>{
    const [products,setrdata] =useState([]);
    const[cart,setCart]= useState([]);
    const [cartaddn,setcartna]=useState('');
    
	
   
    products.push(
            {
                "id": 1,
                "title": "Lamp 1",
                "src": f1,
                "description": "light glow super",
                "content": "But my darling, there’s no such thing as the light at the end of the tunnel, you must realize that you are the light",
                "price": 20,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "id": 2,
                "title": "Lamp 2",
                "src": f2,
                "description": "light glow super",
                "content": "There is no darkness so dense, so menacing, or so difficult that it cannot be overcome by light.” Vern.",
                "price": 20,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            
            {
                "id": 3,
                "title": "Lamp 3",
                "src": f3,
                "description": "light glow super",
                "content": "Light, or Visible Light, commonly refers to electromagnetic radiation that can be detected by the human eye. ... Light can also be described in terms of a stream of photons, massless packets of energy, each travelling with wavelike properties at the speed of light.",
                "price": 20,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "id": 4,
                "title": "Lamp 4",
                "src": f4,
                "description": "light glow super",
                "content": "“Listen to the inner light; it will guide you. Listen to the inner peace; it will feed you. Listen to the inner love; it will transform you.”",
                "price": 20,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "id": 5,
                "title": "Lamp 5",
                "src": f5,
                "description": "light glow super",
                "content": "“When you possess light within, you see it externally.” Anais Nin",
                "price": 20,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            } ,
            {
                "id": 6,
                "title": "Lamp 6",
                "src": f6,
                "description": "light glow super",
                "content": "Darkness cannot drive out darkness: only light can do that. “When he shall die, “Learn to light a candle in the darkest moments of someone's life. “We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light",
                
                "price": 20,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            } 
            
		 )
        localStorage.setItem("produ", JSON.stringify( products));
        var da= localStorage.getItem("produ");
        var lo= JSON.parse(da);
var addCart =(i) =>{
    
    var getusername=JSON.parse(localStorage.getItem('loginfo'))
    if(getusername !==null){
    for (let i=0;i<getusername.length;i++){
        var  ns= getusername[i].n
        
     
    }
  
}
    
   // console.log(i); fetch id is here
    var prod=JSON.parse(localStorage.getItem("produ"));
    //console.log(prod)
    var newProd=prod.filter(function (id,index){
        return (prod[index].id===i)
    })
    // console.log(newProd);
    var nameuser=ns;
     var a=newProd[0].id;
     var b=newProd[0].title;
     var c=newProd[0].src;
     var d=newProd[0].description;
     var e=newProd[0].content;
     var f=newProd[0].price;
     var g=newProd[0].colors;
     var h=newProd[0].count;
    //console.log(newProd)
    var cdata=new Array();
    var cdata=localStorage.getItem("cart");
    if(cdata !=null){
        var cre = JSON.parse(cdata);
        //get username=
        // var uname=JSON.parse(localStorage.getItem('loginfo'))
        // var unamelen=uname.length;
        // console.log(unamelen)
       // console.log(cre);//check already added item
       var exccart=cre.filter(function (id,index){
        return (cre[index].id===i && cre[index].name===ns)
    })
    //console.log(exccart)
    var check= exccart.length;
    // console.log(check);
    if(check=== 0){
          cre.push({
              "name":nameuser,
            "id": a,
           "title": b,
            "src": c,
            "description": d,
            "content": e,
            "price": f,
            "colors": g,
            "count": h
        })
       window.location.reload();
    }
    else{
        alert("item alreday in cart")
        window.location.reload();
    }

        
    }
    else {
        cart.push(
            {
                "name":nameuser,
                "id": a,
               "title": b,
                "src": c,
                "description": d,
                "content": e,
                "price": f,
                "colors": g,
                "count": h
            }

        )
        cre=cart;
        window.location.reload();
    
    }
    setCart(cre);
    localStorage.setItem("cart", JSON.stringify(cre));
    window.location.reload();
    
}

         
      
    return(
        <div id="product">
               
               { lo.map((item,index )=>{
		
        return(
            <div className="card" key={item.id}>
                           <Link to={`/prod/${item.id}`}>
                               <img src={item.src} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/prod/${item.id}`}>{item.title}</Link>
                               </h3>
                               <span>${item.price}</span>
                               <p>{item.description}</p>
                               <button onClick={()=> addCart(item.id)}>Add to cart</button>
                           </div>
                       </div>
        )
    })
    }
            </div>
    )
}
export default Prod;