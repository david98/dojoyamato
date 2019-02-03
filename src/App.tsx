/* React */
import * as React from 'react'
/* Assets */
import './App.css'

/* Utils */
import ApiWrapper from './utils/ApiWrapper'
import PageWrapper from './components/PageWrapper'

/* Types */
type Props = {}

type State = {
    content: string
}

class App extends React.Component<Props, State> {
    state = {
        content: '',
    }

    componentDidMount() {
        ApiWrapper.getAbout().then(content => this.setState({ content }))
    }

    public render() {
        return (
            <div className="App">
                <PageWrapper>
                    <p className="App-intro">{this.state.content}</p>
                </PageWrapper>
            </div>
        )
    }
}

export default App
