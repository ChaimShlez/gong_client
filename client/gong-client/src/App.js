import * as React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import { GlobalProvider } from './components/main/Activities/ActivitiesProvider';  
//import { CategoriesProvider } from './components/main/Budgets/BudgetsProvider';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
     
        <Layout />
    
      </GlobalProvider>
    </div>
  );
}

export default App;
