import * as React from 'react';
import './SectionTitle.style.scss';
interface ISectionTitle {
    name: string;
}

const App: React.FunctionComponent<ISectionTitle> = (props: ISectionTitle) => {
    return (
        <div style={{textAlign: "center"}}>
        <h2 className="section-title">{props.name}</h2>
        </div>
    )
}

export default App;