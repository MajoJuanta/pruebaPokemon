import React from 'react';
import '../styles/main.css';

class CardPokemonItem extends React.Component{
    render(){
       
        return(
           <div className="card p-4" >
                <div className="row mb-4 ">
                    <div className="col-8 col-md-12 text-start d-md-flex p-md-0">
                        <div className="col-md-12">
                                <h4 className="text-left text-md-center pr-0 ">{this.props.pokemon.name}</h4>
                        </div> 
                    </div>   
                    <div className='row mt-3 col-12'>
                        <div className="col-md-4 text-left mb-0 d-flex">
                            <h4 className="col p-0">Imagen</h4>                                       
                        </div> 
                        <div className="col-md-4 text-left mb-0 d-flex">
                            <h4 className="col p-0">Tipo</h4>    
                                                          
                        </div>  
                        <div className="col-md-4 text-left mb-0 d-flex">
                            <h4 className="col p-0">Generacion</h4>  
                                          
                        </div>  
                     </div>  
                        
                                             
                        
                                
                </div>             
            </div>          
        );
    }
}

function CardPokemon(props){
    console.log('tamaño '+ props.pokemon);
        if(props.pokemon.length === 0){
            return(
                <div className="text-center noResultados">
                      <h3>No hya resultados</h3>          
                </div> 
            )
        }

        
      
        return(
            <div className="row">
              {props.pokemon.map(pokemon => {
                return (
                    <div className="col-sm-12 col-md-6">
                        <CardPokemonItem pokemon={pokemon} />
                    </div>

                    
                );
              })}
          </div>
        )
    
}


export default CardPokemon;
