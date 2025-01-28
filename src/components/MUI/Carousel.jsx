import { Carousel, Typography, Button } from "@material-tailwind/react";
import PropTypes from "prop-types";

export function CarouselWithContent({ contents }) {
  return (
    <Carousel className="rounded-xl md:w-[44rem] lg:w-[60rem]">
      {contents.map((item, ind) => (
        <div key={ind} className="relative h-[500px] md:h-full w-full">
          <img
            src={item.image}
            alt={`image ${ind + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {item.name}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-sm"
              >
                {item.description}
              </Typography>
              <div className="flex justify-center gap-2">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </a>

                {/* <Button size="lg" color="white" variant="text">
                  Features
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

CarouselWithContent.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
