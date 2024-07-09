import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, onSplit }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [payer, setPayer] = useState("user");
  const friendBill = Number(bill) - Number(myExpense);

  function handleSubmit(e) {
    e.preventDefault();
    onSplit(payer === "user" ? friendBill : -myExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split A bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        required
      />

      <label>🕴️Your expenses:</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) =>
          setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value)
          )
        }
        required
      />

      <label>🧑‍🤝‍🧑 {selectedFriend.name}'s expenses: </label>
      <input type="text" value={friendBill} disabled />

      <label>🤑 Who is paying the bill? </label>
      <select onChange={(e) => setPayer(e.target.value)} value={payer}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
