import boxImage from "../assets/box.png";
import checkIcon from "../assets/tick.png";
import bgImage from "../assets/purpleline.png";
import Signup from './signup.jsx'
import FinalCallToAction from './finalcall.jsx'


const WorkshopGlance = () => {
  return (
    <>
      <section
        className="w-full py-16 px-6 flex flex-col items-center text-white font-poppins relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "100% 75%",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {/* Title */}
        <h2
          className="max-w-[1000px] mx-auto text-center font-extrabold"
          style={{
            fontWeight: 800,
            letterSpacing: "0%",
            lineHeight: "80px",
            fontSize: "65px",
          }}
        >
          Here’s A Glimpse Of What You’ll Discover During The Live Workshop:
        </h2>

        {/* Content Grid */}
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl w-full">
          {/* Bullet Points */}
          <div
            className="flex-1 flex flex-col gap-6 h-[557px]"
            style={{
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "32px",
            }}
          >
            {[
              "How to create your first profit-generating AI marketing campaign in under 15 minutes (even if you’re completely non-technical)",
              "The “5-Minute Method” for turning any product or service into a complete marketing system that generates leads while you sleep",
              "Why most businesses waste 80% of their marketing budget (and how AISellers eliminates this waste completely)",
              "The exact process for landing $1,500–2,500/month retainer clients using nothing but AISellers demos",
              "Plus, a chance to win a free copy of AISellers + $150 in credits and exclusive AI launch bonuses!",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <img src={checkIcon} alt="check" className="w-6 h-6 mt-1 flex-shrink-0" />
                <p>{text}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={boxImage}
              alt="AISellers Box"
              className="max-w-[300px] md:max-w-[400px] lg:max-w-[620px] h-[612px]"
            />
          </div>
        </div>

        {/* Responsive Typography */}
        <style jsx>{`
          @media (max-width: 1024px) {
            h2 {
              font-size: 48px !important;
              line-height: 60px !important;
            }
            div[style*="font-weight: 400"] p {
              font-size: 20px !important;
              line-height: 28px !important;
            }
          }
          @media (max-width: 640px) {
            h2 {
              font-size: 36px !important;
              line-height: 44px !important;
            }
            div[style*="font-weight: 400"] p {
              font-size: 18px !important;
              line-height: 24px !important;
            }
          }
        `}</style>
        <div className="mt-20">
        <Signup/>
        </div>
      </section>
       <FinalCallToAction/>
    </>
  );
};

export default WorkshopGlance;
