import React, { PureComponent } from "react";
import shallowCompare from "react-addons-shallow-compare";

class Test1 extends PureComponent {
  mousemove = () => {
    console.log("mousemove");
  };

  state = {
    count: 1,
  };

  componentDidMount() {
    document.addEventListener("mousemove", this.mousemove);

    // const header = document.getElementById('header');

    // header.addEventListener('mousemove', this.mousemove);

    this.interval = setInterval(() => {
      this.setState(({ count }) => ({ count: count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.mousemove);
    clearInterval(this.interval);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //       console.log('this.props', this.props)
  //       console.log('nextProps', nextProps )
  //     return shallowCompare(this,nextProps, nextState);
  //   }

  render = () => {
    console.log("Test1 component");
    const { count } = this.state;
    if(count > 5) {
        throw new Error('Something went wrong...')
    }
    return (
      <>
        <h1>{this.props.user.name}</h1>
        <h2>{count}</h2>
      </>
    );
  };
}

export default Test1;
