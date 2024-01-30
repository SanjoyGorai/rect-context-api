import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';
import { useGetPokemonByNameQuery } from '../services/pokemon';

const Example = () => {

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

    function handleClick(e) {
        switch (e.target.id) {
            case 'inc': {
                dispatch(increment());
            }
                break;
            case 'dec': {
                dispatch(decrement())
            }
                break;
        }
    }

    return (
        <div className='bg-amber-200 w-full h-full border-y-4' >
            <h2 className='font-bold'> Value : Increment/Decrement {count} </h2>
            <h1 className='text-blue-800 p-5'>Example Componant fro Redux Toolkit</h1>
            <button onClick={handleClick} id='inc' className='m-2 bg-green-600'>Inc </button>
            <button onClick={handleClick} id='dec' className='m-2 bg-orange-600'>Dec </button>

            <div>
                {
                    error ? (
                        <>Oh no there was an error</>
                    ) : isLoading ? (
                        <>Loading</>
                    ) : data ? (
                        <>
                            <h3>{data.species.name} </h3>
                            <><img src={data.sprites.front_shiny} alt="shiny" /></>
                        </>
                    ) : null
                }
            </div>

        </div>
    )
}

export default Example