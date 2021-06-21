import './App.css';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/burgerBuilder/burgerBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
          <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
