import React from "react";
import "../styles/SubScrip.css";
const FooterSubScrip = () => {
  return (
    <section className="footerSub-section">
      <div className="subscription-wrapper">
        <h2>Join Renderforest newsletter</h2>
        <p>Be among the first ones to receive our latest news and offers</p>
        <div className="input-area">
          <form className="subscription-form">
            <div className="input-group">
              <label className="input-label">
                <div className="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18.575c0-2.722 3.686-3.4 8-3.4 4.339 0 8 .7 8 3.424S16.315 22 12 22c-4.338 0-8-.7-8-3.425M6.706 7.291A5.294 5.294 0 1 1 12 12.583a5.274 5.274 0 0 1-5.294-5.292"></path>
                  </svg>
                </div>
                <input
                  className="subscription-input"
                  placeholder="Enter your name"
                />
              </label>
              <label className="input-label">
                <div className="input-icon">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.939 21H7.06A5.06 5.06 0 0 1 2 15.95v-7.9A5.06 5.06 0 0 1 7.06 3h9.879a5.1 5.1 0 0 1 3.58 1.481A5.01 5.01 0 0 1 22 8.05v7.9A5.06 5.06 0 0 1 16.939 21M6.034 8.246a.73.73 0 0 0-.534.224.764.764 0 0 0-.071 1l.131.13 4.55 3.55a3.13 3.13 0 0 0 1.95.68 3.18 3.18 0 0 0 1.958-.68l4.512-3.61.08-.08a.774.774 0 0 0-.012-1 .83.83 0 0 0-.528-.26h-.042a.76.76 0 0 0-.519.2L13 12a1.57 1.57 0 0 1-1 .36 1.6 1.6 0 0 1-1-.36L6.5 8.4a.78.78 0 0 0-.466-.154"></path>
                  </svg>
                </div>
                <input
                  className="subscription-input subscription-input2"
                  placeholder="Enter your email"
                />
              </label>
            </div>
            <button className="subscription-button">Join</button>
          </form>
        </div>
        <div className="form-description">
          You can easily unsubscribe at any time.
        </div>
      </div>
    </section>
  );
};
export default FooterSubScrip;
