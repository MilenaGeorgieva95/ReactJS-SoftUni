## 3 Component Lifecycle phases

- Mounting - first rendering in the DOM
- Updating
- Unmounting - remove from DOM, can be mounted again later

## Effect Hook - useEffect

- depends on component lifecucle phases, can be attached to specific update
- in function components
- examples are data fetching, subscribe, manually change the DOM. They are called side effects

* useEffect(side effect function, dependency array)
