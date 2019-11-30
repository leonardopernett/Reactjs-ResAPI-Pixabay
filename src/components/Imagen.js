import React from 'react'



const Imagen = (props)=> {
  const {largeImageURL, likes, views, previewURL} = props.image;
     return (
       

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card ">
              <img src={previewURL}  />

              <div className="card-body">
                <p className="card-text">{likes} me gusta</p>
                <p className="card-text">{views} vistas</p>
                <a href={largeImageURL} rel="noopener noreferrer" alt="imagen bsuqueda" className="btn btn-danger" target="_blank">Mas Informacion</a>
              </div>
            </div>
        </div>
     )
}



export default Imagen