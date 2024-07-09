import { useState } from "react";
import { FormSplitBill } from "./FormSplitBill";
import { FormAddFriend } from "./FormAddFriend";
import { Button } from "./Button";
import { FriendsList } from "./FriendsList";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setIsAddFriendOpen((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsAddFriendOpen(false);
  }

  function handleFriendSelect(friend) {
    setSelectedFriend(friend);
    if (selectedFriend === friend) setSelectedFriend(null);
    setIsAddFriendOpen(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onFriendSelect={handleFriendSelect}
          selectedFriend={selectedFriend}
        />

        {isAddFriendOpen && <FormAddFriend onAddFriend={handleAddFriend} />}

        {selectedFriend === null ? (
          ""
        ) : (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplit={handleSplitBill}
          />
        )}

        <Button onClick={handleShowAddFriend}>
          {isAddFriendOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
    </div>
  );
}
