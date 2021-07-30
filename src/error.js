import React, { PureComponent } from "react";

class Error extends PureComponent {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    //log error
    console.log(error, info);
  }

  retry = () => {
    console.log("retry");
  };

  render = () => {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <>
          <h1>something went wrong... Please try after sometime</h1>
          <button type="button" onClick={this.retry}>
            Retry
          </button>
        </>
      );
    }
    return this.props.children;
  };
}

export default Error;
