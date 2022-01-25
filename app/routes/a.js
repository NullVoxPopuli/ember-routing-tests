import Route from '@ember/routing/route';

export default class ARoute extends Route {
  async beforeModel() {
    console.log('beforeModel', 'a');
  }

  async model() {
    console.log('model', 'a');
  }

  async afterModel() {
    console.log('afterModel', 'a');
  }
}
