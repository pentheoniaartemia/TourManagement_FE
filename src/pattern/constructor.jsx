class Person extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: props.name,
        age: props.age
      };
    }
  
    render() {
      return (
        <div>
          <h2>{this.state.name}</h2>
          <p>Age: {this.state.age}</p>
        </div>
      );
    }
  }
  
  // Sử dụng thành phần Person trong ứng dụng React
  ReactDOM.render(
    <Person name="John" age={25} />
  );

export default Person; 