import Card from "../Card/Card";
import data from "../../assets/data.json";
import "./Main.scss";

export default function Main() {

    return (
        <main>
            <section className="title-section">
                <p className="title-section__subtitle">Reliable, efficient delivery</p>
                <p className="title-section__title">Powered by Technology</p>
                <p className="title-section__summary">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            </section>
            <section className="card-section">
                {data.map(el => <Card key={el.title} title={el.title} summary={el.summary} icon={el.icon} />)}
            </section>
        </main>
    )
}