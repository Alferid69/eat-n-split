import { Button } from "./Button";

export function Friend({ friend, onClick, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p style={{ color: "#e03131" }}>
          you owe {friend.name} ${-1 * friend.balance}
        </p>
      ) : friend.balance === 0 ? (
        <p>you and {friend.name} are even</p>
      ) : (
        <p style={{ color: "#66a80f" }}>
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      <Button onClick={() => onClick(friend)}>
        {isSelected ? "close" : "Select"}
      </Button>{" "}
    </li>
  );
}
