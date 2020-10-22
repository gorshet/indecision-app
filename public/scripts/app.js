'use strict';

var appRoot = document.getElementById('app');

var visibility = false;

var showDetails = function showDetails() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var visible = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: showDetails },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'If you are seeing this, you are on the right track!!!'
            )
        )
    );
    ReactDOM.render(visible, appRoot);
};

render();
