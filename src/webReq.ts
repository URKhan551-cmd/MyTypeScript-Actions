import axios, { isAxiosError } from "axios"
import type { AxiosResponse } from "axios";
// this is explicit definition of type of axios to use type import or functionality import


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
} 

// const fetchData = async (todo: Todo) possible
// const fetchData = async(url: string) possible
//  axios are generics 
const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log("TODO", response.data)
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.log("Axios Error", error.message);
            if (error.response) {
                console.log(error.response.status)
            }
        }

       
    }
}




// PRODUCTION READY CODE FOR API HANDLING

// interface Todo {
//   userId: number
//   id: number
//   title: string
//   completed: boolean
// }

// const getTodo = async (): Promise<Todo> => {
//   try {
//     const response = await axios.get<Todo>(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     )

//     return response.data
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.log("Axios Error", error.message)

//       if (error.response) {
//         console.log(error.response.status)
//       }
//     }

//     throw error
//   }
// }

// PROPER NETWORK EROR HANDLING
// try {
//   const response = await axios.get<Todo>(url)
//   return response.data

// } catch (error: unknown) {

//   if (axios.isAxiosError(error)) {

//     // 🔴 1. Server responded (HTTP error)
//     if (error.response) {
//       console.log("Status Error:", error.response.status)
//     }

//     // 🔴 2. Network error (NO response)
//     else if (error.request) {
//       console.log("Network Error: No response received")
//     }

//     // 🔴 3. Something else
//     else {
//       console.log("Axios Config Error:", error.message)
//     }

//   } else {
//     console.log("Unknown Error:", error)
//   }

//   throw error
// }


// this is a simple example of how to use axios to fetch data from an api
// axios.get("https://example.com/data")
//     .then(response => {
//         console.log(response.data);
//     })

// there is some error has shown after installing a library
// there is a chance of getting error after installing any library
// npm i someLibarary
// npm i -D @types/someLibrary    can fix this error because it will intall types according to that library
    
// if both the ways did not work then go to the libarray repo and see there will be some files where type Decleration present
//  someLibarary.d.ts     create file put the paste clipborad inside of that file. the paste clipboard shold be the library defined repo. about type decleration



// {
//     "userId": 1,
//         "id": 1,
//         "title": "delectus at autumk",
//                 "completed": false
// }





// CLEAN ARCHITECTURE OF HANDLING WEB REQUEST
const handleErrorFunction = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        
        if (error.response) {
            return `Server Error ${error.response.status}`
        }  
        if (error.request) {
            // return `Network ERROR no response from server....` 
            alert("NO Internet Connection .. please Try Again...");
        }
        return `Axios Error ${error.message}`
    }
    return "unknown error occured"
}
const ApiHandle = async() => {
    try {
       const res =  await axios.get<Todo>("https://hajhhjaf.com/data");
       return res.data
        
       } catch (error) {
        console.log(handleErrorFunction(error));
       }
}