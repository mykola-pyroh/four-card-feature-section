import "./Card.scss";

export default function Card({ title, summary, icon }: { title: string; summary: string; icon: string }) {
    
    return (
        <article className="card">
            <div>
                <p className="card__title">{title}</p>
                <p className="card__summary">{summary}</p>
            </div>
            <img src={icon} alt={`${title} icon`} className="card__icon" />
        </article>
    )
}
