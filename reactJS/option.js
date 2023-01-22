
// In React, state refers to the data or variables that determine a component's behavior and render the view. 
// State is an object that stores the data that a component needs, and it can be changed over time. When a component's state changes, the component re-renders to reflect the new state
// class component "this.state" is used
// functional class "useState" is used

// Another use case would be a simple weather application that displays the current temperature and weather condition for a given location. The state would store the current location and weather data, and when the user enters a new location, the component would update its state with the new location and fetch the new weather data.

// Conditional rendering in React refers to the process of only rendering a component or parts of a component based on a certain condition. This is done by using JavaScript control structures such as if and switch statements to determine whether or not to render a component, or by using ternary operators to conditionally render different JSX. Conditional rendering allows for a dynamic and flexible UI by showing and hiding certain components based on the state, props or other conditions.

// A use case for conditional rendering in React would be a user authentication system. Depending on whether a user is logged in or not, different components can be rendered. For example, if a user is not logged in, a login form could be rendered, and if a user is logged in, a welcome message and a logout button could be rendered.

// Composition in React is the process of building complex components by combining smaller, simpler components. It allows for better separation of concerns, making it easier to reason about and test the code, and enables code reusability and flexibility. It can be achieved by passing data to child components through props, using Higher-Order Components (HOCs), or using Render Props to share behavior between components. It helps to make code more modular and maintainable.

// A use case for composition in React would be building a navigation bar. The navigation bar can be broken down into smaller components such as a logo, a search bar, and a menu. Each of these smaller components can be built and tested separately and then composed together to create the final navigation bar component.

// =-==============================================================================
// RENDERING//
//================================================================================
// In React, rendering refers to the process of taking the component's state and props and using them to create and update the DOM. React uses a virtual DOM to efficiently update the UI, it's triggered whenever a component's state or props change. The render method is the most important method in a React component, and it's responsible for returning the JSX that will be rendered to the DOM. This process is called whenever the component's state or props change, and it should return a description of the component's UI.

// 1 / 2

// #1# component's lifecycle 

// In React, a component's lifecycle refers to the sequence of methods that are called when a component is created, updated, and destroyed. The component lifecycle is divided into three main phases:

// 1.//Mounting: This is the phase when a component is first created and inserted into the DOM. The following methods are called in this phase:

// 1.1//constructor(): This method is called before the component is mounted, and it is used to set up the initial state and props for the component.

// 1.2//componentWillMount() (deprecated): This method is called immediately before the component is mounted.

// 1.3//render(): This method is called to generate the JSX that will be rendered to the DOM.

// 1.4//componentDidMount(): This method is called immediately after the component is mounted and it's used to perform any setup that requires the component to be in the DOM.

//  2 //Updating: This is the phase when a component's state or props change, and it re-renders to reflect the new values. The following methods are called in this phase:

// 2.1 //componentWillReceiveProps() (deprecated): This method is called when the component receives new props.

// 2.2//shouldComponentUpdate(): This method is called before the component re-renders, and it can be used to optimize performance by preventing unnecessary re-renders.

// 2.3//componentWillUpdate() (deprecated): This method is called immediately before the component re-renders.

// 2.4//render(): This method is called to generate the JSX for the updated component.

//2.5//componentDidUpdate(): This method is called immediately after the component re-renders, and it can be used to perform any post-rendering actions.

// 3 //Unmounting: This is the phase when a component is removed from the DOM. The following method is called in this phase:
// 3.1 //componentWillUnmount(): This method is called immediately before the component is removed from the DOM, and it can be used to perform any cleanup tasks such as removing event listeners.
// In short, the component lifecycle in React refers to the sequence of methods that are called when a component is created,

//  #2# list and keys

// In React, a list of items can be rendered using the map() method to iterate over an array of data and return an array of JSX elements. Each item in the list should be given a unique "key" prop to help React keep track of which items have been added, removed, or changed.

// The key should be a unique identifier for each item in the list, such as the item's ID. Keys help React to optimize the performance of list updates by allowing it to quickly identify which items have changed.

// In short, when rendering lists in React, it's important to give each item a unique key prop to help React keep track of which items have been added, removed, or changed. This allows React to optimize the performance of list updates by quickly identifying which items have changed.

//  #3# Render props

// Render props in React is a way to share behavior between components. A component (container component) can pass a function to another component (presentational component) as a prop, and the presentational component can use that function to render its own content instead of having the container component dictate what should be rendered. This allows for reusability and flexibility in creating and customizing components. It is a way to share logic between components without having to use HOCs or props drilling.

//  #4# Refs

// In React, refs (references) provide a way to access and manipulate a specific DOM node or a React component instance directly. They can be created using the React.createRef() method and attached to a component using the ref attribute. Refs are useful for situations where you need to access the underlying DOM node, such as setting focus on an input field or measuring the size of an element.

//  #5# Events

// In short, events in React are actions or occurrences that happen in the browser, such as a user clicking a button. React provides a way to handle events through its event handling system, which allows you to execute a function or perform some action when a specific event occurs. Events are passed as callbacks to event handlers and are named using camelCase.

//  #6# High order Components

// In short, Higher-Order Components (HOCs) are a way to reuse component logic in React by wrapping another component and providing additional functionality to it. They are implemented as a function that takes a component as an argument and returns a new component with additional features such as authentication, data fetching, or performance optimization. HOCs allow you to share logic between components, making it more reusable and easier to maintain
