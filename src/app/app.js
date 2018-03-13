import './app.scss';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TopContainer from './components/top_container';
import SampleContainer1 from './components/sample_container1';
import SampleContainer2 from './components/sample_container2';


const muiTheme = getMuiTheme({});

class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router>
                    <div>
                        <Route exact path="/" component={TopContainer}/>
                        <Route path="/sample1" component={SampleContainer1}/>
                        <Route path="/sample2" component={SampleContainer2}/>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
