const React = require('react');

const router = require('react-router');

const Route = router.Route; 

const Router = router.Router; 

const hashHistory = router.hashHistory;

const Main = require('../components/Main');
const Search = require('../components/children/Search');
const Saved = require('../components/children/Saved');
const Panels = require('../components/children/Panels');

module.exports = (
    <Router history={hasHistory}>
        <Route path="/" component={Main}>

            <Route path="search" component={Search} />
            <Route path="saved" component={Saved} />

            <IndexRoute component={Panels} />

        </Route>
    </Router>
);