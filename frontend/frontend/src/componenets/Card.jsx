import React from "react";
import './Card.css';
function Card({ imageSrc, title, description, tags, isNew }) {
    return (
        <div className="card card bg-base-100 w-full md:w-96 border shadow-xl m-2 hover:scale-105 duration-200">
            <figure>
                <img src={imageSrc} alt={title} className="w-full h-auto" />
            </figure>
            <div className="card-body bg-teal-400">
                <h2 className="card-title text-black">
                    {title}
                    {isNew && <div className="badge badge-secondary ml-2">NEW</div>}
                </h2>
                <p className="text-black">{description}</p>
                <div className="card-actions justify-end ">
                    {tags.map((tag, index) => (
                        <div key={index} className="badge badge-outline  hover:bg-red-500 text-black">{tag}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
