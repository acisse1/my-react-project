import Card from "./Card";

const Listcontacts = [
    {
        id: 1,
        name: "John Cena",
        image: "https://deadline.com/wp-content/uploads/2024/01/john-cena-wwe-retiring.jpg?w=681&h=383&crop=1",
        phone: "888 404 7707",
        email: "cena@gmail.com"
    },
    {
        id: 1,
        name: "Beyonce",
        image: "https://www.hollywoodreporter.com/wp-content/uploads/2021/08/Beyonce-Grammys-GettyImages-1307114656-H-2021.jpg?w=1296",
        phone: "900 666 1101",
        email: "beyonce@gmail.com"
    },
    {
        id: 1,
        name: "Jack Bauer",
        image: "https://cdnph.upi.com/svc/sv/upi/3921389667469/2014/1/cb92a7c2cc3d062aa666564cb9f2571f/Kiefer-Sutherland-back-as-Jack-Bauer-when-24-reboot-debuts-in-May.jpg",
        phone: "555 808 0808",
        email: "jack@gmail.com"
    }
];


function createCard (cardTerm) {

    return <Card 
        id = {cardTerm.id}
        name = {cardTerm.name}
        image = {cardTerm.image}
        phone = {cardTerm.phone}
        email = {cardTerm.email}
    />
}

function ListContact () {

    return <div>
        {Listcontacts.map(createCard)}
    </div>;
}






export default ListContact;