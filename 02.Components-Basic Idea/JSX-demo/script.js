const rootDomElement = document.getElementById("root");

const rootReactElement = ReactDOM.createRoot(rootDomElement);

const headerReact = React.createElement("h1", null, "React Components");

// rootReactElement.render(headerReact);

//! Functional Component is function which returns React Element
//!props are arguments in Function Component

function Header() {
  const headerReact1 = React.createElement("h1", null, "React Components");
  const subheader = React.createElement("h2",{ className: "sub-header" },"Subheader Lorem");

  //   const reactFragment = React.createElement(React.Fragment, {}, headerReact1, subheader);
  //   return reactFragment;

  const divContainer = React.createElement("div", {}, headerReact1, subheader);
  return divContainer;
}

rootReactElement.render(React.createElement(Header));

//? Object component is class extending class React.Component and has method render and this.props.name

//! React element is object representing dom element
