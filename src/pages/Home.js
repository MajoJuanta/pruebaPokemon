import React from 'react';
import api from '../api';
import CardPokemon from '../components/CardPokemon';

class Home extends React.Component{

    //inicializar estado
    //ocurre primero
    constructor(props){
        super(props);
        this. state={
            loading: true,
            error: null,
            data:undefined,
            dataPokemones:undefined,
            generacion:1,
        }
    }

    componentDidMount(){
        this.fetchData(1);
    }

    componentDidUpdate(prevProps, prevState){
        console.log();
    }
    componentWillUnmount(){
        clearTimeout(this.timeoudId);
    }

    fetchData = async (generacion) => {
        this.setState({loading: true, error: null});
        if(generacion==1){
            try{
                const data = await api.generacion1.list();
                console.log("pokemones" +JSON.stringify(data['results']));
                this.setState({ loading:false, data: data['results']});
            }catch(error){
                this.setState({ loading:false, error: error});
            }
        }
        if(generacion==2){
            try{
                const data = await api.generacion2.list();
                console.log("pokemones" +JSON.stringify(data['results']));
                this.setState({ loading:false, data: data['results']});
            }catch(error){
                this.setState({ loading:false, error: error});
            }
        }
        if(generacion==3){
            try{
                const data = await api.generacion3.list();
                console.log("pokemones" +JSON.stringify(data['results']));
                this.setState({ loading:false, data: data['results']});
            }catch(error){
                this.setState({ loading:false, error: error});
            }
        }
        
    }


    mapPokemonDescripcion(){
        let nombre="";
        let tipo="";
        let imagen="";
        let generacion="";




    }

    handleChange= (id) =>{
         
            if(id==1){  
                
                this.setState({
                    generacion:1,
                })
            }
            if(id==2){  
                
                this.setState({
                    generacion:2,
                })
            }
            if(id==3){  
                
                this.setState({
                    generacion:3,
                })
            }
        }


    render(){
        if(this.state.loading=== true){
            return 'Loading ...';
        }
        if(this.state.data.length === 0){
            return (
                <p>Sigue buscando</p>
            )
        }
        return(
         <div>        
            <div className=" pb-5">
                <h5 className="pt-5 text-center">Busca tu pokemon</h5>
                <div className="row text-center d-block" >
                    <button type="button" class="btn btn-primary m-3">Generacion 1</button>
                    <button type="button" class="btn btn-primary m-3">Generacino 2</button>
                    <button type="button" class="btn btn-primary m-3">Generacion 3</button>
                </div>
               
                <div className="container">
                        <div className="">
                         <CardPokemon pokemon={this.state.data} /> 
                        </div>
            
                  
                </div>
              </div>           
         </div>
         
        );
    }
}
export default Home;