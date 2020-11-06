import React from 'react';
import ReactDOM from 'react-dom';

const data = [
    {name: 'Lei', age:22},
    {name: 'Rei', age:20},
    {name: 'Iqfar', age:25},
    {name: 'Udin', age:21}
]

class Toggle extends React.Component {

    constructor(props) {
  super(props);
  this.state = {
      value: true,
      increment: 0,
    };
  }
  handleClick() {
    this.setState({value: !this.state.value})
  }

  

  render() {
    return (
    <div>
      <button className="square" onClick={() => this.handleClick()}>
      {this.state.value === true ? "On":"Off"}
      </button>
    <p></p>
    <h5>button count: {this.state.increment}</h5>
    <p></p>
    <button className="square" onClick={() => this.setState({increment: this.state.increment+1})}>
    INCREASE
    </button>
    <p></p>
    
    <div>
    <h2>Data Students</h2>
    <ul>
    {/* const listItems = numbers.map((number) =>
    <li>{number}</li>
    ); */}
        {data.map((item)=>
        <li>
            <span>{item.name} </span>
            <span>{item.age}</span>
        </li>
        )}
    </ul>
    </div>  

    </div>
    
    );
  }
}



  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );

export default Toggle