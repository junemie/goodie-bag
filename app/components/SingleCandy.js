import React, { Component } from "react";
import { connect } from "react-redux";
import { gotSingleCandy } from "../reducers";

export class SingleCandy extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.gotSingleCandy(this.props.match.params.id);
  }

  render() {
    const candy = this.props.singleCandy;
    return (
      <div>
        <main>
          <h1>{candy.name}</h1>
          <img src={candy.imageUrl} />
          <p>{candy.description}</p>
          <ul>Quantity: {candy.quantity}</ul>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
