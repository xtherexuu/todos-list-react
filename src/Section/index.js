import "./style.css";

const Section = ({ body, extraContent, title }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__heading">{title}</h2>
            {extraContent}
        </header>
        {body}
    </section>
);

export default Section;
