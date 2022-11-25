import "./style.css";

const Section = (props) => (
    <section className="section">
        <header className="section__header">
            {props.title}
            {props.extraContent}
        </header>
        <div className="section_body">{props.body}</div>
    </section>
);

export default Section;