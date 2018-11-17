/**
 *
 * Asynchronously loads the component for SideNav
 *
 */

 import loadable from 'loadable-components';
 export default loadable(() => import('./index'));
