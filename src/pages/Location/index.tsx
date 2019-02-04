/* React */
import * as React from 'react'

/* Types */
import { RoutingTargetProps } from '../../utils/Routes'

type Props = RoutingTargetProps & {}

type State = {}

class Location extends React.Component<Props, State> {
    componentDidMount() {
        if (this.props.onEnter) this.props.onEnter(this.props.displayName)
    }
    public render() {
        return <p>Location</p>
    }
}

export default Location
