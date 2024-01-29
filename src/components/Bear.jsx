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
    const decresePopulation = useBearStore((state) => state.decresePopulation);
    const removeBears = useBearStore(state => state.removeBears);

    return (
        <div className='m-2'>
            <h1>Bear Componant</h1>
            <h2 className='font-bold text-xl m-2'>Totla Bears : {bears}</h2>
            <button className='bg-green-600 m-2' onClick={increasePopulation}>Bear Up</button> 
            <button className='bg-blue-600 m-2' onClick={decresePopulation}>Bear Down</button> <br />
            <button className='bg-red-600 m-2' onClick={removeBears}>Bear Remove</button>
        </div>
    )
}

export default Bear