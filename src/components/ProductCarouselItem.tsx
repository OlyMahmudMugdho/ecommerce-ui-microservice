
export type TypeProductCarouselItem = {
    image: string;
    title: string;
    description: string;
}

export default function ProductCarouselItem(props : TypeProductCarouselItem) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={props.image}
                    alt={props.title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>
                    { props.description }
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}