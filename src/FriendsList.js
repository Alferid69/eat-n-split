import { Friend } from "./Friend";

export function FriendsList({ friends, onFriendSelect, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          onClick={onFriendSelect}
          selectedFriend={selectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
