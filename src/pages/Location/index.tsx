/* React */
import * as React from 'react'

/* Components */
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'

/* Assets */

const mapCenter = {
    lat: 45.7357205,
    lng: 9.4486352,
}
const zoom = 13

/* Utils */

import ApiWrapper from '../../utils/ApiWrapper'

/* Styles */
import './Location.css'

const inlineStyles = {
    fullscreenMap: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
    },
}

/* Types */
import { Gym } from '../../utils/ApiWrapper'
import { RoutingTargetProps } from '../../utils/Routes'

type Props = RoutingTargetProps & {}

type State = {
    loading: boolean
    width: number
    height: number
    mapsApiKey: string
    gyms: Gym[]
}

class Location extends React.Component<Props, State> {
    state = { loading: true, width: 0, height: 0, mapsApiKey: '', gyms: [] }

    constructor(props) {
        super(props)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
        this.loadData()
    }

    loadData = async () => {
        let mapsApiKey = (await ApiWrapper.getSetting('maps_api_key')).value
        let gyms = await ApiWrapper.getGyms()
        await this.setState({ mapsApiKey, gyms, loading: false })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }

    componentDidMount() {
        if (this.props.onEnter) this.props.onEnter(this.props.displayName)
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }
    public render() {
        return this.state.loading ? null : (
            <div className="location-container">
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey={this.state.mapsApiKey}
                    language={'it'}
                    region={'IT'}
                    version={'weekly'}
                    libraries={[]}
                    onLoad={() => console.log('script loaded')}
                    loadingElement={<div>Loading...</div>}
                >
                    <GoogleMap
                        id="basic-map-example"
                        mapContainerStyle={inlineStyles.fullscreenMap}
                        zoom={zoom}
                        center={mapCenter}
                    >
                        {this.state.gyms.map((gym: Gym) => {
                            return (
                                <Marker
                                    options={{
                                        title: 'Palestra di ' + gym.name,
                                        position: {
                                            lat: gym.latitude,
                                            lng: gym.longitude,
                                        },
                                    }}
                                />
                            )
                        })}
                    </GoogleMap>
                </LoadScript>
            </div>
        )
    }
}

export default Location
