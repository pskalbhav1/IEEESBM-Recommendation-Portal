import React from "react";


export default function StudentItem({
  firstname,
  lastname,
  domains,
  stream,
}) {
  return (
    <div>
        <h1>Profile</h1>
        <br></br><br></br>

     <span className="students__name">
          Name:
        {firstname + " " + lastname}
      </span>
      <br></br>
      <span className="students__stream">Stream: {stream}</span>
      <br></br>
      <span className="students__domains">Domains: {domains}</span>
      
    </div>
  );
}
