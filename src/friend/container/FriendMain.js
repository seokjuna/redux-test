import React, { useEffect, useReducer } from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";

export default function FriendMain() {
    const [, forceUpdate] = useReducer(v => v + 1, 0);
    useEffect(() => {
        let prevFriends = store.getState().friend.friends;
        const unsubscribe = store.subscribe(() => {
            const friends = store.getState().friend.friends;
            if (prevFriends !== friends) {
                forceUpdate();
            }
            prevFriends = friends;
        });
        return () => unsubscribe();
    }, []);
    function onADD() {
        const friend = getNextFriend();
        store.dispatch(addFriend(friend));
    }
    console.log("FriendMain render");
    const friends = store.getState().friend.friends;
    return (
        <div>
            <button onClick={onADD}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    );
}


    
            
        
    
