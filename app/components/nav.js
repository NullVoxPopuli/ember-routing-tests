import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class Nav extends Component {
  @service router;

  handleAnchorClick = (event) => {
    event.preventDefault();

    console.log(`--- preventing default so we don't cause native navigation`);

    // The router service only works for in-app links
    // and the href may contain our own origin
    let { href } = event.target;
    let target = href.replace(location.origin, '');

    try {
      this.router.transitionTo(target);
    } catch (e) {
      console.log(`The router service could not navigate to ${target}`);

      console.error(e);
    }
  };
}
