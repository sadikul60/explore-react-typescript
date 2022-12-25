type GreatProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

const Props = (props: GreatProps) => {
    return (
        <div className="container">
            <h3>
                {
                    props.isLoggedIn ?
                    `Welcome ${props.name}! You have ${props.messageCount} unread message`
                    : 'Welcome Guest'
                }
            </h3>
        </div>
    );
};

export default Props;