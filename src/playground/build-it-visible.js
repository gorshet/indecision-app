const appRoot = document.getElementById('app');

let visibility = false;

const showDetails = () =>{
    visibility = !visibility;
    render();
};

const render = () =>{
let visible = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={showDetails}>
    {visibility ? 'Hide details' : 'Show details'}
    </button>
    {visibility && (
        <div>
        <p>If you are seeing this, you are on the right track!!!</p>
        </div>
    )}
    </div>
);
    ReactDOM.render(visible, appRoot);
};

render();