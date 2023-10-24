// import one from "../src/assets/images/1.png"
import Coffee from "./Coffee";
import { useEffect, useState } from "react";
import axios from "axios";

function Coffees() {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/coffees')
      .then(res => setCoffees(res.data))
  }, [])


  const handleDelete = id => {
    axios.delete(`http://localhost:3000/coffees/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          const rmainingCoffee = coffees.filter(coffee => coffee._id !== id)
          setCoffees(rmainingCoffee)
        }
        console.log(res.data)
      })

    // fetch(`http://localhost:3000/coffees/${id}`, {
    //   method: 'DELETE'
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.deletedCount > 0) {
    //       const rmainingCoffee = coffees.filter(coffee => coffee._id !== id)
    //       setCoffees(rmainingCoffee)
    //     }
    //     console.log(data)
    //   })

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

