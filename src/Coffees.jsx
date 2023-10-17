// import one from "../src/assets/images/1.png"

import { useLoaderData } from "react-router-dom"
import Coffee from "./Coffee";
import { useState } from "react";

function Coffees() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  const handleDelete = id => {

    fetch(`https://coffee-store-auth-server-kvgqm5vyf.vercel.app/coffees/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const rmainingCoffee = coffees.filter(coffee => coffee._id !== id)
          setCoffees(rmainingCoffee)
        }
        console.log(data)
      })

  }

  return (
    <>
      <div className="container mx-auto px-10">

        <h1 className='text-4xl text-center py-4'>Coffee Store</h1>

        <div className="grid grid-cols-2 gap-5 py-14">
          {
            coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee} handleDelete={handleDelete}></Coffee>)
          }
        </div>

      </div>
    </>
  )
}

export default Coffees

