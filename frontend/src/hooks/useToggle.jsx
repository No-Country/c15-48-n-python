import React, { useCallback, useState } from 'react'


export function useToggle(initialState = false) {
    const [state, setState] = useState(initialState);
    const toggleState = useCallback(() => setState((state) => !state), [state]);
  
    return [state, toggleState];
}
