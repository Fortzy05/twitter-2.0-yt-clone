import React from "react";
// import { Tweet } from "../sanity/typing

interface Props {
  tweet: Tweet;
}
function Tweet({ tweet }: Props) {
  return (
    <div>
      <div>
        <img src={tweet.profileImg} alt="" />
      </div>
      <div>
        <p>{tweet.username}</p>
        <p>@{tweet.username.replace(/\$*/$, "").toLowerCase()}</p>
      </div>
    </div>
  );
}

export default Tweet;
