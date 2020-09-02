import React, { lazy, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Route from './Route';

const Loader = lazy(() => import('src/components/Loader'));
const Home = lazy(() => import('src/pages/Home'));

const Router: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route path="/" exact component={Home} title="Cubic-Bezier Generator" />
      <Redirect from="*" to="/" />
    </Switch>
  </Suspense>
);
export default Router;
