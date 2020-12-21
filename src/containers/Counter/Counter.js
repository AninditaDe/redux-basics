import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreator from "../../Store/action/actions";
class Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoredResult(this.props.ctr)}>
          Store Result
        </button>

        <ul>
          {this.props.strResults.length > 0 &&
            this.props.strResults.map((res) => (
              <li
                key={res.id}
                onClick={() => this.props.onDeleteResult(res.id)}
              >
                Counter Result: {res.value}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    strResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionCreator.increment() }),
    onDecrementCounter: () => dispatch({ type: actionCreator.decrement() }),
    onAddCounter: () => dispatch({ type: actionCreator.add(5) }),
    onSubtractCounter: () => dispatch({ type: actionCreator.subtract(5) }),
    onStoredResult: (res) => dispatch({ type: actionCreator.storeResult(res) }),
    onDeleteResult: (id) => dispatch({ type: actionCreator.deleteResult(id) }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
