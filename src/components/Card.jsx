import React from 'react';
export default function Card({ id, title, about }) {
  return (
  <section className="p-3 m-0 border-0 bd-example m-0 border-0">
    <div className="card" style="width: 18rem;">
      <div className="card-body">
        <h3>{id}</h3>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{about}</p>
        <a href="#" className="btn btn-primary">Voir logiciel</a>
        <a href="#" className="btn btn-primary">Code source</a>
      </div>
    </div>
  </section>
  )
}