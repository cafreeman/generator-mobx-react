import { observable, computed } from 'mobx';

class Store {
  name: string = '<%= name %>';
  description: string = '<%= description %>';
  @observable numClicks: number = 0;

  @computed get oddOrEven(): string {
    return this.numClicks % 2 === 0 ? 'even' : 'odd';
  }

  clickButton(): void {
    this.numClicks++;
  }
}

export { Store };
