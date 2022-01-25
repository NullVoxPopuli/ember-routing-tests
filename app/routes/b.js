import Route from '@ember/routing/route';

export default class BRoute extends Route {
  async beforeModel() {
    console.log('beforeModel', 'b');
  }

  async model() {
    console.log('model', 'b');
  }

  async afterModel() {
    console.log('afterModel', 'b');
  }
}
