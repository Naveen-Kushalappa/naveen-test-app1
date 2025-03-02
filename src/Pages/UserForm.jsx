import {useState} from "react";

const UserForm = () => {
    const [userId, setUserId] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const setUserData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target); // Get form data
        const userId = formData.get("userId")
        setUserId(userId);
    }
    return (
        <>
            <form onSubmit={setUserData}>
                <label>Please enter user id </label>
                <input type="text" name="userId"
                       autoComplete="false"
                       onFocus={() => setIsFocused(true)}
                       onBlur={() => setIsFocused(false)}
                       style={{
                    border: isFocused ? '2px solid orange' : '1px solid gray',
                    borderRadius: '5px',
                    padding: '5px'
                }}/>
                <br></br>
                <input type="submit" className="submit" value="Submit" />
    </form>
    <div>
        {userId && (
        <h2>Entered user id is {userId}</h2>
            )
        }
    </div>
        </>
    )

}

export default UserForm