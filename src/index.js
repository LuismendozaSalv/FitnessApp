import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from './components/Card'
import Welcome from './components/Welcome'
const container = document.getElementById('root');

ReactDOM.render(<div>
                    <Welcome username="Luis"/>
                    <Card
                        title = "Technique Guides"
                        description  = "Learn Amazing Street workout and calisthenics"
                        img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                        leftColor="#A74CF2"
                        rightColor="#617BFB"
                    />
                </div>, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
