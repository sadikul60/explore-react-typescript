type DetailsProps = {
    items: {
        question: string
        answere: string
        id: number
    }
}


const Details = (props: DetailsProps,) => {
    const {question, answere, id} = props?.items;
    return (
        <div className="question">
            <p><strong>Que-{id}: {question}</strong></p>
            <p><strong>Ans: </strong>{answere}</p>
        </div>
    );
};

export default Details;