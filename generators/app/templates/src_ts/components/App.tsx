import * as React from 'react';
import { observer } from 'mobx-react';
import { Store } from '../Store';
import MyComponent from './MyComponent';

interface Props {
  store: Store
}

@observer
class App extends React.Component<Props, {}> {
  store = this.props.store;
  render() {
    return (
      <div>
        <h2>Welcome to the { this.store.name } project.</h2>
        <h3>This project is { this.store.description }.</h3>
        <MyComponent store={this.store} />
      </div>
    );
  }
}

export default App;
