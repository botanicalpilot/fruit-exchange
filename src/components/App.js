import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import ExchangeCreate from './exchanges/ExchangeCreate';
import ExchangeDelete from './exchanges/ExchangeDelete';
import ExchangeEdit from './exchanges/ExchangeEdit';
import ExchangeList from './exchanges/ExchangeList';
import ExchangeShow from './exchanges/ExchangeShow';



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={ExchangeList} />
                    <Route path="/exchanges/new" exact component={ExchangeCreate} />
                    <Route path="/exchanges/delete" exact component={ExchangeDelete} />
                    <Route path="/exchanges/edit" exact component={ExchangeEdit} />
                    <Route path="/exchanges/show" exact component={ExchangeShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;