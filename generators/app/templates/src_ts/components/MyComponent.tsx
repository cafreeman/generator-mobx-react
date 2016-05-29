import * as React from 'react';
import { Store } from '../Store';
import { observer } from 'mobx-react';

function MyComponent({ store }: { store: Store }) {
  const clickButton = store.clickButton.bind(store);
  return (
    <div>
      <button type="button" onClick={clickButton}>Click me!</button>
      <h4>You've clicked the button {store.numClicks} times.</h4>
      <h5>You've clicked button an {store.oddOrEven} number of times.</h5>
    </div>
  );
}

export default observer(MyComponent);
