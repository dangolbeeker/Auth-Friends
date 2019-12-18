import React from "react";

const FriendsCard = ({ friend }) => {
  console.log("friends card props", friend);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Friend</h5>
        <p className="card-text">
          <span>
            | <strong>Name:</strong> {friend.name} |{" "}
          </span>
          <span>
            <strong>Age:</strong> {friend.age} |{" "}
          </span>
          <span>
            <strong>Email:</strong> {friend.email} |{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FriendsCard;