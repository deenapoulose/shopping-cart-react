import React from 'react';
const Logout =()=>{
    var logoutdata=JSON.parse(localStorage.getItem('loginfo'))
    //console.log(logoutdata)
    let newuserin = logoutdata.filter(function (id,index) {
		return index !== 0;
     });
     localStorage.setItem("loginfo", JSON.stringify(newuserin));
     window.location.href = "/prod";
    return(
    <div>
    
    </div>
    )
}
export default Logout;