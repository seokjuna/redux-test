import React from "react";
import store from "../../common/store";
import { getNextFriend } from "../../common/mockData";
import { addFriend } from "../state";
import FriendList from "../component/FriendList";
import { useSelector, useDispatch } from "react-redux";

export default function FriendMain() {
    const friends = useSelector(state => state.friend.friends);
    const dispatch = useDispatch();
    function onADD() {
        const friend = getNextFriend();
        store.dispatch(addFriend(friend));
    }
    console.log("FriendMain render");
    return (
        <div>
            <button onClick={onADD}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    );
}


    
            
        
    
