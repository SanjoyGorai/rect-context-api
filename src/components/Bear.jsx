import React from 'react'
import useBearStore from '../zustand/zustandStore'

const Bear = () => {

    function BearCounter() {
        const bears = useBearStore((state) => state.bears);
        return <h2>{bears} around here ...</h2>
    }
    function Controls() {
        const increasePopulation = useBearStore((state) => state.increasePopulation);
        return <button onClick={increasePopulation}>one up</button>
    }
    const bears = useBearStore((state) => state.bears);
    const increasePopulation = useBearStore((state) => state.increasePopulation);

    return (
        <div>
            <h1>Bear Componant</h1>
            <h2>{bears}</h2>
            <button className='bg-blue-600' onClick={increasePopulation}>Bear</button>
        </div>
    )
}

export default Bear