import Coffee from "./Coffee";
import { useQuery } from "@tanstack/react-query";

const Coffees_Tan_Stack_Query = () => {

  //DATA LOADED BY TAN_STACK_QUERY
  const { data: coffees, isPending, isError, error } = useQuery({
    queryKey: ['coffees'],
    queryFn: async () => {
      const res = await fetch('https://coffee-store-auth-server.vercel.app/coffees')
      return res.json()
    }
  })

  if (isPending) {
    return "Data Loading..."
  }

  if (isError) {
    return error.message;
  }

  return (
    <>
      <div className="container mx-auto px-10">

        <h1 className='text-4xl text-center py-4'>Coffee Store</h1>

        <div className="grid grid-cols-2 gap-5 py-14">
          {
            coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
          }
        </div>

      </div>
    </>
  )
}

export default Coffees_Tan_Stack_Query

