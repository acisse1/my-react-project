import './Card.css';

function Card (person) {

    const {id, name, image, phone, email} = person;

    return (
        <div className='card'>
            <div className='top'>
                <h2 className='name'>{name}</h2>
                <img className='circle-img' src= {image}/>
            </div>
            <div className='bottom'>
                <p className='info'> cel: {phone}</p>
                <p className='info'> email: {email}</p>
            </div>
        </div>
    );
}

export default Card;