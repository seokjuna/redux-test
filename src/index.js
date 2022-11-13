import React from "react";
import ReactDOM from "react-dom";
import store from "./common/store";
import FriendMain from "./friend/container/FriendMain";
import TimelineMain from "./timeline/container/TimelineMain";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <FriendMain />
      <TimelineMain />
    </div>
  </Provider>,
  document.getElementById("root")
);