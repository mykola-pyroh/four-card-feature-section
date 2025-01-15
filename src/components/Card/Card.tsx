export default function Card({ title, summary, icon }: { title: string; summary: string; icon: string }) {
    
    return (
        <div className="card">
            <p>{title}</p>
            <p>{summary}</p>
            <img src={icon} alt="Icon" />
        </div>
    )
}
