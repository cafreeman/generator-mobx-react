import React from 'react';
import { observer } from 'mobx-react';
import MyComponent from './MyComponent';

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }
  render() {
    return (
      <div>
        <h2>Hello { this.store.name }</h2>
        <MyComponent store={this.store} />
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object,
};

export default App;
