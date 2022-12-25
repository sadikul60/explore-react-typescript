type HomeProps = {
    name: string,
    email: string,
    age: string,
    money: string
};

const Home = (props: HomeProps) => {
    type Person = {
        name: string,
        age: number,
        address: string,
        salary: number,
        married: string
    }

    const person: Person = {
        name: 'Jakir',
        age: 21,
        address: 'Dhaka',
        salary: 4000,
        married: 'No'
    }

    const formattedSalary = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD"
    }).format(person.salary)

    const {name, age, address, married} = person;

    return (
        <div className="container">
            <div>
                <h1>Name: {name}</h1>
                <h4>Age: {age}</h4>
                <p>Address: {address}</p>
                <p>Salary: {formattedSalary}</p>
                <p>Married: {married}</p>
            </div>
        </div>
    );
};

export default Home;