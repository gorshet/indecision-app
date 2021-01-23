class Indecision extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
        };
    }
    handleDeleteOptions(){
        this.setState(() =>{
            return{
                options : []
            };
        });
    }

    handlePick(){
                const randomNumber = Math.floor(Math.random() * this.state.options.length);
                const option = this.state.options[randomNumber];
                alert(option);
    };
    
    handleAddOption(option){
        if (!option) {
            return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
            return 'Item already exists';
    }

        this.setState((prevState) =>{
            return{
                options: prevState.options.concat(option)
            }
        });
    };
    
    render(){
        
        const title = 'indecision';
        const subtitle = 'Put your life in the hands of a computer';
        
    
        return(
            <div>
             <Header title={title} subtitle={subtitle}/>
             <Actions 
              hasOptions={this.state.options.length > 0} 
              handlePick={this.handlePick}         
             />
             <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              />
             <AddOptions
             handleAddOption={this.handleAddOption}
             />
             </div>
        );
    }
}

const Header = (props) => {
    return(
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
    )
};


const Actions = (props) => {
    return (
    <div>
    <button 
     onClick={props.handlePick}
     disabled={!props.hasOptions}
     >
     What should i do?
     </button>
    </div>
  );
};

const Options = (props) => {
        return(
           <div>
           <button 
           onClick={props.handleDeleteOptions}>
           Remove All
           </button>
          {
            props.options.map((option) => <Option key={option} optionText={option} />)
          }
        </div>
    ); 
}  

const Option = (props) => {
        return(
           <div>
           {props.optionText}
           </div>
    );
}


class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error= this.props.handleAddOption(option);

    this.setState(() => {
    return {error};
  });
}

    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
             <form onSubmit={this.handleAddOption}>
             <input type='text' name='option'/>
             <button>Add option</button>
             </form>
            </div>
        );
    }
}


/*const User = (props) => {
    <div>
    <p>Name:{props.Name}</p>
    <p>Age:{props.age}</p>
    </div>
}
*/

ReactDOM.render(<Indecision />, document.getElementById('app'));

