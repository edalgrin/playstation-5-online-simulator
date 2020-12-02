import React from "react";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";

const Settings = () => {
  return (
    <div className="ps5-modal-dialog">
      <h2>Settings?</h2>
      <p>
        Usually, I like to add some interactive and customizable parts to my
        websites, this time it's a little bit harder
      </p>
      <p>
        The User Interface is very specific and can't be edited significantly
        without breaking its structure
      </p>
      <h2>But</h2>
      <p>I have an idea, I just need more time to develop it, stay tuned!</p>
      {/* <div className="ps5-btn-group">
        <a
          href="https://twitter.com/intent/follow?screen_name=edalgrin&tw_p=followbutton"
          target="_blank"
          rel="noopener"
          title="Twitter"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconTwitter />
        </a>
      </div> */}
    </div>
  );
};

export default Settings;
