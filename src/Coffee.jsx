
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Coffee = ({ coffee, handleDelete }) => {

    const {_id, name, chef, supplier, taste, category, price, details, photo_url } = coffee;

    return (
        <>
            <div className="flex gap-3 items-center bg-gray-100 p-3">
                <div>
                    <img src={photo_url} alt="" />
                </div>
                <div>
                    <p><span> <b>Name:</b></span> {name} </p>
                    <p><span> <b>Chef:</b></span> {chef} </p>
                    <p><span> <b>Supplier:</b></span> {supplier} </p>
                    <p><span> <b>Taste:</b></span> {taste} </p>
                    <p><span> <b>category:</b></span> {category} </p>
                    <p><span> <b>Price:</b></span>{price}</p>
                    <p><span> <b>details:</b></span> {details} </p>
                </div>
                <div>
                    <p><button>view</button></p>
                    <p> <Link to={`/updatecoffee/${_id}`}> <button>Edit</button> </Link> </p>
                    <p><button onClick={() => handleDelete(_id)}>Delete</button></p>
                </div>
            </div>
        </>
    );
};

export default Coffee;

Coffee.propTypes = {
    coffee:PropTypes.object,
    handleDelete:PropTypes.func,
}