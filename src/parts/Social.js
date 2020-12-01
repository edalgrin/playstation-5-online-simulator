import React from "react";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";
// import { ReactComponent as IconCodepen } from "../assets/icon-codepen.svg";
// import { ReactComponent as IconGithub } from "../assets/icon-github.svg";
import { ReactComponent as IconFacebook } from "../assets/icon-facebook.svg";
import { ReactComponent as IconLinkedin } from "../assets/icon-linkedin.svg";
// import { ReactComponent as IconYoutube } from "../assets/icon-youtube.svg";
// import { ReactComponent as IconMedium } from "../assets/icon-medium.svg";

const Social = () => {
  return (
    <div className="ps5-modal-dialog">
      <h2>Hi!</h2>
      <p>
        My name is Eduardo Allegrini, I'm a Frontend Developer and this website
        is a side project I made as a study of Playstation 5 UX
      </p>
      <p>
        I would really appreciate it if you could share this page through your
        social channels
      </p>
      <div className="ps5-btn-group">
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
          href="https://twitter.com/intent/retweet?tweet_id=1331341295667851268"
        >
          <IconTwitter />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
          href="https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=http%3A%2F%2Feduardoallegrini.com%2F&display=popup&ref=plugin&src=share_button"
        >
          <IconFacebook />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
          //   href="http://www.linkedin.com/shareArticle?mini=true&url=http://eduardoallegrini.com&title=How%20to%20make%20custom%20linkedin%20share%20button&summary=some%20summary%20if%20you%20want&source=stackoverflow.com"
          href="http://www.linkedin.com/shareArticle?mini=true&url=http://eduardoallegrini.com"
        >
          <IconLinkedin />
        </a>

        <a
          href="http://eduardoallegrini.com/#active"
          target="_blank"
          rel="noopener noreferrer"
          title="Website"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <img src="http://eduardoallegrini.com/logo192.png" alt="" />
        </a>
      </div>
      <h2>Thank you! 💙</h2>
      {/* <div className="ps5-btn-group"> */}
      {/* <a
          href="https://twitter.com/intent/follow?screen_name=edalgrin&tw_p=followbutton"
          target="_blank"
          //   rel="noopener noreferrer"
          title="Twitter"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconTwitter />
        </a> */}

      {/* <a
          href="https://codepen.io/edalgrin"
          target="_blank"
        //   rel="noopener noreferrer"
          title="Codepen"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconCodepen />
        </a>

        <a
          href="https://github.com/edalgrin"
          target="_blank"
        //   rel="noopener noreferrer"
          title="Github"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconGithub />
        </a>

        <a
          href="https://linkedin.com/in/edalgrin/"
          target="_blank"
        //   rel="noopener noreferrer"
          title="Linkedin"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconLinkedin />
        </a>

        <a
          href="https://youtube.com/channel/UCkz8V_-rSVY19BcXk-gQRuA/featured"
          target="_blank"
        //   rel="noopener noreferrer"
          title="Youtube"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconYoutube />
        </a>

        <a
          href="https://medium.com/@edalgrin"
          target="_blank"
        //   rel="noopener noreferrer"
          title="Medium"
          className="ps5-btn ps5-btn-lg ps5-btn-mono ps5-btn-primary"
        >
          <IconMedium />
        </a> */}
      {/* </div> */}
    </div>
  );
};

export default Social;
