import Button from "./Button";

export default function Friend({ friend, selectedFriend, onSelection }) {
    const isSelected = friend.id === selectedFriend?.id;

    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {friend.balance < 0 && (
                <p>
                    You owe {friend.name} {Math.abs(friend.balance)}€
                </p>
            )}

            {friend.balance > 0 && (
                <p>
                    {friend.name} owes you {friend.balance}€
                </p>
            )}

            {friend.balance === 0 && <p>You and {friend.name} are even</p>}

            <Button onClick={() => onSelection(friend)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    )
}