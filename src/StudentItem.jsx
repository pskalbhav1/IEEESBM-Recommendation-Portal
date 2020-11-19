import React from "react";
import {
  Link,
} from 'react-router-dom';

export default function StudentItem({
  firstname,
  lastname,
  domains,
  stream,
  id,
}) {
  return (
    <div className="students__item">
      <h2 className="students__name">
        {id + ". " + firstname + " " + lastname}
      </h2>
      <span className="students__stream">Stream: {stream}</span>
      <span className="students__domains">Domains: {domains.join(" ")}</span>
      <button className="students__item-btn"><Link to={`/users/${id}/show`}>View</Link></button>
    </div>
  );
}
