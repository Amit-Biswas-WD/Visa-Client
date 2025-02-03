import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const AddVisaPage = () => {
  const value = [
    {
      id: 1,
      link: "/unitedStates",
      title: "United States",
      img: "https://i.ibb.co.com/5NdxdWv/United-States.jpg",
      c_img: "https://i.ibb.co.com/rRDn5Vhf/United-States.jpg",
    },
    {
      id: 2,
      title: "Australia",
      link: "/australia",
      img: "https://i.ibb.co.com/Pv9Ffmw6/Australia.jpg",
      c_img: "https://i.ibb.co.com/mrC3PbTd/australia.jpg",
    },
    {
      id: 3,
      title: "Dubai",
      link: "/dubai",
      img: "https://i.ibb.co.com/nqSH2DF7/Dubai.jpg",
      c_img: "https://i.ibb.co.com/9mDmkLMc/dubai.jpg",
    },
    {
      id: 4,
      title: "Los Angeles",
      link: "/losAngeles",
      img: "https://i.ibb.co.com/23SWTkTc/Los-Angeles.jpg",
      c_img: "https://i.ibb.co.com/ymnQTBtD/Los-Angeles.jpg",
    },
    {
      id: 5,
      title: "India",
      link: "/india",
      img: "https://i.ibb.co.com/Zp7SzM0Q/india.jpg",
      c_img: "https://i.ibb.co.com/LdVcssVK/India.jpg",
    },
    {
      id: 6,
      title: "Dubai",
      link: "/dubai",
      img: "https://i.ibb.co.com/nqSH2DF7/Dubai.jpg",
      c_img: "https://i.ibb.co.com/9mDmkLMc/dubai.jpg",
    },
  ];

  return (
    <div className="mt-20">
      <div className="relative">
        {/* Background Section */}
        <div
          className="bg-cover bg-center p-6 h-[340px] text-center text-yellow-400"
          style={{
            backgroundImage: "url('https://i.ibb.co/zh2LVgL2/abstract1.png')",
          }}
        >
          <h2 className="text-2xl font-semibold flex justify-center items-center gap-2 text-black">
            <span className="text-red-800">/</span> Countries we offer
          </h2>
          <h2 className="text-4xl font-bold mt-2">
            Countries We Support <br /> for Immigration.
          </h2>
        </div>

        <Swiper
          className="absolute -top-28 container mx-auto"
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          loopedSlides={7}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {value.map((value) => (
            <SwiperSlide key={value.id}>
              <div className="relative h-[310px] border border-gray-300 shadow-xl rounded-lg">
                <Link to={`${value.link}`}>
                  <img
                    src={value.img}
                    alt="India"
                    className="w-60 h-40 mb-10 shadow-lg rounded-t-md transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </Link>
                <img
                  src={value.c_img}
                  alt="India Map"
                  className="w-14 h-14 rounded-full shadow-lg border border-gray-300 absolute top-40 right-27 transform translate-x-1/2 -translate-y-1/2"
                />
                <div className="text-center items-center text-gray-600">
                  <h2 className="text-xl font-bold my-2">{value.title}</h2>
                  <p className="text-base font-normal pb-1">
                    Fusce pretium sem <br /> ism the eget mattis.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AddVisaPage;
