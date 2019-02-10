import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCandy } from "../reducers";
import { Link } from "react-router-dom";

export class Candy extends Component {
  constructor() {
    super();
  }
  //the reason why you call the componentDidMount here I need all the candy information.
  componentDidMount() {
    this.props.getAllCandy();
  }
  render() {
    return (
      <div>
        <main>
          <h1>All The Candies</h1>
          {this.props.allCandy.map(candy => (
            <div key={candy.id}>
              <h2>{candy.name} </h2>
              <p>{candy.description}</p>
              <ul>Quantity: {candy.quantity}</ul>
              <Link to={`/candies/${candy.id}`}>
                <img src={candy.imageUrl} />
              </Link>
            </div>
          ))}
        </main>
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
