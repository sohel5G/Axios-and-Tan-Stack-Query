import swal from "sweetalert";

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo_url = form.photo_url.value;

        const coffee = { name, chef, supplier, taste, category, price, details, photo_url };

        fetch('https://coffee-store-auth-server-kvgqm5vyf.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal({
                        title: "Coffee added!",
                        text: "coffee added successfully",
                        icon: "success",
                    });
                }
            })
    }


    return (
        <>
            <div>
                <h1 className="text-3xl text-center py-12">Add Coffee</h1>
            </div>
            <div className="bg-gray-200 max-w-2xl mx-auto px-10 py-8">
                <form onSubmit={handleAddCoffee} className="grid grid-cols-2 items-center gap-4">
                    <div>
                        <p>Name</p>
                        <input name="name" type="text" className="w-full" />
                    </div>
                    <div>
                        <p>Chef</p>
                        <input name="chef" type="text" className="w-full" />
                    </div>
                    <div>
                        <p>Supplier</p>
                        <input name="supplier" type="text" className="w-full" />
                    </div>
                    <div>
                        <p>Taste</p>
                        <input name="taste" type="text" className="w-full" />
                    </div>
                    <div>
                        <p>Category</p>
                        <input name="category" type="text" className="w-full" />
                    </div>
                    <div>
                        <p>Details</p>
                        <input name="details" type="text" className="w-full" />
                    </div>
                    <div>
                        <p>Price</p>
                        <input name="price" type="text" className="w-full" />
                    </div>
                    <div>
                        <p>Photo URL</p>
                        <input name="photo_url" type="text" className="w-full" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" className="bg-sky-400 py-1 px-4 mt-3 text-white rounded-lg cursor-pointer" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddCoffee;

