import Card from "../Card/Card";
import data from "../../assets/data.json";
import "./Main.scss";

export default function Main() {
    // const data = [
    //     {
    //         title: 'Supervisor',
    //         summary: 'Monitors activity to identify project roadblocks',
    //         icon: iconCalculator
    //     },
    //     {
    //         title: 'Team Builder',
    //         summary: 'Scans our talent network to create the optimal team for your project',
    //         icon: iconCalculator
    //     },
    //     {
    //         title: 'Karma',
    //         summary: 'Regularly evaluates our talent to ensure quality',
    //         icon: iconCalculator
    //     },
    //     {
    //         title: 'Calculator',
    //         summary: 'Uses data from past projects to provide better delivery estimates',
    //         icon: iconCalculator
    //     }
    // ];

    return (
        <main>
            <section>
                <p>Reliable, efficient delivery</p>
                <p>Powered by Technology</p>
                <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            </section>
            <section>
                {data.map(el => <Card key={el.title} title={el.title} summary={el.summary} icon={el.icon} />)}
            </section>
        </main>
    )
}