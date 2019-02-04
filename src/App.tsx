/* React */
import * as React from 'react'
/* Assets */
import './App.css'
/* Components */

/* Utils */
import ApiWrapper from './utils/ApiWrapper'
import PageWrapper from './components/PageWrapper'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { routes } from './utils/Routes'

/* Types */
import { Route as RouteType } from './utils/Routes'

type Props = {}

type State = {
    content: string
    currentPageTitle?: string
}

class App extends React.Component<Props, State> {
    state = {
        content: '',
        currentPageTitle: 'Home',
    }

    updatePageTitle = (displayName: string) => {
        this.setState({ currentPageTitle: displayName })
    }

    getReactRoutes = (routes: RouteType[]) => {
        return routes.map((route: RouteType) => (
            <Route
                key={route.id}
                exact={route.path === '/'}
                path={route.path}
                render={() =>
                    React.cloneElement(route.component, {
                        onEnter: this.updatePageTitle.bind(this),
                        displayName: route.displayName,
                    })
                }
            />
        ))
    }

    componentDidMount() {
        ApiWrapper.getAbout().then(content => this.setState({ content }))
    }

    public render() {
        return (
            <div className="App">
                <Router>
                    <PageWrapper title={this.state.currentPageTitle}>
                        {this.getReactRoutes(routes)}
                    </PageWrapper>
                </Router>
            </div>
        )
    }
}

export default App
