const React = require('react');

const Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container">
                    <h5>
                        Search the archives of <a href="https://nytimes.com/">The New York Times</a>!
                    </h5>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;