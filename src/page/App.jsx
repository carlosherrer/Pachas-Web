//components
import Cards from "../components/cards";
import Carrousel from "../components/carrousel";
//assets
import mixto from "../assets/card/mixto.jpg";
import backgroundimage from "../assets/backgroundimage.jpg";
import inicio from "../assets/2021.jpg";
import mothersday from "../assets/mothersday.jpg";
import navidad from "../assets/navidad.jpg";
import persons from "../assets/persons.jpg";
import mariachis from "../assets/mariachis.jpg";
import sorprise from "../assets/sorprise.jpg";

const App = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-20 flex justify-around text-white">
          <div className="flex mt-8">
            <p>Logo</p>
          </div>
          <div className="flex justify-between md:gap-16 gap-4 mt-8">
            <p>Carta</p>
            <p>Delivery</p>
            <p>Eventos</p>
            <p>Contacto</p>
          </div>
        </div>
        <div>
          <p className="relative z-20 flex justify-center text-center text-white mt-[30%] md:mt-[15%] text-3xl lg:mt-[20% ]">
            Arte y Sabor de las Generaciones
          </p>
        </div>
        <div>
          <p className="relative z-20 flex justify-center text-center text-white mt-[30%] md:mt-[5%] md:px-72 text-3xl">
            &ldquo;Disfruta de una deliciosa parrillada en tu restaurante
            familiar preferido, donde cada platillo se prepara con una excelente
            calidad, un buen ambiente y el cariño que nos representa.&rdquo;
          </p>
        </div>
        <div>
          <p className="relative z-20 flex justify-center text-[#dfaa5f] border-[#dfaa5f] mt-[30%] md:mt-[10%] text-3xl border-2 w-2/3 md:w-3/12 mx-auto py-3 rounded-lg hover:bg-[#dfaa5f] hover:text-white">
            Ver La Carta
          </p>
        </div>
      </div>
      <div className="flex items-center bg-[#3c3c3c] lg:gap-8 gap-4">
        {/*historia*/}
        <div className="grid md:grid-cols-2 gap-6 mt-16 pl-4 lg:pl-32 mb-20">
          <div className="grid md:mt-24 gap-6 lg:max-w-3xl">
            <img src={inicio} className="rounded-2xl hidden md:flex" />
            <img src={navidad} className="rounded-2xl" />
            <img src={sorprise} className="rounded-2xl hidden md:flex" />
          </div>
          <div className="grid gap-6 lg:max-w-3xl">
            <img src={mothersday} className="md:h-full rounded-2xl" />
            <img src={persons} className="md:h-full rounded-2xl" />
            <img src={mariachis} className="rounded-2xl" />
          </div>
        </div>
        <div>
          <div className="grid gap-4 lg:gap-10">
            <p className="flex text-3xl lg:text-5xl text-[#dfaa5f]">
              Nuestra Historia
            </p>
            <p className="flex text-start text-white lg:w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae blanditiis esse quasi reiciendis fuga voluptatum
              impedit, accusamus earum beatae mollitia tenetur vitae nihil quis
              quia ut incidunt explicabo debitis necessitatibus?
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#3c3c3c]">
        <div className="grid items-center justify-center text-center mb-10">
          <p className="text-[#dfaa5f] font-serif text-[70px] font-bold">
            Nuestra Carta
          </p>
          <p className="text-white text-2xl">
            &rdquo;El Arte y Sabor de las Generaciones&rdquo;
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-10 px-14 md:px-32">
          <Cards
            imageSrc={mixto}
            title="Mix Pachas a la Leña, 1/4 de pollo + chancho"
            time="12 mins"
            rating={4.5}
          />
          <Cards
            imageSrc={mixto}
            title="Mix Pachas a la Leña, 1/4 de pollo + chancho"
            time="12 mins"
            rating={4.5}
          />
          <Cards
            imageSrc={mixto}
            title="Mix Pachas a la Leña, 1/4 de pollo + chancho"
            time="12 mins"
            rating={4.5}
          />
          <Cards
            imageSrc={mixto}
            title="Mix Pachas a la Leña, 1/4 de pollo + chancho"
            time="12 mins"
            rating={4.5}
          />
          <Cards
            imageSrc={mixto}
            title="Mix Pachas a la Leña, 1/4 de pollo + chancho"
            time="12 mins"
            rating={4.5}
          />
          <Cards
            imageSrc={mixto}
            title="Mix Pachas a la Leña, 1/4 de pollo + chancho"
            time="12 mins"
            rating={4.5}
          />
          <Cards
            imageSrc={mixto}
            title="Mix Pachas a la Leña, 1/4 de pollo + chancho"
            time="12 mins"
            rating={4.5}
          />
          <Cards
            imageSrc={mixto}
            title="Mix Pachas a la Leña, 1/4 de pollo + chancho"
            time="12 mins"
            rating={4.5}
          />
        </div>
      </div>
      <div className="bg-[#3c3c3c]">
        <br />
        <Carrousel />
      </div>
    </div>
  );
};

export default App;
