import { observable, computed, action } from 'mobx';

class Store {
  name: string = '<%= name %>';
  description: string = '<%= description %>';
  @observable numClicks: number = 0;

  @computed get oddOrEven(): string {
    return this.numClicks % 2 === 0 ? 'even' : 'odd';
  }

  @action clickButton(): void {
    this.numClicks++;
  }
}

export { Store };
