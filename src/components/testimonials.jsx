import james from '../assets/james.png';
import linda from '../assets/linda.png';
import bg from '../assets/purplebg.png';

const testimonials = [
  {
    titleStart: "Last month I made ",
    titleHighlight: "$3,740 In Commissions...",
    text: `“I was struggling to make more than $400/month with affiliate marketing until I found AISellers 2.0. Within just 3 weeks of using the talking head videos and new landing page templates, my conversion rate jumped from 1.2% to 4.8%! Last month I made $3,740 in commissions working part-time. The flipbooks and automated email campaigns have been game changers for my business. Best investment I’ve made this year!”`,
    name: "James Keller - Affiliate Marketer",
    avatar: james,
  },
  {
    titleStart: "One restaurant owner saw a ",
    titleHighlight: "27% increase in bookings...",
    text: `“AISellers 2.0 helped me land 3 new clients in my first month at $1,500 each! The clients were blown away by the quality of the AI videos and custom chatbots I created for them in literally minutes. One restaurant owner saw a 27% increase in bookings after we implemented the SMS campaign feature. I’m working half the hours and making triple what I did before. This tool is insane!”`,
    name: "Linda Reeves - Local Marketing Consultant",
    avatar: linda,
  },
];

const Testimonials = () => {
  return (
    <section
      className="flex flex-wrap justify-center gap-6 px-4 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="text-white rounded-[35.4px] border border-white border-opacity-10 p-10 flex flex-col justify-between"
          style={{
            width: "517px",
            height: "644px",
            background: "linear-gradient(180deg, #1B1B1B 0%, #000000 100%)",
            fontFamily: "Plus Jakarta Sans, sans-serif",
          }}
        >
          <div>
            <h3
              className="mb-15 text-white mt-5" 
              style={{
                fontWeight: 800,
                fontSize: "24px",
                lineHeight: "33px",
                letterSpacing: "0%",
              }}
            >
              {t.titleStart}
              <span style={{ color: "#6E38FD" }}>{t.titleHighlight}</span>
              {t.titleEnd}
            </h3>
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "20px",
                lineHeight: "30.14px",
                color: "#BABABA",
              }}
            >
              {t.text}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-[74px] h-[74px] rounded-full object-cover"
            />
            <div>
              <p
                style={{
                  fontWeight: 600,
                  fontSize: "20px",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                {t.name}
              </p>
              <p
                style={{
                  fontSize: "20px",
                  color: "#B0B0B0",
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                }}
              >
                {t.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
