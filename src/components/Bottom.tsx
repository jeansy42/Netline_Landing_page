import Wifi from "../assets/images/7079f04c-lp-variacao-sao-joao-16_10ap02e000000000000028.png";
import Support from "../assets/images/06caa52c-lp-variacao-sao-joao-17_10ap02d000000000000028.png";
import Instalation from "../assets/images/b59407ae-lp-variacao-sao-joao-18_10ap02e000000000000028.png";
import Tv from "../assets/images/d6df96a1-lp-variacao-sao-joao-19_10ap02e000000000000028.png";
import Brilho2 from "../assets/images/brilho2.png";
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";

function Bottom() {
  return (
    <div className="w-screen min-w-[375px] relative">
      <div className="h-[30rem] bg-bottomImg  bg-no-repeat bg-center bg-cover brightness-[0.3] -hue-rotate-0"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 max-w-7xl h-[30rem] w-full flex flex-col justify-center items-center gap-3">
        <img
          src={Brilho2}
          alt="Brilho 2"
          className="hidden absolute -top-32 -left-28 z-[0] md:block"
        />
        <img
          src={Instalation}
          alt="Logo Instalação"
          className="w-[294px] h-[65]"
        />
        <img src={Wifi} alt="Logo Wifi" className="w-[294px] h-[65]" />
        <img src={Support} alt="Logo Suporte" className="w-[294px] h-[65]" />
        <img src={Tv} alt="Logo Tv" className="w-[294px] h-[65]" />

        <div className="flex gap-12 mt-6 z-20">
          <a href="https://www.facebook.com/netlinetelecom" target="_blank">
            <BsFacebook className="h-7 w-7 fill-blue-900 hover:scale-105 transition-transform" />
          </a>

          <a href="https://www.instagram.com/netlinetelecom" target="_blank">
            <BsInstagram className="h-7 w-7 fill-pink-500 hover:scale-105 transition-transform" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCCMQm0ExSI3DXHf93wuHGeQ"
            target="_blank"
          >
            <BsYoutube className="h-7 w-7 fill-red-800 hover:scale-105 transition-transform" />
          </a>

          <a href="http://wa.me/08002814437" target="_blank">
            <BsWhatsapp className="h-7 w-7 fill-green-500 hover:scale-105 transition-transform" />
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Bottom;
