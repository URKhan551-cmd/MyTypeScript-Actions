// here we will handle the same API response by help of fetch request

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);

        }
        const data: Todo = await response.json();
        return data

    } catch (error: unknown) {
        // NETWORK ERROR FETCh throw typeerror
        if (error instanceof TypeError) {
            console.log('Network Error: Failed to fetch')
        }  // custom HTTP ERROR
        else if (error instanceof Error) {
            console.log("Error", error.message);
        }
      throw error
    }
}