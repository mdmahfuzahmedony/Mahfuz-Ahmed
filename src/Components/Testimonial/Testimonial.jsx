import React from "react";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "John D. Alexon",
      role: "CEO, Tech Solutions",
      image: "https://via.placeholder.com/100x100/333/fff?text=User1",
      review:
        "The project was delivered on time and the quality exceeded our expectations. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Marketing Head",
      image: "https://via.placeholder.com/100x100/444/fff?text=User2",
      review:
        "Amazing UI/UX skills. Mahfuz transformed our messy website into a modern, user-friendly platform.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Founder, StartupX",
      image: "https://via.placeholder.com/100x100/555/fff?text=User3",
      review:
        "Great communication and problem-solving skills. He is a true professional in web development.",
      rating: 4,
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Product Manager",
      image: "https://via.placeholder.com/100x100/666/fff?text=User4",
      review:
        "I loved the creativity he put into the project. The animations and layout are just perfect.",
      rating: 5,
    },
  ];

  // স্টার জেনারেট করার ফাংশন
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={index < rating ? "#FF4D4D" : "none"}
        stroke={index < rating ? "#FF4D4D" : "#555"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ));
  };

  return (
    <section
      className="bg-[#0a0a0a] border  py-20 lg:px-12 overflow-hidden"
      id="testimonial"
    >
      <div className="max-w-[1500px] border-white mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* ============ LEFT SIDE: TEXT CONTENT ============ */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-left">
            <div>
              <span className="text-[#FF4D4D] font-bold tracking-widest uppercase text-sm">
                Testimonials
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
                What My Clients <br />
                <span className="text-gray-500">Say About Me</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed">
              I have worked with hundreds of clients from all around the world.
              Here is what some of them have to say about my work and
              dedication.
            </p>

            <div className="pt-4 flex justify-center lg:justify-start gap-8">
              {/* Stats */}
              <div>
                <h3 className="text-3xl font-bold text-white">200+</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">99%</h3>
                <p className="text-gray-500 text-sm">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* ============ RIGHT SIDE: STAGGERED CARDS (ZIG-ZAG) ============ */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Column 1 (Reviews 1 & 3) */}
              <div className="flex flex-col gap-6">
                {reviews.slice(0, 2).map((review) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    renderStars={renderStars}
                  />
                ))}
              </div>

              {/* Column 2 (Reviews 2 & 4) - Pushed Down (Zig-zag) */}
              <div className="flex flex-col gap-6 md:mt-16">
                {reviews.slice(2, 4).map((review) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    renderStars={renderStars}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Review Card
const ReviewCard = ({ review, renderStars }) => {
  return (
    <div className="group bg-[#050505] border border-white/10 rounded-2xl p-8 hover:border-[#FF4D4D] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,77,77,0.1)] hover:-translate-y-2 cursor-pointer relative">
      {/* Quote Icon Background */}
      <div className="absolute top-6 right-6 text-gray-800 opacity-50 group-hover:text-[#FF4D4D] group-hover:opacity-20 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
        </svg>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4 mb-5">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full border border-gray-700 group-hover:border-[#FF4D4D] transition-colors"
        />
        <div>
          <h3 className="text-white text-lg font-bold group-hover:text-[#FF4D4D] transition-colors">
            {review.name}
          </h3>
          <p className="text-gray-500 text-xs uppercase tracking-wide">
            {review.role}
          </p>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-400 text-sm leading-relaxed mb-5 relative z-10">
        "{review.review}"
      </p>

      {/* Stars */}
      <div className="flex gap-1">{renderStars(review.rating)}</div>
    </div>
  );
};

export default Testimonial;
