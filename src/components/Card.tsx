import * as React from 'react';
import './Card.style.scss';



interface Card {
    img: string;
    title: string;
    intro: string;
}

const App = (props: Card) => {
    return (
        <div className="simple-card">
            <div>
                <img src={props.img} alt=""/>
            </div>
            <div className="card-body">
                <h3>{props.title}</h3>
                <p>{props.intro}</p>
                <button className="btn btn-1">
                    <span>GOTO</span>
                </button>
            </div>
        </div>
    )
}

export default App;