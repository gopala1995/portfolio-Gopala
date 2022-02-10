import React from "react";
import "./portfolio.module.css";
//import stock
import stock from "../img/1.jpg";
import stock1 from "../img/5.jpg";
import stock2 from "../img/2.jpg";
import stock3 from "../img/3.jpg";
import stock4 from "../img/4.jpg";
import stock5 from "../img/5.jpg";
import stocka from "../img/img1.jpg";
import stockb from "../img/img2.jpg";
import stockc from "../img/img3.jpg";
import stockd from "../img/img4.jpg";
import stocke from "../img/img5.jpg";
import stockf from "../img/img6.jpg";
import stockg from "../img/homePage.jpg";
import stockh from "../img/login.jpg";
import stocki from "../img/product.jpg";
import stockj from "../img/cart.jpg";
import stockk from "../img/ico.png";
import stockl from "../img/net.png";
import myImage from "../img/icons8-github.svg";
import myImg from "../img/icons8-heroku.svg";
function Portfolio() {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container" style={{ width: "100%" }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Projects</h3>
              <p className="subtitle-a">
                Some of the best work that i have done till date are below.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            width: "100%",
            display: "flex",
          }}
        >
          <div className="col-md-4 card">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-vmarine">
                <div className="work-img">
                  <img
                    src={stock}
                    alt=""
                    className="img-fluid"
                    style={{ height: "250px" }}
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">IndiaMart clone</h2>
                      <div className="w-more">
                        <p className="w-text">
                          An Ecommerce website where buyers can contact
                          suppliers directly
                        </p>
                        <span className="w-ctegory">html,css,javascript</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stock1}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock2}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock3}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock4}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock5}
                data-lightbox="gallery-vmarine"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "-15px",
              }}
            >
              <a
                href="https://github.com/gopala1995/Indiamart.com_Project.git"
                target="_blank"
              >
                <img
                  style={{
                    height: "30px",
                    marginLeft: "20px",
                    marginLeft: "45%",
                    marginTop: "-10px",
                  }}
                  src={myImage}
                  alt="hit"
                />
              </a>
              <a href="https://indiamart-vigi.netlify.app/" target="_blank">
                <img
                  style={{
                    height: "30px",
                    marginLeft: "20px",
                    marginLeft: "45%",
                    marginTop: "-10px",
                  }}
                  src={stockl}
                  alt="hit"
                />
              </a>
            </div>
          </div>
          <div className="col-md-4 card">
            <div className="work-box">
              <a href={stocka} data-lightbox="gallery-aguadeluz">
                <div className="work-img">
                  <img
                    src={stocka}
                    alt=""
                    className="img-fluid"
                    style={{ height: "230px" }}
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">MedPlus.com Clone</h2>

                      <div className="w-more">
                        <p className="w-text">
                          A clone of medical website where user can
                          buy all type of medical realted things.
                        </p>
                        <span className="w-ctegory">
                          HTML5 CSS3 Express NodeJs
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stockb}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stockc}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stockd}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stocke}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stockf}
                data-lightbox="gallery-aguadeluz"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "-15px",
              }}
            >
              <a
                href="https://github.com/gopala1995/Medplus.git"
                target="_blank"
              >
                <img
                  style={{
                    height: "30px",
                    marginLeft: "20px",
                    marginLeft: "45%",
                    marginTop: "-10px",
                  }}
                  src={myImage}
                  alt="hit"
                />
              </a>
              <a
                href="https://medplus-elated-bhaskara.netlify.app/"
                target="_blank"
              >
                <img
                  style={{
                    height: "30px",
                    marginLeft: "20px",
                    marginLeft: "45%",
                    marginTop: "-10px",
                  }}
                  src={myImg}
                  alt="hit"
                />
              </a>
            </div>
          </div>
          <div className="col-md-4 card">
            <div className="work-box">
              <a href={stockg} data-lightbox="gallery-todo">
                <div className="work-img">
                  <img
                    src={stockg}
                    alt=""
                    className="img-fluid"
                    style={{ height: "250px" }}
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">FlipKart.com Clone</h2>
                      <div className="w-more">
                        <p className="w-text">
                        A clone of very famous E-commerce website where user can
                          buy Online many .
                        </p>
                        <span className="w-ctegory">
                          HTML5 CSS3 EJs Express Node.js
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stockh}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stockh}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stocki}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stockj}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              {/* <a
                href={stock5}
                data-lightbox="gallery-todo"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a> */}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "-20px",
              }}
            >
              <a
                href="https://github.com/gopala1995/Flipkart_backend_projrct.git"
                target="_blank"
              >
                <img
                  style={{
                    height: "30px",
                    marginLeft: "20px",
                    marginLeft: "45%",
                  }}
                  src={myImage}
                  alt="hit"
                />
              </a>
              <a
                href="https://copyflipcart.netlify.app/"
                target="_blank"
              >
                <img
                  style={{
                    height: "30px",
                    marginLeft: "20px",
                    marginLeft: "45%",
                  }}
                  src={stockk}
                  alt="hit"
                />
              </a>
            </div>
          </div>
          {/* <div className="col-md-4 card">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-medlingos">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Bootstrap ReactJS GoogleAPI
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stock1}
                data-lightbox="gallery-medlingos"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock2}
                data-lightbox="gallery-medlingos"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock3}
                data-lightbox="gallery-medlingos"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock4}
                data-lightbox="gallery-medlingos"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock5}
                data-lightbox="gallery-medlingos"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>
          <div className="col-md-4 card">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-smth">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">MERN</span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stock1}
                data-lightbox="gallery-smth"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock2}
                data-lightbox="gallery-smth"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock3}
                data-lightbox="gallery-smth"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock4}
                data-lightbox="gallery-smth"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock5}
                data-lightbox="gallery-smth"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>
          <div className="col-md-4 card">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Lorem Ipsum</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap MERN
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="w-like">
                        <span className="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href={stock1}
                data-lightbox="gallery-mf"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock2}
                data-lightbox="gallery-mf"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock3}
                data-lightbox="gallery-mf"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock4}
                data-lightbox="gallery-mf"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
              <a
                href={stock5}
                data-lightbox="gallery-mf"
                style={{ display: "none" }}
              >
                jsx-a11y/anchor-has-content warning
              </a>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
