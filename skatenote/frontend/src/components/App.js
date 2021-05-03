import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './practice/Dashboard';
import PrivateRoute from "./common/PrivateRoute";
import Home from "./home/Home";
import Trick from "./trick/Trick";
import TrickDetail from "./trick/TrickDetail";
import PracticeForm from './practice/PracticeForm';
import PracticeUpdate from './practice/PracticeUpdate'
import Session from './session/Session';
import SessionDetail from './session/SessionDetail';
import SessionForm from './session/SessionForm';
import SessionOfPractice from './session/SessionOfPractice';
import SessionEdit from './session/SessionEdit';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import { loadUser } from '../actions/auth';

import { Provider } from 'react-redux';
import store from "../store";



// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/trick" component={Trick} />
                                    <Route exact path="/trick/:trick_id" component={TrickDetail} />
                                    <PrivateRoute exact path="/practice" component={Dashboard} />
                                    <PrivateRoute exact path="/practice_add" component={PracticeForm} />
                                    <PrivateRoute exact path="/practice_update/:practice_id" component={PracticeUpdate} />
                                    <PrivateRoute exact path="/session" component={Session} />
                                    <PrivateRoute exact path="/session/:session_id" component={SessionDetail} />
                                    <PrivateRoute exact path="/session_edit/:session_id" component={SessionEdit} />
                                    <PrivateRoute exact path="/session_add/:practice_id" component={SessionForm} />
                                    <PrivateRoute exact path="/session_of_practice/:practice_id" component={SessionOfPractice} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


