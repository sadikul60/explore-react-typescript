type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message = 'Loading...'
    }
    else if(props.status === 'success'){
        message = 'Data fetched successfull!'
    }
    else if(props.status === 'error'){
        message = 'Error fetching data!'
    }
    return (
        <div className="container">
            <h2>Status - {message}</h2>
        </div>
    );
};

export default Status;