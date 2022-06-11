import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 24999,
          title: 'Jordan 4 Retro Union Guava Ice',
          qty: 1,
          img: 'https://sneakerscop.co.in/wp-content/uploads/2022/01/Nike-SB-x-Air-Jordan-1-Low-UNC-CJ7891-401-On-Sale-510x680.jpg',
          id: 1
        },
        {
          price: 7999,
          title: 'Melting Sadness x adidas Superstar Joy Blue/Glow Pink/Craft Blue',
          qty: 10,
          img: 'https://sneakerscop.co.in/wp-content/uploads/2022/01/Melting-Sadness-x-adidas-Superstar-Joy-Blue-Glow-Pink-Craft-Blue-3-510x680.jpg',
          id: 2
        },
        {
          price: 8999,
          title: 'LSupreme x Nike Air Force 1 07 Kobe Linen University Bluep',
          qty: 4,
          img: 'https://sneakerscop.co.in/wp-content/uploads/2022/01/Supreme-x-Nike-Air-Force-1-07-Kobe-Linen-University-Blue-2-510x680.jpg'
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;