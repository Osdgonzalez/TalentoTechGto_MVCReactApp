const Tarjeta = ( props ) => {
    return (
        <div className="card text-center bg-dark mt-5">
            <div className="card-body">
                <h1 className="card-title text-info">
                    { props.title || "Título de la tarjeta" }
                </h1>
                <p className="card-text text-align text-info">
                    { props.description || "Descripción de la tarjeta" }
                </p>
                <button className="btn btn-danger">{ props.txtButton || "Click Aquí" }</button>
            </div>
        </div>
    );
}

export default Tarjeta;