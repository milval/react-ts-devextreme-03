import { withNavigationWatcher } from './contexts/navigation';
import { 
  HomePage, DisplayDataPage, ProfilePage, 
  BillingProcessList 
} from './pages';

const routes = [
  {
    path: '/billing-process-list',
    component: BillingProcessList
  },
  {
    path: '/display-data',
    component: DisplayDataPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  }];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
