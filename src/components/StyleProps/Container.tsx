type StyleProps = {
    style: React.CSSProperties
}

const Container = (props: StyleProps) => {
    return (
        <div style={{border: '1px solid black', padding: '1rem', margin: '1rem', borderRadius: '10px'}}>
            Text Content goes here. This is style props.
        </div>
    );
};

export default Container;