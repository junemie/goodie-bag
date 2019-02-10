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
    this.props.addCandy(
      this.props.singleCandy.quantity,
      this.props.match.params.id
    );
  }
  decreaseHandler() {
    this.props.removeCandy(
      this.props.singleCandy.quantity,
      this.props.match.params.id
    );
  }

  render() {
    const candy = this.props.singleCandy;
    return (
      <div>
        <main>
          <h2>{candy.name}</h2>
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
