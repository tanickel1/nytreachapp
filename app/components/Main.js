const React = require('react');

const Header = require('./Header');
const Footer = require('./Footer');

const Main = React.createClass({
    render: function () {
        return(
            <div>
                <Header />
                <div className="main-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>

        )
    }
});

module.exports = Main;