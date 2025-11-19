export default function Card({product}){
    return(
        <>
        <div className="card shadow-lg">
            <div className="card-img-top">
                <img src={product.image} alt="" width={400} height={400} />
            </div>
            <div className="card-body">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-lg bg-primary text-white">Buy now</button><button className="btn btn-lg bg-warning text-white">Wishlist</button>
            </div>
        </div>
        </>
    )
}