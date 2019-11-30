import React from 'react'



const Paginacion = (props)=>{

     return(

         <div className="py-3 text-center">
             <button onClick={props.paginaAnterior} className="btn btn-danger mr-1"> anterior</button>
             <button onClick={props.paginaSiguiente} className="btn btn-danger mr-1"> siguiente</button>
         </div>
     )
}

export default Paginacion