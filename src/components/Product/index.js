import React from 'react';
import "./_product.scss";
import product1 from "../../assets/img/shop/shop-1.jpg";
import product2 from "../../assets/img/shop/shop-2.jpg";
import product3 from "../../assets/img/shop/shop-3.jpg";
import product4 from "../../assets/img/shop/shop-4.jpg";
import product5 from "../../assets/img/shop/shop-5.jpg";

const products = [product1,product2,product3,product4,product5]

const Product = () => (
    <div className="row">
        {products.map((item, index) => (


            <div className="col-lg-4 col-md-6">
                <div className="product__item">
                    <div className="product__item__pic">
                        <img className="product__item__pic" src={item} />
                        <ul className="product__hover">
                            <li>
                                <a href={item}>
                                    <span className="fa fa-arrows-alt" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>
                            <a href="#">Furry Hooded</a>
                        </h6>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </div>
                        <div className="product__price">$590.0</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
)

export default Product;