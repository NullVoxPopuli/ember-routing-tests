import EmberRouter from '@ember/routing/router';
import { registerDestructor } from '@ember/destroyable';
import { getOwner } from '@ember/application';

import config from 'ember-routing-tests/config/environment';

const logDidChange = (...args) =>
  console.log('didChange:', args[0].to.name, args);
const logWillChange = (...args) =>
  console.log('willChange:', args[0].to.name, args);

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  constructor(...args) {
    super(...args);

    let routerService = getOwner(this).lookup('service:router');
    routerService.on('routeDidChange', logDidChange);
    routerService.on('routeWillChange', logWillChange);

    registerDestructor(this, () => {
      routerService.off('routeDidChange', logDidChange);
      routerService.off('routeWillChange', logWillChange);
    });
  }
}

Router.map(function () {
  this.route('a');
  this.route('b');
});
