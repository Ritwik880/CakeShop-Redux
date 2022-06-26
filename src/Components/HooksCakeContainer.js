import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { buyCake } from '../redux';
const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch()
    return (
        <>
            <h2>Num of cakes -
                {
                    numOfCakes
                }
            </h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </>
    )
}

export default HooksCakeContainer