import React , {Component} from 'react'


class Buscador extends Component {


    buscadorRef = React.createRef()

    obtenerData = (e)=>{
       e.preventDefault()
      //tomanos el valor del imput 
       const termino = this.buscadorRef.current.value

       //lo enviamos al componenete principal 
       this.props.data(termino)
    }

   render(){
       return (
          <form onSubmit={this.obtenerData}>
              <div className="row ">
               
                      <div className="form-group col-md-10">
                          <input ref={this.buscadorRef} type="text" className="form-control form-control-lg" 
                          placeholder="Buscar tu imagen.. ejemplo futbol .. " />
                      </div>
                      <div className="form-group col-md-2">
                           <button type="submit" className="btn btn-danger btn-lg"> Search</button>
                      </div>
              </div>
          </form>
       )
   }
      
}

export default Buscador 