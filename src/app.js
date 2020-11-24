class Indecision extends React.Component{
    render(){
        
        const title = 'indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['thing one', 'thing two', 'thing four'];
    
        return(
            <div>
             <Header title={title} subtitle={subtitle}/>
             <Actions />
             <Options options={options}/>
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
            <button onClick={this.handlePick}>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    handleRemoveAll(){
        alert('handleRemoveAll');
    }
    render(){
        return(
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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