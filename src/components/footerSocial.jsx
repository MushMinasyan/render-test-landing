import React from "react";
import "../styles/SocialFooter.css";

const FooterSocial = () => {
  return (
    <section className="footer-social">
      <div className="social-media-wrap">
        <div>
          <a href="/">
            <img
              src="https://static.rfstat.com/renderforest/images/v2/new-homepage/renderforest-logo_footer.svg"
              alt="RenderForest"
            />
          </a>
        </div>

        <small>Renderforest © 2013 - 2025</small>

        <section className="social-media-items">
          <a
            href="https://www.facebook.com/Renderforest/"
            className="styles_social-item__nBvLO"
            target="_blank"
            rel="noopener nofollow"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8.459 18.127"
              width="9"
              height="19"
            >
              <path d="M1.828 3.511v2.5H0v3.047h1.828v9.069h3.757V9.058h2.52S8.341 7.6 8.456 6H5.6V3.909a.886.886 0 0 1 .814-.731h2.045V0H5.677C1.736 0 1.828 3.055 1.828 3.511"></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/renderforestcom/"
            className="styles_social-item__nBvLO"
            target="_blank"
            rel="noopener nofollow"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18.138 18.127"
              width="18"
              height="19"
            >
              <path d="M12.469 18.127h-6.8A5.673 5.673 0 0 1 0 12.462v-6.8A5.67 5.67 0 0 1 5.668 0h6.8a5.673 5.673 0 0 1 5.668 5.664v6.8a5.673 5.673 0 0 1-5.667 5.663m-3.4-13.6A4.532 4.532 0 1 0 13.6 9.064a4.54 4.54 0 0 0-4.531-4.532Zm4.875-.944a.6.6 0 1 0 .6.6.6.6 0 0 0-.601-.595ZM9.069 11.9A2.832 2.832 0 1 1 11.9 9.064 2.836 2.836 0 0 1 9.069 11.9"></path>
            </svg>
          </a>
          <a
            href="https://www.pinterest.com/renderforest/"
            className="styles_social-item__nBvLO"
            target="_blank"
            rel="noopener nofollow"
            aria-label="Pinterest"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14.728 18.127"
              width="19"
              height="19"
            >
              <path d="M7.61 0C2.642 0 0 3.184 0 6.655c0 1.61.9 3.618 2.34 4.254.219.1.338.057.386-.146.043-.154.232-.9.324-1.246a.32.32 0 0 0-.077-.317 4.13 4.13 0 0 1-.858-2.5 4.883 4.883 0 0 1 5.2-4.772c2.832 0 4.814 1.84 4.814 4.472 0 2.974-1.574 5.032-3.619 5.032A1.62 1.62 0 0 1 6.8 9.441a21.5 21.5 0 0 0 .956-3.66 1.406 1.406 0 0 0-1.451-1.546c-1.152 0-2.087 1.141-2.087 2.673a3.8 3.8 0 0 0 .344 1.63S3.423 13.143 3.211 14a12.2 12.2 0 0 0 .084 4.016.119.119 0 0 0 .218.056 14.3 14.3 0 0 0 1.876-3.534c.14-.518.717-2.617.717-2.617a3.13 3.13 0 0 0 2.642 1.26c3.472 0 5.98-3.051 5.98-6.838C14.715 2.716 11.609 0 7.61 0"></path>
            </svg>
          </a>

          <a
            href="https://www.youtube.com/user/renderforest"
            className="styles_social-item__nBvLO"
            target="_blank"
            rel="noopener nofollow"
            aria-label="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23.653 17.031"
              width="23"
              height="19"
            >
              <path
                stroke="rgba(0,0,0,0)"
                d="M18.449 16.531H5.205A4.71 4.71 0 0 1 .5 11.825v-6.62A4.71 4.71 0 0 1 5.205.5h13.244a4.71 4.71 0 0 1 4.7 4.705v6.62a4.71 4.71 0 0 1-4.7 4.706ZM8.965 5.225a.25.25 0 0 0-.248.249v6.094a.25.25 0 0 0 .249.248.3.3 0 0 0 .107-.024l6.194-2.954a.249.249 0 0 0 .005-.447L9.078 5.252a.25.25 0 0 0-.113-.027Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/renderforest/mycompany/"
            className="styles_social-item__nBvLO"
            target="_blank"
            rel="noopener nofollow"
            aria-label="Linkedin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 19.057"
              width="20"
              height="19"
            >
              <defs>
                <clipPath id="linkedin_svg__a">
                  <path
                    fill="none"
                    d="M13.2 21.457H8.912c0-.1.057-11.659 0-12.857H13.2v1.821l-.01.015-.018.026h.028v-.041A4.24 4.24 0 0 1 17.064 8.3a4.65 4.65 0 0 1 3.526 1.408A6.24 6.24 0 0 1 22 14.083v7.372h-4.287v-6.878c0-1.327-.377-2.908-2.172-2.908a2.34 2.34 0 0 0-2.2 1.564 2.8 2.8 0 0 0-.142 1.042v7.18Zm-6.659 0H2.255V8.6h4.286v12.855ZM4.4 6.844h-.03A2.229 2.229 0 1 1 4.426 2.4 2.23 2.23 0 1 1 4.4 6.844"
                  ></path>
                </clipPath>
              </defs>
              <path
                fill="none"
                d="M11.2 19.057H6.912c0-.1.057-11.659 0-12.857H11.2v1.821l-.01.015-.018.026h.028v-.041A4.24 4.24 0 0 1 15.064 5.9a4.65 4.65 0 0 1 3.526 1.408A6.24 6.24 0 0 1 20 11.683v7.372h-4.287v-6.878c0-1.327-.377-2.908-2.172-2.908a2.34 2.34 0 0 0-2.2 1.564 2.8 2.8 0 0 0-.142 1.042v7.18Zm-6.659 0H.255V6.2h4.286v12.855ZM2.4 4.444h-.03A2.229 2.229 0 1 1 2.426 0 2.23 2.23 0 1 1 2.4 4.444"
                data-name="Mask"
              ></path>
              <g
                clip-path="url(#linkedin_svg__a)"
                data-name="Mask Group 29"
                transform="translate(-2 -2.4)"
              >
                <g data-name="Colors/Primary/Dark">
                  <path
                    d="M0 0h24v24H0z"
                    data-name="Rectangle 7 Copy 33"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </section>
      </div>
    </section>
  );
};

export default FooterSocial;
