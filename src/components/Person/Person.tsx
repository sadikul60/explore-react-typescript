type PersonProps = {
    name: {
        first: string
        last: string
        age: number
    }
}

const Person = (props: PersonProps) => {
    return (
        <div className="container">
            <p>FirstName {props.name.first} LastName {props.name.last} Age: {props.name.age}</p>
        </div>
    );
};

export default Person;