import React, { memo } from 'react';


const Test2 = () => {
    console.log('Test2 component')
    return <h1>Test2 Component</h1>
}

export default memo(Test2);


// mouting

// 1. constructor
// 2. getDerivedStateFromProps
// 3. render
// 4. componentDidMount

// updating

// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate
// 3. render
// 4. getSanpshotBeforeUpdate
// 5. componentDidUpdate

// unmounting
// 1. componentWillUnmount

// errors
// 1. getDerivedStateFromError
// 2. componentDidCatch