import React from "react";
import Password from "./password";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      {/* <h1>Create Post</h1> */}
      <h1>Check Password</h1>
      {/* <PostCreate /> */}
      <hr />
      {/* <h1>Posts</h1> */}
      {/* <PostList /> */}
      <Password />
    </div>
  );
};
export default App;
