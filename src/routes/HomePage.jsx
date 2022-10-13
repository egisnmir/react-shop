import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../core/slices/counterSlice";

export default function HomePage() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    return (
        <main>
            <h4>Home page</h4>

            <p>Welcome to a react test shop.</p>
            <p>Counter: { counter.count }</p>
            <br />

            <button onClick={() => dispatch(increment({}))}>Store count increment</button>
            <br />
            <br />
            <button onClick={() => dispatch(decrement())}>Store count decrement</button>
        </main>
    )
}
