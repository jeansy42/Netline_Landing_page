import Brilho from "../assets/images/3b188739-brilho_1000000000000000000028.png";
import Plano300 from "../assets/images/d6ec1743-valores_107w0dz000000000000028.png";
import Plano500 from "../assets/images/c90a67be-500_107w0e007w0dz000000028.png";
import FlushButton from "./FlushButton";

function Medium() {
  return (
    <div className="relative flex justify-center w-screen min-w-[375px] pt-12 bg-cusdarkBlue">
      <div className=" relative w-full max-w-7xl">
        <img
          src={Brilho}
          alt="Brilho Netline"
          className="hidden absolute -top-20 -left-20 z-[0] md:block "
        />
        <div className="w-full flex flex-col items-center gap-10 px-2 overflow-hidden  sm:flex-row sm:justify-evenly sm:gap-0">
          <div className="relative z-10">
            <img src={Plano300} alt="Plano 300mb" className="w-auto h-auto " />
            <FlushButton />
          </div>
          <div className="relative z-10">
            <img src={Plano500} alt="Plano 500mb" className="w-auto h-auto" />
            <FlushButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medium;
