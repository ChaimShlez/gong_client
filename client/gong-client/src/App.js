import * as React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import { ActivitiesProvider } from './components/main/Activities/ActivitiesProvider';  

function App() {
  return (
    <div className="App">
      <ActivitiesProvider>
        <Layout />
      </ActivitiesProvider>
    </div>
  );
}

export default App;
