import React, { Component } from 'react'

import Imagen from './Imagen'
import Paginacion from './Paginacion';


export default class Resultado extends Component {
  

    mostrarImagenes= ()=> {

        const imagenes = this.props.imagen;
        

        if(imagenes.length === 0)return null;

        console.log(imagenes)
          return (
           <React.Fragment>
                <div className="col-12 p-5 row">
                 {imagenes.map((image, i)=>{
                    return  <Imagen key={i}  image={image} />
                 })}
                 </div>
                 <Paginacion 
                    paginaAnterior   ={this.props.paginaAnterior}
                    paginaSiguiente = {this.props.paginaSiguiente} 
                 />
           </React.Fragment>
          
          )
    }
   
    render() {
        return (
           
            <React.Fragment>
              <div className="text-center">
                {this.mostrarImagenes()}
              </div>
          
             
            </React.Fragment>
          
        )
    }
}
