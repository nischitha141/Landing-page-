export default function Testimonials() {
    const testimonials = [
      {
        name: "Sophia Reynolds",
        title: "Wellness Coach, Vitality Health",
        image: "/images/Avatar_1.png",
        quote:
          "FormPerfectAI has completely transformed my fitness routine. The AI-powered workouts keep me engaged, and the real-time form correction helps me stay injury-free.",
      },
      {
        name: "James Carter",
        title: "Marketing Director, Peak Performance",
        image: "/images/Avatar_2.png",
        quote:
          "I've tried countless fitness apps, but nothing comes close to FormPerfectAI. The personalized meal plans and progress tracking make it so easy to stay on track.",
      },
      {
        name: "Olivia Martinez",
        title: "HR Manager, Zenith Corp",
        image: "/images/Avatar_4.png",
        quote:
          "As a busy professional, I needed a smart and efficient way to work out. FormPerfectAI’s AI-driven recommendations and seamless tracking have made fitness effortless.",
      },
      {
        name: "Daniel Wong",
        title: "Product Manager, InnovateX",
        image: "/images/Avatar_3.png",
        quote:
          " The referral program is a game-changer ! Not only am I staying fit , but I’m also earning passive income by inviting friends. A win-win ! ",
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[#1F222A] text-center text-[48px] font-bold leading-[57.6px]">What Our Users Are Saying</h2>
          <p className="mt-2 text-[#4E525A] text-center text-[20px] font-medium leading-[24px]">
            Hear first-hand from our incredible community of customers.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6 ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p className="text-[#35383F] text-[15px] font-semibold leading-[26px]">“{testimonial.quote}”</p>
              <div className="flex items-center mt-12">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-[#35383F] text-[16px] font-bold leading-[28px] liga-off">{testimonial.name}</p>
                  <p className="text-[#35383F]  text-[12px] font-normal leading-[26px] liga-off">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  