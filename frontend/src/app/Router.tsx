import { Route, Routes } from 'react-router-dom';
import Home  from '../pages/Home';
import About from '../pages/About';
import PostJob from '../pages/PostJob';
import ActiveJobs from '../pages/ActiveJobs';
import PostBid from '../pages/PostBid';
import JobDetail from '../pages/JobDetail';
import { RoutingConfig } from './routing-config';

export function Router() {

  return (
    <div>
        <Routes>
            <Route path={RoutingConfig.home} Component={Home} />
            <Route path={RoutingConfig.about} Component={About} />
            <Route path={RoutingConfig.postJob} Component={PostJob} />
            <Route path={RoutingConfig.activeJobs} Component={ActiveJobs} />
            <Route path={RoutingConfig.makeABid} Component={PostBid} />
            <Route path={RoutingConfig.jobDetail} Component={JobDetail} />
        </Routes>
    </div>
  );
}

export default Router;
