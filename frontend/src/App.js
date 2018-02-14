import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Root from 'containers/Root';
import { Provider } from 'react-redux';

const App = ({store}) => {
      return (
            <Provider store={store}>
                  <BrowserRouter>
                        <Route path="/" component={Root}/>
                  </BrowserRouter>
            </Provider>
      );
};

export default App;