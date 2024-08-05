import { Rating } from "@mui/material";
import React from "react";
import "./CustomerReviewCard.css";
import { Star } from "@mui/icons-material";

const CustomerReviewCard = ({ data }) => {
  return (
    <li className="review-card">
      <div className="display-flex">
        <img className="review-user-avatar" src={data.image} alt={data.name} />
        <p className="user-review-name">{data.name}</p>
      </div>
      <Rating
        name="user-feedback"
        value={data.rating}
        readOnly
        size="small"
        emptyIcon={<Star className="starIcon" fontSize="inherit" />}
      />
      <p className="user-review-text">{data.review}</p>
    </li>
  );
};

export default CustomerReviewCard;
