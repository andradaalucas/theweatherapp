import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
export default function Card ({min, max, name, img, onClose, id}) {
    return (
      
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="closebtn">X</button>
        </div>
        <div className="body-card">
        <Link to={`/ciudad/${id}`} >
          <h3 className="card-title">{name}</h3>
        </Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
