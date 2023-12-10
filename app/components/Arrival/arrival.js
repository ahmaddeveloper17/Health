import React from 'react'

export default function Arrival() {
  return (
    <>
    <div>

<section className="section new__arrival" id="new__arrival">
        <div className="arrivals container">
          <div className="title">
            <h1 className="primary__title">New Medicines</h1>
          </div>
          <div className="arrival__center">
            <div className="product" style={{width:"100%"}}>
              <div className="img__container"><div style={{height:"500px"}}>
                <img src="data:image/jpeg;base64,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" alt="" />
              </div>
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Our New Medicines</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div className="product" style={{width:"100%"}}>
              <div className="img__container"><div style={{height:"500px"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxT3z_aqwwxSU__sXyNcoS30_hSzhwqYqCXw&usqp=CAU" alt="" />
              </div> </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Our New Medicines</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div className="product" style={{width:"100%"}}>
              <div className="img__container"><div style={{height:"500px"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMw6KubkfyYwLtdE1OULIlYtUX0x7VCjkVQ&usqp=CAU" alt="" />
              </div> </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Our New Medicines</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div className="product" style={{width:"100%"}}>
              <div className="img__container"><div style={{height:"500px" }}>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsXblSIGKqfc4R4gOP8en4jDjNcABsGOmmkA&usqp=CAU" alt="" />
                </div>
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Our New Medicines</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    <div style={{marginTop:"-10%"}}>
        <section className="section new__arrival" id="new__arrival">
        <div className="arrivals container">
          <div className="arrival__center">
            <div className="product"style={{width:"100%"}}>
              <div className="img__container"><div style={{height:"500px"}}>
                <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323679/laboratory-workers-such-as-pathologists.jpg" alt="" />
              </div>
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Medicines Making</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div className="product" style={{width:"100%"}}>
              <div className="img__container"><div style={{height:"500px"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2zJN5tI2b0n5x0791jSgr_iS8yyAw0CZdBNsUa-HmECveLSYvqkyS94uy56A41-1zMk&usqp=CAU" alt="" />
              </div> </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Medicines Making</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div className="product" style={{width:"100%"}}>
              <div className="img__container"><div style={{height:"500px"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2TboLA5DtfZYlzbNu5hVMkvUvO4JvX9uv7GxgNzyYnW0oNi6pB5f91GIY0w5NrmbFd7I&usqp=CAU" alt="" />
              </div> </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Medicines Making</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
            <div className="product" style={{width:"100%"}}>
              <div className="img__container" ><div style={{height:"500px"}}>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-J7CxNHkXwj9O8Z8mjL7lMhV9oPe1__5QG7-itb-3nAszthVYZgn7PLbnsty-znt_0E&usqp=CAU" alt="" />
                </div>
              </div>
              <div className="product__bottom">
                <div className="rating">
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-full" />
                    </svg>
                  </span>
                  <span>
                    <svg>
                      <use xlinkHref="./images/sprite.svg#icon-star-empty" />
                    </svg>
                  </span>
                </div>
                <h3>Medicines Making</h3>
                <a href="#">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
