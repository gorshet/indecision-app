class Indecision extends React.Component{
    constructor(props){
        super(props);
        handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
    };
    }
    render(){
        
        const title = 'indecision';
        const subtitle = 'Put your life in the hands of a computer';
        
    
        return(
            <div>
             <Header title={title} subtitle={subtitle}/>
             <Actions hasOptions={this.state.options.length > 0} />
             <Options options={this.state.options}/>
             <AddOptions />
             </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Actions extends React.Component{
    handlePick(){
        alert('handlePick');
    }
    render(){
        return(
            <div>
            <button 
             onClick={this.handlePick}
             disabled={!this.props.hasOptions}
             >
             What should i do?
             </button>
            </div>
        );
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleDeleteOptions(){
        this.setState(() =>{
            return{
                options : []
            }
        });
    }
    render(){
        return(
            <div>
            <button 
            onClick={this.props.handleDeleteOptions}>
            Remove All
            </button>
              {
                this.props.options.map((option) => <Option key={option} optionText={option} />)
              }
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
            {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component{
    handleAddOption(e){
        e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
        alert(option);
    }
    }
    render(){
        return(
            <div>
             <form onSubmit={this.handleAddOption}>
             <input type='text' name='option'/>
             <button>Add option</button>
             </form>
            </div>
        );
    }
}



ReactDOM.render(<Indecision />, document.getElementById('app'));

