import bg from '../assets/fadeblue.png';
import Signup from './signup';

const WebinarInvite = () => {
  return (
    <>
    <section
      className="w-full flex justify-center items-center py-20 px-4"
      style={{
        minHeight: "632px",
        maxWidth: "100vw",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="text-center w-full max-w-[1050px]"
      >
        <h2
          className="text-white font-extrabold mb-16"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(32px, 5vw, 65px)",
            lineHeight: "clamp(40px, 6vw, 80px)",
          }}
        >
          Want To See How You Can Get Similar Results?
        </h2>

        <p
          className="text-[#C4C4C4] font-light"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(18px, 3vw, 40px)",
            lineHeight: "clamp(28px, 4vw, 64.1px)",
          }}
        >
          Register For The Webinar Below And Make Sure To <br /> Attend It Live (BIG SURPRISES AWAITING)
        </p>
      </div>
    </section>
    <div className='mb-15'>
    <Signup/>
    </div>
    </>
  );
};

export default WebinarInvite;
