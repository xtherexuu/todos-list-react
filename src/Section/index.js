import "./style.css";

const Section = ({body, extraContent, title}) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__heading">{title}</h2>
            {extraContent}
        </header>
        <div className="section__body">{body}</div>
    </section>
);

export default Section;
