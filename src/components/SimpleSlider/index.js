import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";
// import { useState, useEffect, useRef } from 'react';
// import "./slick.css";
// import "./slick-theme.css";
// import data from '../../mock.json';
// import MovieCard from '../MovieCard';

// export const SimpleSlider = ({ initialSlide = 0 }) => {
    export const SimpleSlider = () => {

//   const [hasSetPosition, setHasSetPosition] = useState(false);
//   const slider = useRef();

//   useEffect(() => {
//     if (slider.current && !hasSetPosition) {
//       slider.current.slickGoTo(initialSlide);
//       setHasSetPosition(true);
//     }
//   }, [initialSlide, hasSetPosition, slider]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    // initialSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

//   return (
//     <Slider ref={slider} {...settings}>
//       {data.map((movie) => <MovieCard movie={movie}/>)}
//     </Slider>
//   )
return(
    <Slider {...settings} >
    <div className="s1">
        <h1 className="s11">"</h1>
      <p>loremt, and publishing industries for previewing layouts and visual mockups</p>
    </div>
    <div className="s2"> <h1 className="s22">"</h1>
    <p>loremt, and publishing industries for previewing layouts and visual mockups</p>
    </div>
    <div className="s3"> <h1 className="s33">"</h1>
    <p>loremt, and publishing industries for previewing layouts and visual mockups</p>
    </div>
    <div className="s4"> <h1 className="s44">"</h1>
    <p>loremt, and publishing industries for previewing layouts and visual mockups</p>  
    </div>
   
  </Slider>
)
}