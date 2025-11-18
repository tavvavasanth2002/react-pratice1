export default function Card({product}){
    return(
        <>
        <div className="card shadow-lg">
            <div className="card-img-top">
                <img src={product.image} alt="" />
            </div>
            <div className="card-body">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <div className="card-footer">
                <button>submit</button><button>reset</button>
            </div>
        </div>
        </>
    )
}