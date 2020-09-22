import * as React from 'react';
import './FeaturesList.style.scss';

import tiktok from '../assets/tiktok-brands.svg';


interface Feature {
    img: string;
    title: string;
    content: string;
}

type FeaturesList = Array<Feature>;

const staticData: FeaturesList = [
    {
        img: tiktok,
        title: 'DID Management1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias reiciendis corporis est amet. Quasi nulla architecto temporibus iste praesentium numquam quibusdam ipsum nobis beatae, culpa aperiam perspiciatis explicabo, ad vitae. Ea voluptatibus nesciunt ex. Eos laudantium velit placeat ducimus. Ipsa dolorum iste itaque suscipit nesciunt impedit amet!'
    },
    {
        img: tiktok,
        title: 'DID Management2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias reiciendis corporis est amet. Quasi nulla architecto temporibus iste praesentium numquam quibusdam ipsum nobis beatae, culpa aperiam perspiciatis explicabo, ad vitae. Ea voluptatibus nesciunt ex. Eos laudantium velit placeat ducimus. Ipsa dolorum iste itaque suscipit nesciunt impedit amet!'
    },
    {
        img: tiktok,
        title: 'DID Management3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias reiciendis corporis est amet.'
    }
]

const App = () => {
    return (
        <ul className="feature-items-list">
            {
                staticData.map((item) => {
                    return( 
                        <li className="feature-item" key={item.title}>
                            <img src={item.img} alt="avatar"/>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default App;