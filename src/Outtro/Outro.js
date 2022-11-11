import { Bar } from 'react-chartjs-2';
import "../Outtro/Outro.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Outro = (props) => {

    let questions = [];
    let ratings = [];
    props.questionsAndAnswers.map(question => {
        questions.push("Vraag #" + question.number);
        ratings.push(question.rating);
    });

    let data = {
        labels: questions,
        datasets: [{
            label: 'My First Dataset',
            data: ratings,
        },
        ]
    }

    return (
        <article className="outro" >
            <Bar data={data}></Bar>
        </article >

    )
}

export default Outro;