const defaultData = {
  name: "Ur Amorist",
  email: "blaw@gamil1.com",
  country: "Street"
}
import Input from "./Input.tsx";

export default function App(){
     function handleSubmit(e: React.FormEvent<HTMLFormElement>){
       e.preventDefault();
       const form = e.currentTarget;
    const formData = new FormData(form);
    const values = Object.entries(formData.entries());
    alert(JSON.stringify(values));
  }
     }

    return (
        <div>
            <h1>Form Handling Without States in React</h1>
           <div>
            
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 min-w-sm"
          aria-label="user form"
        >
       //   <label className="block text-sm font-medium text-gray-600">
            <span className="font-semibold mb-2 block">Name</span>
            <Input
              label="name"
              name="name"
              type="text"
              className="w-full font-light rounded-xl border-gray-300 border shadow-sm px-4 py-2"
              defaultValue={defaultData.name}
            />
          </label>

         //  <label className="block text-sm font-medium text-gray-600">
            <span className="font-semibold mb-2 block">Email</span>
            <Input
             label="email"
             name="email"
              type="email"
              className="w-full font-light rounded-xl border-gray-300 border shadow-sm px-4 py-2"
              defaultValue={defaultData.email}
            />
          </label>

         // <label className="block text-sm font-medium text-gray-600">
            <span className="font-semibold mb-2 block">Country</span>
            <Input
              label="country"
              name="country"
              type="text"
              className="w-full font-light rounded-xl border-gray-300 border shadow-sm px-4 py-2"
              defaultValue={defaultData.country}
            />
          </label>

          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-2 rounded-xl hover:bg-teal-600 transition-colors self-end cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
</div>
  )
}




           


{/* If you're maintaining a React notebook, I'd summarize this challenge like this:

Controlled vs Uncontrolled Components
defaultValue vs value
Browser-managed form state
FormData API (new FormData(form))
formData.get() and Object.fromEntries(formData.entries())
name attribute importance
e.currentTarget vs e.target
Reusable Input Components
Prop Spreading (...props)
React.InputHTMLAttributes<HTMLInputElement>

Those ten concepts are the main lessons 
this exercise is designed to teach, 
and they're all useful to understand as you 
continue learning React. */}