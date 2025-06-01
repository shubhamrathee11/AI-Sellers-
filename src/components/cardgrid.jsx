import cardbg from '../assets/cardbg.svg';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';

const cards = [
  {
    id: 1,
    text: (
      <>
        Alex Salkin Is Making <span className="text-[#A678FF] font-bold"> $23,000 Per Month</span> Selling <br /> <span className="text-[#A678FF] font-bold">AI-generated Ebooks...</span>
      </>
    ),
    img: card1,
    height: 614,
    tilt: true,
  },
  {
    id: 2,
    text: (
      <>
        Another Guy Has <span className="text-[#A678FF] font-bold">Made Over $1.5 Million</span> By Selling <span className="text-[#A678FF] font-bold">AI-generated Ebooks</span> On Amazon...
      </>
    ),
    img: card2,
    height: 614,
    tilt: true,
  },
  {
    id: 3,
    text: (
      <>
        This Guy Made An <span className="text-[#A678FF] font-bold">AI Chatbot</span> That Makes Him <span className="text-[#A678FF] font-bold">$350,000 Each Year</span>...
      </>
    ),
    img: card3,
    height: 554,
    tilt: false,
  },
  {
    id: 4,
    text: (
      <>
        Jason Wardrop Sells <span className="text-[#A678FF] font-bold">AI Services</span> Like Images, Videos, And Content to Local Businesses And <span className="text-[#A678FF] font-bold">Makes $10K/Month</span>
      </>
    ),
    img: card4,
    height: 554,
    tilt: false,
  },
  {
    id: 5,
    text: (
      <>
        This Guy Went From <span className="text-[#A678FF] font-bold">0 To 56K Clicks</span> In 3 Months Using <span className="text-[#A678FF] font-bold">AI Content</span> (2023 Blog Case Study)
      </>
    ),
    img: card5,
    height: 614,
    tilt: false,
  },
  {
    id: 6,
    text: (
      <>
        This Guy Started And <span className="text-[#A678FF] font-bold">Scaled His AI Agency</span> To <span className="text-[#A678FF] font-bold">$129,251</span> Just To Prove It's NOT Luck...
      </>
    ),
    img: card6,
    height: 614,
    tilt: false,
  },
];

const CardGrid = () => {
  return (
    <section className="flex flex-wrap justify-center gap-6 px-4 py-10 mt-20">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      {cards.map((card) => {
        const isCard2 = card.id === 2;
        const isCard3 = card.id === 3;
        const isBottomCards = card.id === 4 || card.id === 5 || card.id === 6;

        return (
          <div
            key={card.id}
            className="relative rounded-[20px] overflow-hidden text-white flex flex-col items-center p-6"
            style={{
              width: "651px",
              height: `${card.height}px`,
              backgroundImage: `url(${cardbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              fontFamily: "Poppins, sans-serif",
              justifyContent: isCard2 || isCard3 ? "center" : "space-between",
            }}
          >
            <p
              className="z-10 text-center"
              style={{
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "35px",
                width: "566px",
              }}
            >
              {card.text}
            </p>

            <div
              className="z-10 flex items-center justify-center"
              style={{
                marginBottom: isBottomCards ? "20px" : 0,
                flexGrow: isCard2 || isCard3 ? 1 : 0,
              }}
            >
              <img
                src={card.img}
                alt="card media"
                className="rounded-xl object-contain animate-[float_3s_ease-in-out_infinite]"
                style={
                  card.id === 1
                    ? { width: "500px", height: "450px", transform: "rotate(-5deg)" }
                    : card.id === 2
                    ? { width: "497px", height: "333px", transform: "rotate(5deg)" }
                    : card.id === 3
                    ? { width: "566px", height: "151px" }
                    : card.id === 4
                    ? { width: "569px", height: "315px" }
                    : card.id === 5
                    ? { width: "582px", height: "388px" }
                    : card.id === 6
                    ? { width: "571px", height: "360px" }
                    : {}
                }
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CardGrid;
