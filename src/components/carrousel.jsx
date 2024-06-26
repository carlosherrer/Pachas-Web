import { Carousel, Typography } from "@material-tailwind/react";
import Mixto from "../assets/card/mixto.jpg";

const carrousel = () => {
  return (
    <div>
      <Carousel className="rounded-xl h-[350px] md:h-[500px]">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 1"
            className="h-[350px] md:h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="mt-4">
              <Typography
                variant="h1"
                color="white"
                className="text-3xl text-center md:text-4xl lg:text-5xl"
              >
                Opiniones de nuestros comensales
              </Typography>
            </div>
            <div className="flex justify-center gap-2 md:gap-10">
              <div>
                <img src={Mixto} className="rounded-full w-36 md:w-64 md:mt-0 mt-4" />
              </div>
              <div className="text-center w-1/3 md:w-3/12">
                <Typography
                  variant="lead"
                  color="white"
                  className="opacity-80 md:mb-32 mb-24 text-sm md:text-2xl md:mt-8 mt-2"
                >
                  &ldquo;Deliciosas parrillas con cortes jugosos y llenos de sabor. Ambiente acogedor y excelente servicio. ¡Muy recomendado!&rdquo;
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-[350px] md:h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="mt-4">
              <Typography
                variant="h1"
                color="white"
                className="text-3xl text-center md:text-4xl lg:text-5xl"
              >
                Opiniones de nuestros comensales
              </Typography>
            </div>
            <div className="flex justify-center gap-2 md:gap-10">
              <div>
                <img src={Mixto} className="rounded-full w-36 md:w-64 md:mt-0 mt-4" />
              </div>
              <div className="text-center w-1/3 md:w-3/12">
                <Typography
                  variant="lead"
                  color="white"
                  className="opacity-80 md:mb-32 mb-24 text-sm md:text-2xl md:mt-8 mt-2"
                >
                  &ldquo;Deliciosas parrillas con cortes jugosos y llenos de sabor. Ambiente acogedor y excelente servicio. ¡Muy recomendado!&rdquo;
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 3"
            className="h-[350px] md:h-[500px] w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="mt-4">
              <Typography
                variant="h1"
                color="white"
                className="text-3xl text-center md:text-4xl lg:text-5xl"
              >
                Opiniones de nuestros comensales
              </Typography>
            </div>
            <div className="flex justify-center gap-2 md:gap-10">
              <div>
                <img src={Mixto} className="rounded-full w-36 md:w-64 md:mt-0 mt-4" />
              </div>
              <div className="text-center w-1/3 md:w-3/12">
                <Typography
                  variant="lead"
                  color="white"
                  className="opacity-80 md:mb-32 mb-24 text-sm md:text-2xl md:mt-8 mt-2"
                >
                  &ldquo;Deliciosas parrillas con cortes jugosos y llenos de sabor. Ambiente acogedor y excelente servicio. ¡Muy recomendado!&rdquo;
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default carrousel;
