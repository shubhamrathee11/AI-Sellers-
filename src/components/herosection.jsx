import bg1 from "../assets/Untitled.svg";      
import Group from "../assets/Group.png";
import laptop from "../assets/laptop.png";

const HeroSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-10 flex justify-center"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "center",
      }}
    >
      {/* Container with max width */}
      <div className="w-full max-w-[1944px] flex flex-col items-center">
        {/* Button */}
        <div className="mt-5 mb-8 w-full flex justify-center px-4">
     <button
  className="w-full max-w-[744px] h-[74px] rounded-full bg-black/80 text-white text-center font-poppins text-[20px] font-medium px-6 border border-[#A661FF] shadow-[0_0_15px_#A661FF] transition duration-300 hover:opacity-90 cursor-pointer hover:shadow-[0_0_30px_#A661FF,0_0_50px_#A661FF]"
>
  Could This AI App Be Your $2,000/Month Marketing Assistant?
</button>

      </div>

        {/* Heading */}
        <h1 className="text-white text-center font-poppins text-[42px] md:text-[55px] leading-tight md:leading-[73.1px] max-w-[1358px] px-4">
          <span className="text-[#A661FF] font-bold">LIVE WORKSHOP:</span> How I Created a Complete Viral
          Marketing Campaign in 11 Minutes While Making Coffee (That Now Runs on Complete Autopilot)
        </h1>

        {/* Group image – full width, no side gaps */}
        <img
          src={Group}
          alt="group"
          className="w-full mt-5"
        />

        {/* Laptop image – responsive */}
        <img
          src={laptop}
          alt="laptop"
          className="w-full max-w-[1342px] h-auto max-h-[942px] mt-5"
        />
      </div>
    </section>
  );
};

export default HeroSection;
