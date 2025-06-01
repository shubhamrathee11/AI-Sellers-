import userIcon from "../assets/user.png";
import emailIcon from "../assets/email.png";
import signupbg from "../assets/signupbg.png";

const Signup = () => {
  return (
    <section
      className="relative mx-auto border-[2.36px] border-[#333] rounded-[30px] flex flex-col lg:flex-row items-center justify-evenly px-4 sm:px-8 md:px-10 py-10 text-white font-poppins w-full max-w-[1163px]"
      style={{
        height: "auto", // allows height to adjust for smaller screens
        backgroundImage: `url(${signupbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Empty Div (visible only on lg and above) */}
      <div
        className="hidden lg:block flex-shrink-0"
        style={{
          width: "470px",
          height: "470px",
        }}
      ></div>

      {/* Right - Form Content */}
      <div
        className="z-10 w-full max-w-[573px] mt-8 lg:mt-0"
        style={{
          minWidth: "300px",
        }}
      >
        <div className="flex flex-col justify-center gap-6 w-full">
          <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-semibold leading-tight text-center lg:text-left">
            Join Us For The LIVE Reveal Of <br />
            AISellers On <span className="text-[#A661FF]">[Date Here]</span> at
            10:00 am EST & Win a FREE Copy + $150!
          </h2>

          {/* Name Field */}
          <div className="flex items-center bg-[#1b1430] rounded-full px-5 py-4 gap-3 w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[88px]">
            <img src={userIcon} alt="User Icon" className="w-5 h-5" />
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-transparent outline-none text-white w-full placeholder-white text-sm sm:text-base focus:ring-2 focus:ring-[#A661FF] focus:ring-opacity-75 rounded"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center bg-[#1b1430] rounded-full px-5 py-4 gap-3 w-full h-[60px] sm:h-[70px] md:h-[80px] lg:h-[88px]">
            <img src={emailIcon} alt="Email Icon" className="w-5 h-5" />
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent outline-none text-white w-full placeholder-white text-sm sm:text-base focus:ring-2 focus:ring-[#A661FF] focus:ring-opacity-75 rounded"
            />
          </div>

          {/* Submit Button */}
          <button
            className="bg-[#A661FF] hover:opacity-90 transition-all text-white text-[14px] sm:text-[16px] font-semibold w-[487px] h-[65px] sm:h-[75px] md:h-[85px] lg:h-[90px] rounded-[40px] mt-4"
          >
            SIGN UP NOW FOR THE BIG REVEAL!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
