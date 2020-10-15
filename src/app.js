console.log("App.js is running");

const info = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options : ["One, 'Two"]
};

let template = (
<div>
    <h1>{info.title}</h1> 
   {info.subtitle && <p>{info.subtitle}</p>}
   <p>{info.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>);

const user = {
   name : 'Jorge Montes',
   age: 35,
   location: "Madrid"
};

function getLocation (location) {
    if (location){
        return <p>location: {location}</p>;
    } 
}

const template2 = (
<div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age : {user.age}</p>}
    {getLocation(user.location)}
</div>   
)
  
const appRoot = document.getElementById('app'); 

ReactDOM.render(template,appRoot);