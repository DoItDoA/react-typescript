import React, { Component } from "react";
import Number from "./Number";
import { Form, Input } from "./Input";

interface IState {
  counter: number;
  name: string;
}

// class의 state typescript 적용
class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: "",
  };

  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }

  // 이벤트 적용
  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  add = (): void => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    }); // this.setState(counter:counter+1) 적용이 안됨
  };
}
export default App;
