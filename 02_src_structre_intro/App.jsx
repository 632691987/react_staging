// Create shell component
import React, {Component} from 'react';
import Hello from './components/Hello';//default is specical for "./components/Hello/index"
import Welcome from './components/Welcome';

export default class App extends Component {

    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        );
    }

}

//expose App compoennt
//export default App;