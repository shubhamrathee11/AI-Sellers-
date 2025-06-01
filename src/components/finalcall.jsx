

const FinalCallToAction = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-white mx-auto mt-20 px-4 text-center bg-cover bg-center"
      style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
     
      }}
    >
      {/* Paragraph Content */}
      <div className="w-full max-w-[1054px]">
        <p className="mb-5 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[32px]">
          If You Still Need More Information To Make Your Decision... Keep Reading. But Be Aware: If
          You Take The Time To Read Every Word On This Page, All <strong>1,000 Seats May Be Gone</strong>.
        </p>

        <p className="mb-5 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[32px]">
          <strong>You Are One Of An Estimated 128,375 People</strong> This Week Reading This Message (Based
          On The Estimated Subscriber Base Of Our Promotional Partners...And Not All Of Them Would Reveal
          Their Numbers, So It’s Probably More).
        </p>

        <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[32px]">
          If Only <strong>0.05% Of You Decide To Join Us...</strong>We’ll Be Sold Out. The Best Bet Is To
          Register Right
        </p>

        {/* CTA Button */}
        <button
          className="mt-20 text-white font-semibold text-[16px] bg-[#A661FF] hover:opacity-90 transition-all w-full sm:w-[320px] md:w-[380px] lg:w-[487px] h-[60px] sm:h-[70px] lg:h-[90px] rounded-[40px] flex items-center justify-center mx-auto"
        >
          SIGN UP NOW FOR THE BIG REVEAL!
        </button>
      </div>

      {/* Final Heading Section */}
      <div
        className="mt-20 px-4 w-full max-w-[1346px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-medium leading-[42px] sm:leading-[56px] lg:leading-[72px] text-center"
      >
        <p>
          These Guys Have Made Millions Selling{" "}
          <span className="text-[#A661FF]">Ebooks, Videos, Content, Chatbots, And Other AI Products...</span>
          <br />
          With AISellers, You Can Do The Same (Even Better)
        </p>
      </div>
    </section>
  );
};

export default FinalCallToAction;
