import * as React from 'react'

/* Components */
import Home from '../pages/Home'
import Location from '../pages/Location'

/* Icons */
import HomeIcon from '@material-ui/icons/Home'
import LocationOnIcon from '@material-ui/icons/LocationOn'

export type Route = {
    path: string
    id: string
    displayName: string
    component: any
    icon: any
}

export type RoutingTargetProps = {
    onEnter?: any
    displayName?: string
}

const routes: Route[] = [
    {
        path: '/',
        id: 'home',
        displayName: 'Home',
        component: <Home />,
        icon: <HomeIcon />,
    },
    {
        path: '/location',
        id: 'location',
        displayName: 'Dove siamo',
        component: <Location />,
        icon: <LocationOnIcon />,
    },
]

export { routes }
