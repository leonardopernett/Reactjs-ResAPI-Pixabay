import React , {Component} from 'react';

import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class App extends Component {
 

state = {
  termino:'',
  imagen:[],
  pagina: ''
}


scroll = ()=> {
  let element = document.querySelector('.jumbotron')
  element.scrollIntoView('smooth', 'start')
}


consultarAPI= ()=> {
  const page= this.state.pagina
    const api = `https://pixabay.com/api/?key=14460552-4c95da82bd56b5a6b89fffac5&q=${this.state.termino}&per_pag=30&page=${page}`
       fetch(api)
       .then(data=>data.json())
       .then (res => {

           this.setState({
             imagen:res.hits
           })
       })
  }

  datosBuscar = (data)=>{
      this.setState({
        termino:data
      },()=> {
         this.consultarAPI()
      }) 
  }

  paginaAnterior = ()=> {
     //leer state
     let pag = this.state.pagina
     
     //condicion 
     if(pag === 1) return null ;
     //ir a la anterir pagina
     pag -= 1 ;

     //guardarla en el satte 
     this.setState({
         pagina:pag
     }, ()=>{
         //llamar a los metodos orincipal
         this.consultarAPI()
         this.scroll()
     })
  }

  paginaSiguiente = ()=> {
     //leer state
    let pag = this.state.pagina
    //ir a la siguiente pagina
    pag += 1 ;
    //renombrar el statae
    this.setState({
        pagina:pag
    }, ()=> {
      this.consultarAPI()
      this.scroll()
    })
  }



   render(){
      return (
        <div className="container">
            <div className="jumbotron bg-dark text-white">
                 <h3 className="leat text-center">
                    Buscador de Imagenes 
                 </h3>
                 <Buscador data={this.datosBuscar} />
            </div>
            
            <Resultado 
             imagen= {this.state.imagen}
             paginaAnterior={this.paginaAnterior}
             paginaSiguiente = {this.paginaSiguiente} 
             />
             
        </div>
      )
   }

}

export default App