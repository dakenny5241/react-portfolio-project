import React from 'react';
import FriendCard from "../FriendCard";
import friends from "../../friends.json";
export default function Portfolio() {
  return (
    <div>
      {friends.map(friend => (
        <FriendCard
          id={friend.id}
          key={friend.id}
          title={friend.title}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />
      ))}
    </div>
  );
}