import { observable, computed } from 'mobx';

class Store {
  name = '<%= name %>';
  description = '<%= description %>';
  @observable numClicks = 0;

  @computed get oddOrEven() {
    return this.numClicks % 2 === 0 ? 'even' : 'odd';
  }

  clickButton() {
    this.numClicks++;
  }
}

export default Store;
