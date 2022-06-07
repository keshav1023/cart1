import React from 'react';

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      price: 999,
      title: 'Mobile Phone',
      qty: 1,
      img: ''
    }
  }
  render () {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
            <img alt="decrease" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/2740/premium/2740679.png?token=exp=1654580313~hmac=7913ae789def5dcc3430acfb6e57c363" />
            <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/2907/premium/2907762.png?token=exp=1654580501~hmac=0a13c1544232092151068be444b4a8c8" />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;