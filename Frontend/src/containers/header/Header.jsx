import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory()
  const redirectToChat = () => {
    history.push('/livechat')
  }
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with Chat Bot
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder="Your Email Address" /> */}
          {/* <NavLink to="/livechat">
            <button type="button">Get Started</button>
          </NavLink> */}
            <button onClick={redirectToChat} type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          {/* <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p> */}
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};

export default Header;
