import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axioswithAuth";
import AddFriend from "./AddFriend";
import FriendsCard from "./FriendsCard.js";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  function getData() {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  }
  useEffect(() => getData(), []);
  
  console.log("list of friends", friends);
  return (
    <div>
      <AddFriend />
      {friends.length > 0
        ? friends.map(friend => <FriendsCard key={friend.id} friend={friend} />)
        : null}
    </div>
  );
};

export default Friends;