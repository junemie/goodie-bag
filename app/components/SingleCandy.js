import React, { Component } from "react";
import { connect } from "react-redux";
import { gotSingleCandy, addCandy, removeCandy } from "../reducers";

export class SingleCandy extends Component {
  constructor() {
    super();
    this.increaseHandler = this.increaseHandler.bind(this);
    this.decreaseHandler = this.decreaseHandler.bind(this);
  }

  componentDidMount() {
    this.props.gotSingleCandy(this.props.match.params.id);
  }
  increaseHandler() {
    let currentQty = this.props.singleCandy.quantity;
    let id = this.props.match.params.id;
    this.props.addCandy(currentQty, id);
  }
  decreaseHandler() {
    let currentQty = this.props.singleCandy.quantity;
    let id = this.props.match.params.id;
    this.props.removeCandy(currentQty, id);
  }

  render() {
    console.log("this is props", this.props);
    const candy = this.props.singleCandy;
    return (
      <div>
        <main>
          <h1>{candy.name}</h1>
          <img src={candy.imageUrl} />
          <p>{candy.description}</p>
          <ul>Quantity: {candy.quantity}</ul>
          <button onClick={this.increaseHandler}>increase</button>
          <button onClick={this.decreaseHandler}>decrease</button>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { singleCandy: state.singleCandy };
};

const mapDispatchToProps = dispatch => {
  return {
    gotSingleCandy: id => {
      dispatch(gotSingleCandy(id));
    },
    addCandy: (currentQty, id) => {
      dispatch(addCandy(currentQty, id));
    },
    removeCandy: (currentQty, id) => {
      dispatch(removeCandy(currentQty, id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
