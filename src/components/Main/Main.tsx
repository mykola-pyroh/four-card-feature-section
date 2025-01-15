import Card from "../Card/Card";
import data from "../../assets/data.json";
import "./Main.scss";

export default function Main() {

    return (
        <main>
            <section className="title-section">
                <p>Reliable, efficient delivery</p>
                <p>Powered by Technology</p>
                <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            </section>
            <section className="card-section">
                {data.map(el => <Card key={el.title} title={el.title} summary={el.summary} icon={el.icon} />)}
            </section>
        </main>
    )
}