const styles = `
h1 {
    text-align: center;
    font-size: 2em;
}

p {
    text-align: center;
    font-size: 1.2em;
}
`

function About() {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            <h1>About Page</h1>
            <p>Welcome to our website! This is the About page.</p>
        </>
    );
};

export default About;