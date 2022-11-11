import React from "react";
import {withRouter , Link} from "react-router-dom";
import "../Question/Question.css";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,

        }
    }

    componentDidMount(){
        this.setState({rating: this.props.rating})
    }


    onStarClicked = (rating) => {
        this.setState({
            rating: rating,
        }, () => {
            this.props.onRate(this.state.rating, this.props.number);
        })
    }

    render() {
        let nextButtonToBeRendered = <Link className="question__button" to={this.props.next}> volgende</Link>
        if(this.props.last === true){
            nextButtonToBeRendered = <Link onClick={this.props.onLast} className="question__button" to={this.props.next}> volgende</Link>
        }
        let StarsArray = [];
        for(let i = 1; i <= this.state.rating; i++){
            StarsArray.push(<i key={i} onClick={() => this.onStarClicked(i)} class="question__star fa-solid fa-star"></i>);
        }
        for(let i = this.state.rating + 1; i <= 5; i++){
            StarsArray.push(<i key={i} onClick={() => this.onStarClicked(i)} class="question__star fa-regular fa-star"></i>);
        }
        return (
            <article className="question">
                <header className="question__header">
                    <h2 className="question__heading">#{this.props.number} {this.props.question}</h2>
                </header>
                <section className="question__section">
                    <p className="question__text">(1 ster staat voor zeer slecht, 5 sterren staan voor zeer goed)</p>
                    <div className="question__stars">
                        {StarsArray}
                    </div>
                </section>
                <footer className="question__footer">
                    <Link className="question__button" to={this.props.previous}> Vorige</Link>
                    {nextButtonToBeRendered}
                </footer>

            </article>
        )
    }

}

export default withRouter(Question);