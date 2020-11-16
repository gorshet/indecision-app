class Indecision extends React.Component{
    render(){
        
        const title = 'indecision';
        const subtitle = 'Put your life in the hands of a computer'
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
    render(){
        return(
            <div>
            <button>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
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
    render(){
        return(
            <div>
               AddOptions component here
            </div>
        );
    }
}



ReactDOM.render(<Indecision />, document.getElementById('app'));