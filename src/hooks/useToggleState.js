import { useState } from 'react';
export default initialVal => {
    const [state, setState] = useState(initialVal);

    const toggle = (e) => {
        setState(!state);
    }

    return [state, toggle];
}