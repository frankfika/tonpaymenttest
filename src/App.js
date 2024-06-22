// src/App.js
import React from 'react';
import PaymentForm from './PaymentForm';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/payment" component={PaymentForm} />
    </Switch>
  </Router>
  );
}

export default App;
