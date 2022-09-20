import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { increment, decrement } from "../core/actions/action";

export default function HomePage() {
    const dispatch = useDispatch();
    const counter = useSelector(state => {
        return state.countReducer;
    });

    return (
        <main>
            <h4>Home page</h4>

            <p>Welcome to a react test shop. Please use the nav bar.</p>
            <p>Counter: { counter.count }</p>
            <p>Person name: { counter.personName }</p>
            <br />

            <button onClick={() => dispatch(increment())}>Store count increment</button>
            <br />
            <br />
            <button onClick={() => dispatch(decrement())}>Store count decrement</button>
        </main>
    )
}
