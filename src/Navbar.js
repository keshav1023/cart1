import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <h1 style={styles.cartTitle}>SneakersFreaks</h1>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/128/665/premium/665865.png?token=exp=1654784395~hmac=07bb92ff6cb95b657c871ea5aeddfc10" alt="cart-icon" />
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartTitle: {
    position: 'centre',
    marginRight: 500,
    background: 'green'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};


export default Navbar;