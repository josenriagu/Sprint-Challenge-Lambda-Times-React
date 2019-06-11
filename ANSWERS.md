- [x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

  `PropTypes` is a react tool `for checking the type` of prop being passed down the component tree. Props are necessary to pass any value to a child component. They act as the component's interface to get data passed down the component tree. Hence without type checking (using PropTypes or some other tool), developers risk passing the wrong data types to components.

- [x] Describe a life-cycle event in React?

  `Life-cycle events` are methods we are able to use on React components ( which can be defined as classes or functions)
  These methods can be called during the lifecycle of a component, and they allow us to update the UI and application states. The three phases of the component lifecycle are `Mounting` (which uses `consctructor, render, componentDidMount events`), `Updating` (which uses the `render and componentDidUpdate events`), and `Unmounting` (which uses the `componentWillUnmount events`)

- [x] Explain the details of a Higher Order Component?

  A higher-order component (HOC) is a function that takes a component and returns a new component. It is an outcome of React's compositional nature and is an advanced technique in React for reusing component logic. Basically, while a component transforms props into UI, a higher-order component transforms a component into another component.

- [x] What are three different ways to style components in React? Explain some of the benefits of each.

  React components can be styled using:

  1. `Externally defined vanilla CSS:` This offers the ability to reuse CSS classes around the whole project and is relatively easier for newbies. However, It does not offer the flexibility of Preprocessors and may make things messy with more components.
  2. `CSS Preprocessors (such as LESS):` This offers the flexibility of nexting CSS classes, using mixins and parametric mixins and defining variables while it precompiles under the hood into CSS. It presents so many sweet syntaxes.
  3. `Styled Components:` This advanced method will be loved by Professionals who are now comfortable with getting their hands dirty with code. It encompasses all the positive attributes of the two above and offers a chance to have components classes inherit and extend styles and props. They also prevent spilling of CSS classes among components.
