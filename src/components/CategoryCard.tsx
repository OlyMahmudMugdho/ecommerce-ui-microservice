import React from "react";


export type CategoryCardProps = {
    title: string
    image: React.ReactElement
}

export default function CategoryCard(props: CategoryCardProps) {
    console.log(props.title)
    return (
        <div className="card my-4 bg-base-100 w-32 md:w-48 shadow-2xl mx-2 md:mx-8 border border-solid h-44">
            <figure> 
                {props.image}
            </figure>
            <div className="card-body">
                <h2 className="card-title flex items-center justify-center text-center">
                    { props.title }
                </h2>
            </div>
        </div>
    )
}