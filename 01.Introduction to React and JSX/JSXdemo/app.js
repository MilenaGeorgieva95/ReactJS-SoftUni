console.log(React);
console.log(ReactDOM);

//Get dom container
const container =document.getElementById('root');

//Create root with ReactDOM
const reactRoot = ReactDOM.createRoot(container);

//Create react elements
const reactHeading = React.createElement('h1', {}, 'Hello from React');
const reactSubHeading = React.createElement('h2', {id: 'sub-heading'}, 'The best framework!');
const headerSection = React.createElement('header', {}, reactHeading, reactSubHeading);

//Create elements with JSX
const headerSectionJSX = (
<header>
    <h1>Hello from JSX!</h1>
    <h2 id="sub-header">The best Superset Language!</h2>
</header>
)

//Render element to UI with ReactDOM
reactRoot.render(headerSectionJSX);
