/* React */
import * as React from 'react'

/* Components */
import Slider from 'react-slick'

/* Styles */
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Home.css'

/* Assets */
import Image1 from '../../assets/slider/1.jpeg'
import Image2 from '../../assets/slider/2.jpeg'
import Image3 from '../../assets/slider/3.jpeg'

const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
}

/* Types */
import { RoutingTargetProps } from '../../utils/Routes'

type Props = RoutingTargetProps & {}

type State = {}

class Home extends React.Component<Props, State> {
    componentDidMount() {
        if (this.props.onEnter) this.props.onEnter(this.props.displayName)
    }

    public render() {
        return (
            <div className="carousel-container">
                <Slider {...settings}>
                    <div>
                        <img className="carousel-image" src={Image1} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img className="carousel-image" src={Image2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img className="carousel-image" src={Image3} />
                        <p className="legend">Legend 3</p>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default Home
