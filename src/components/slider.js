import Carousel from "react-bootstrap/Carousel";
import faculty from "../images/faculty.png";
import faculty1 from "../images/faculty1.jpg";
import faculty2 from "../images/faculty2.jpg";
import faculty4 from "../images/faculty4.jpg";
import faculty5 from "../images/faculty5.jpg";
import faculty6 from "../images/faculty6.jpg";
import React from "react";

class slider extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={800}>

                        <img
                            className="w-75 p-3"
                            img src={faculty} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>Faculty of Engineering</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="w-75 p-3"
                            img src={faculty1} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>University of Ruhuna</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="w-75 p-3"
                            img src={faculty2} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>Hapugala Galle</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="w-75 p-3"
                            img src={faculty4} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>Civil And Environmental Engineering</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="w-75 p-3"
                            img src={faculty5} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>Electrical And Information Engineering</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={800}>
                        <img
                            className="w-75 p-3"
                            img src={faculty6} alt="faculty" height="400px" width="300px"

                        />
                        <Carousel.Caption>
                            <h3>Mechanical And Manufacturing Engineering</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


        );
    }
}
export default slider;