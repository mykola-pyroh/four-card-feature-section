import "./Card.scss";

export default function Card({ title, summary, icon }: { title: string; summary: string; icon: string }) {
    
    return (
        <article className="card">
            <div>
                <h2 className="card__title">{title}</h2>
                <p className="card__summary">{summary}</p>
            </div>
            <img src={icon} alt={`${title} icon`} className="card__icon" />
        </article>
    )
}
