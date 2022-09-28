import "../assets/styles/dorama.css";


function Card(props){

    return(
        
            <div className="containerDorama-card">
                <div className="contenedorimg">{props.img}</div>{props.title}{props.description}{props.url}
            </div>
    );
}

export default Card;