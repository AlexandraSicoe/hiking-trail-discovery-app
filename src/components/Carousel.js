import { Box, Button } from "@mui/joy";
import React from "react";
import ReactSwipe from "react-swipe";
import CarouselImg1 from "../images/c1.avif";
import CarouselImg2 from "../images/c2.avif";
import CarouselImg3 from "../images/c3.avif";

const Carousel = () => {
  let reactSwipeEl;

  return (
    <>
      <Box>
        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: false }}
          ref={(el) => (reactSwipeEl = el)}
        >
          <Box>
            <img
              style={{ height: "300px", width: "500px" }}
              src={CarouselImg1}
            ></img>
          </Box>
          <Box>
            <img
              style={{ height: "300px", width: "500px" }}
              src={CarouselImg2}
            ></img>
          </Box>
          <Box>
            <img
              style={{ height: "300px", width: "500px" }}
              src={CarouselImg3}
            ></img>
          </Box>
        </ReactSwipe>
      </Box>
      <Box display="flex" justifyContent="center" sx={{ p: 2 }}>
        <Button size="sm" sx={{ m: 1 }} onClick={() => reactSwipeEl.prev()}>
          Previous
        </Button>

        <Button size="sm" sx={{ m: 1 }} onClick={() => reactSwipeEl.next()}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default Carousel;
