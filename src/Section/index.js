import "./style.css";

const Section = (props) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__heading">{props.title}</h2>
            {props.extraContent}
        </header>
        <div className="section__body">{props.body}</div>
    </section>
);

export default Section;
