type PersonProps = {
    name: {
        first: string
        last: string
    }
}

const Person = (props: PersonProps) => {
    return (
        <div className="container">
            <h1>{props.name.first} {props.name.last}</h1>
        </div>
    );
};

export default Person;