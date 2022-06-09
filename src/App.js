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
          img: 'data:image/jpeg;base64,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',
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