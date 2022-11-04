import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Rating({ rating, onClick }) {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <span key={index} onClick={() => onClick(index)} style={{cursor: 'pointer'}}>
          {rating > index ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
}
