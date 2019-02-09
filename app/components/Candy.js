import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCandy } from "../reducers";

export class Candy extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getAllCandy();
  }
  render() {
    console.log("ZERO INDEX", this.props.allCandy[0]);
    console.log(this.props.allCandy);
    return (
      <div>
        <h1>All The Candies</h1>
        {this.props.allCandy.map(candy => (
          <div key={candy.id}>
            <h2>{candy.name} </h2>
            <p>{candy.description}</p>
            <ul>Quantity: {candy.quantity}</ul>
            <img src={candy.imageUrl} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { allCandy: state.allCandy };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCandy: () => {
      dispatch(getAllCandy());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candy);
