import React from 'react';

const Card = ({ image, title, description }) => (
  <div className="card max-h-45 bg-base-100 shadow-xl bg-purple-400 hover:scale-105 duration-200">
    <figure className="px-10 pt-10">
      <img
        src={image}
        alt={title}
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center ">
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
);

const CourseList = () => {
  const cardsData = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMCzx_CoLmY3a0EHARQbHrclv91dbUud7Sw&s",
      title: "Book 1",
      description: "Description for Book 1",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMCzx_CoLmY3a0EHARQbHrclv91dbUud7Sw&s",
      title: "Book 2",
      description: "Description for Book 2",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMCzx_CoLmY3a0EHARQbHrclv91dbUud7Sw&s",
      title: "Book 3",
      description: "Description for Book 3",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMCzx_CoLmY3a0EHARQbHrclv91dbUud7Sw&s",
      title: "Book 4",
      description: "Description for Book 4",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMCzx_CoLmY3a0EHARQbHrclv91dbUud7Sw&s",
        title: "Book 1",
        description: "Description for Book 1",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMCzx_CoLmY3a0EHARQbHrclv91dbUud7Sw&s",
        title: "Book 2",
        description: "Description for Book 2",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMCzx_CoLmY3a0EHARQbHrclv91dbUud7Sw&s",
        title: "Book 3",
        description: "Description for Book 3",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMCzx_CoLmY3a0EHARQbHrclv91dbUud7Sw&s",
        title: "Book 4",
        description: "Description for Book 4",
      },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6  hover:scale-xl duration-200">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CourseList;
