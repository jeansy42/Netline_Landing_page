import Form from "./Form";
import Logo from "../assets/images/Logo-Netline-Telecom-Site.png";
import Promo from "../assets/images/mesdocliente.png";
import Woman from "../assets/images/2b4ebf86-persona-bol_10d10ed000000000000028.png";
import TransitionalComponent from "./TransitionalComponent";

function Top() {
  return (
    <div className="w-screen min-w-[375px] bg-headerImg bg-no-repeat bg-center bg-cover pb-8">
      <header className="max-w-7xl m-auto px-4 pt-6 mb-6">
        <div className=" flex justify-end w-full px-10">
          <a href="https://www.netlinetelecom.com.br/">
            <img
              src={Logo}
              alt="LogoNetline"
              className="w-18 h-5 md:w-36 md:h-10 hover:scale-105 transition-transform"
            />
          </a>
        </div>

        <div className="w-full flex justify-center md:justify-start">
          <img
            src={Promo}
            alt="Mes do cliente Imagem"
            className="w-[307px] h-[158px]"
          />
        </div>
      </header>

      <div className="relative flex flex-col max-w-7xl m-auto px-4 md:flex-row-reverse md:justify-between md:items-center">
        <TransitionalComponent />
        <div className="flex justify-center mb-6 mt-6 md:block md:mb-0 md:mt-0 ">
          <img
            src={Woman}
            alt="Mulher"
            className="max-w-[275px] max-h-[275px] transform translate-x-10 md:transform-none md:max-w-[calc(275px*1.5)] md:max-h-[calc(275px*1.5)] lg:max-w-[calc(275px*2)] lg:max-h-[calc(275px*2)] xl:max-w-[calc(275px*2.5)] xl:max-h-[calc(275px*2.5)]"
          />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Top;
