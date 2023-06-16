import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

    render() {

        this.props.cartUpdated();

        let total = 0;

        this.props.cart.map(item => total += item.product.price * item.quantity);

      

        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">MARITIME<span style={{color:"lightblue"}}>FOR</span>ALLE</NavLink>
                 
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="#">About</NavLink>
                    </div>
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/Contact">Contact</NavLink>
                    </div>
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="#">Help</NavLink>
                    </div>
                    </div>
              

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right" style={{marginLeft:"-5vh"}}>
                            <li><NavLink to="/my-cart">
                                {
                                    this.props.cart.length > 0 ? (
                                        <span className="label label-info">{ this.props.cart.length } items: (${total.toFixed(2)})</span>
                                    ) : null
                                }
                                <i className="glyphicon glyphicon-shopping-cart"></i> My Cart</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        cart: state.cart.cart,
        cartUpdated: () => { return true }
    }
};

export default connect(mapStateToProps)(Navbar);