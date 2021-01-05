class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleTogleVisibility = this.handleTogleVisibility.bind(this);
        this.state ={
            visibility : false
        };
    }

    handleTogleVisibility(){
        this.setState((prevState) =>{
            return{
                visibility : !prevState.visibility
            };
        });
    }
   
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleTogleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && (
                <div>
                <p>If you are seeing this, you are on the right track!!!</p>
                </div>
            )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

/*const appRoot = document.getElementById('app');

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

render();*/