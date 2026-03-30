import { useState, useEffect } from "react";


interface FetchState<T>{
    data: T | null;
    loading: boolean;
    error: string | null
}

export function useFetch<T>(url: string): FetchState<T>{
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    // how to design useEffect to make a fetch request

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchData() {
            try {
                setState((prev) => ({ ...prev, loading: true, error: null }));

                const response = await fetch(url, { signal });
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                   
                }
                     const data: T = await response.json();
                    setState({ data, loading: false, error: null });
                
                 
            } catch (error: unknown) {
                if (error instanceof DOMException && error.name === "AbortError") return;

                if (error instanceof Error) {
                    setState({ data: null, loading: false, error: error.message || "something went wrong" })
                };
            }
        }
        fetchData();

    
        return () => {
            controller.abort();
        }

    }, [url])
    return state

}

// use case how to use this hook 
//   const {data, loading, error} = useFetch<user[]>(url: string )
