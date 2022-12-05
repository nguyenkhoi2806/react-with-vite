import { HashRouter } from 'react-router-dom';

import AppRoute from '@/route';

const App = () => {
  return (
    <HashRouter>
      <AppRoute />
    </HashRouter>
  );
};

export default App;
