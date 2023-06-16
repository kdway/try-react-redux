import React, { Component } from 'react';
import "../styles/product.css"
class Product extends Component
{
    state = {
        inCart: this.props.inCart
    };

    addToCart = (e) => {

        e.preventDefault();

        this.props.addToCart(this.props.product)

        this.setState({
            inCart: true
        })
    }

    render() {

        const { product } = this.props;

        return (
            <div className="col-md-3">
                <figure className="card card-product">
                    <div className="product-image">
                        <img className="img-responsive" src={product.image} />
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title">{product.title}</h4>
                        <p className="desc">{product.description}</p>
                    </figcaption>
                    <div className="bottom-wrap">
                    <div className="price-wrap h5">
                            <span className="price-new" style={{fontSize:"3.5vh" , color:"lightseagreen"}}>${product.price}</span>
                        </div>

                        {
                            this.state.inCart?(
                                <span className="btn btn-success">Added to cart</span>
                            ) : (
                                <a href="#" onClick={this.addToCart} className="btn btn-sm btn-primary float-right">Add to cart</a>
                            )
                        }

                       
                    </div>
                </figure>
            </div>
        )
    }
}

export default Product;