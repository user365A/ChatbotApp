import React from "react";

const Info =(props)=>{
  return(
    <div style={{width:"300px"}}>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title" style={{color:'cyan'}}>Information about us</span>
          <hr />
          <br />
          <p>{props.payload.fields.description.stringValue}</p>
          <p>Address: {props.payload.fields.address.stringValue}</p>
          <p>Email: {props.payload.fields.email.stringValue}</p>
          <p>Phone zalo: {props.payload.fields.phone.stringValue}</p>
        </div>
        <div className="card-action">
          <a  href="/contact">Here is link</a>
        </div>
      </div>
    </div>
    )
}

export default Info;