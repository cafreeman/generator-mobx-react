import { observable, computed, action } from 'mobx';

class Store {
  name = '<%= name %>';
  description = '<%= description %>';
  @observable numClicks = 0;

  @computed get oddOrEven() {
    return this.numClicks % 2 === 0 ? 'even' : 'odd';
  }

  @action clickButton() {
    this.numClicks++;
  }
}

export default Store;
