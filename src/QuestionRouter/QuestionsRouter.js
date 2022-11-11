import React from "react";
import Question from "../Question/Question";
import { withRouter } from "react-router-dom";
import questions from '../Data/questions';


class QuestionsRouter extends React.Component{
    constructor(props){
        super(props);
        this.myNumber = this.props.match.params.number; 
        this.state = {questions: []}
    }

    componentDidMount(){
        this.setState({questions: questions});
    }

    onRate = (rating, number) =>{
        let oldState = this.state.questions;
        let newState = oldState.map( question => {
            if(question.number === number){
                question.rating = rating;
                return question;
            }
            return question;
        });

        this.setState({question: newState});
    }

    render(){

        this.myNumber = this.props.match.params.number; 
        let questionToBeRendered = this.state.questions.map( questionObject =>{
            if(this.myNumber == questionObject.number){
                return <Question onLast={() => this.props.onLast(this.state.questions)} last={questionObject.last} onRate={this.onRate} previous={questionObject.previous} next={questionObject.next} number={questionObject.number} question={questionObject.question} key={questionObject.number} rating={questionObject.rating}/>;
            }
        });
        return (
        <>
            {questionToBeRendered}
        </>
        )
    }
}
 
export default withRouter(QuestionsRouter);