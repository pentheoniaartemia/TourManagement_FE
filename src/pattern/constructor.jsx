import React from "react";
import '../pages/BookingPage/Booking.css'

class CustomerQuantity extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        adult: props.adult,
        teen: props.teen,
        children: props.children,
        infant: props.infant
      };
    }
  
    increaseCount = (type) => {
      this.setState((prevState) => ({
        [type]: prevState[type] + 1,
      }), () => {
        this.props[`on${type.charAt(0).toUpperCase()}${type.slice(1)}Change`](this.state[type]);
      });
    };

    decreaseCount = (type) => {
      this.setState((prevState) => ({
        [type]: prevState[type] - 1 >= 0 ? prevState[type] - 1 : 0,
      }), () => {
        this.props[`on${type.charAt(0).toUpperCase()}${type.slice(1)}Change`](this.state[type]);
      });
    };
  
    render() {
      const { adult, teen, children, infant } = this.state;
  
      return (
        <div className="customer-quantity--container">
          <div className="customer-type-quantity--item">
            <p className="customer-type-name">Adult: {adult}</p>
            <button onClick={() => this.increaseCount('adult')}>Increase</button>
            <button onClick={() => this.decreaseCount('adult')}>Decrease</button>
          </div>
          <div className="customer-type-quantity--item">
            <p>Teen: {teen}</p>
            <button onClick={() => this.increaseCount('teen')}>Increase</button>
            <button onClick={() => this.decreaseCount('teen')}>Decrease</button>
          </div>
          <div className="customer-type-quantity--item">
            <p>Children: {children}</p>
            <button onClick={() => this.increaseCount('children')}>Increase</button>
            <button onClick={() => this.decreaseCount('children')}>Decrease</button>
          </div>
          <div className="customer-type-quantity--item">
            <p>Infant: {infant}</p>
            <button onClick={() => this.increaseCount('infant')}>Increase</button>
            <button onClick={() => this.decreaseCount('infant')}>Decrease</button>
          </div>
        </div>
      );
    }
}

export default CustomerQuantity; 