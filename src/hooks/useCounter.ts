import { useState } from 'react';

function useCounter(initialValue?: number) {
	const [count, setCount] = useState(initialValue || 0);

	function increment() {
		setCount(prevCount => prevCount + 1);
	}

	function decrement() {
		setCount(prevCount => prevCount - 1);
	}

	function reset() {
		setCount(initialValue || 0);
	}

	return { count, setCount, increment, decrement, reset };
}

export default useCounter;
