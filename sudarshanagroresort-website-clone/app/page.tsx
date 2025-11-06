import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import VideoDialog from "@/components/VideoDialog";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Testimonial } from "@/types/types";

export default function Home() {
  const mainDivStyles = {
    backgroundImage: 'url("/SudarshanHome.jpg")',
  };

  const heroWords = ["Luxury Resort", "King Beds", "Deluxe Rooms"];

  const imageCards = [
    {
      name: "Twin Bedroom",
      price: 2500,
      link: "/",
      imgLink: "/room1.jpg",
    },
    {
      name: "King Bedroom",
      price: 2500,
      link: "/",
      imgLink: "/room2.jpg",
    },
  ];

  const facilitiesCards = [
    {
      imgLink: "/barbecue.png",
      title: "Barbecue",
      paragraph:
        "Enjoy tasty grilled food at our resort's barbecue. It's a great way to dine outdoors.",
    },
    {
      imgLink: "/powerBackup.png",
      title: "Power Backups",
      paragraph:
        "Enjoy uninterrupted comfort with reliable power backup facilities, even during outages.",
    },
    {
      imgLink: "/parking.png",
      title: "Free Parking",
      paragraph:
        "parking is complimentary , giving you peace of mind during your stay.",
    },
    {
      imgLink: "/resturant.png",
      title: "Riverside Resturant",
      paragraph:
        "At Sudarsan Agro Resort, enjoy riverside dining for a serene mealtime.",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      imgSrc: "https://sudarshanagroresort.com.np/img/home/testimonials/1.png",
      clientName: "Nirajan Dahal",
      clientTitle: "Biratnagar / Morang",
      clientTestimonial:
        "My stay at Sudarsan Agro Resort was nothing short of magical. From the serene ambiance to the delicious farm-to-table meals, every aspect exceeded my expectations.",
      stars: 4,
    },
    {
      imgSrc: "https://sudarshanagroresort.com.np/img/home/testimonials/4.png",
      clientName: "Nabin Bhattarai",
      clientTitle: "Biratnagar / Morang",
      clientTestimonial:
        "The local cuisine was fantastic and served by exceptionally friendly and helpful staff. The accommodations offered great value for the price, and the natural, green scenery by the river was truly breathtaking.",
      stars: 4,
    },
    {
      imgSrc: "https://sudarshanagroresort.com.np/img/home/testimonials/2.png",
      clientName: "Rimesh Bhattarai",
      clientTitle: "Inaruwa / Sunsari",
      clientTestimonial:
        "Sudarsan Agro Resort provided an unparalleled retreat into nature. The lush surroundings, combined with their top-notch service, made every moment a delight.",

      stars: 4,
    },
    {
      imgSrc: "https://sudarshanagroresort.com.np/img/home/testimonials/4.png",
      clientName: "Nabin Bhattarai",
      clientTitle: "Biratnagar / Morang",
      clientTestimonial:
        "The local cuisine was fantastic and served by exceptionally friendly and helpful staff. The accommodations offered great value for the price, and the natural, green scenery by the river was truly breathtaking.",
      stars: 4,
    },
    {
      imgSrc: "https://sudarshanagroresort.com.np/img/home/testimonials/1.png",
      clientName: "Nirajan Dahal",
      clientTitle: "Biratnagar / Morang",
      clientTestimonial:
        "My stay at Sudarsan Agro Resort was nothing short of magical. From the serene ambiance to the delicious farm-to-table meals, every aspect exceeded my expectations.",
      stars: 4,
    },
    {
      imgSrc: "https://sudarshanagroresort.com.np/img/home/testimonials/2.png",
      clientName: "Rimesh Bhattarai",
      clientTitle: "Inaruwa / Sunsari",
      clientTestimonial:
        "Sudarsan Agro Resort provided an unparalleled retreat into nature. The lush surroundings, combined with their top-notch service, made every moment a delight.",

      stars: 4,
    },
    {
      imgSrc: "https://sudarshanagroresort.com.np/img/home/testimonials/4.png",
      clientName: "Nabin Bhattarai",
      clientTitle: "Biratnagar / Morang",
      clientTestimonial:
        "The local cuisine was fantastic and served by exceptionally friendly and helpful staff. The accommodations offered great value for the price, and the natural, green scenery by the river was truly breathtaking.",
      stars: 4,
    },
    {
      imgSrc: "https://sudarshanagroresort.com.np/img/home/testimonials/2.png",
      clientName: "Rimesh Bhattarai",
      clientTitle: "Inaruwa / Sunsari",
      clientTestimonial:
        "Sudarsan Agro Resort provided an unparalleled retreat into nature. The lush surroundings, combined with their top-notch service, made every moment a delight.",

      stars: 4,
    },
    {
      imgSrc: "https://sudarshanagroresort.com.np/img/home/testimonials/1.png",
      clientName: "Nirajan Dahal",
      clientTitle: "Biratnagar / Morang",
      clientTestimonial:
        "My stay at Sudarsan Agro Resort was nothing short of magical. From the serene ambiance to the delicious farm-to-table meals, every aspect exceeded my expectations.",
      stars: 4,
    },
  ];

  return (
    <main className="">
      <section
        style={mainDivStyles}
        className="pt-[170px] pb-[105px] bg-cover bg-bottom-left  "
      >
        <div className="flex items-start flex-col gap-4 text-white font-bold pt-[50px]   max-w-[1170px] mx-auto   mb-20 pl-[25px]  ">
          <h3 className="font-loraItalic text-lg font-light">
            {" "}
            Luxury hotel & Resort Lifestyle{" "}
          </h3>
          <h1 className="text-2xl font-poppins sm:text-7xl sm:w-full">
            Comfort{" "}
            <span className="font-playfairDisplay italic font-light">
              <TypingText
                text={heroWords}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-white bg-white"
                // textColors={["#3b82f6", "#8b5cf6", "#06b6d4"]}
                variableSpeed={{ min: 50, max: 120 }}
              />
            </span>{" "}
            <br />
            for your Vacation
          </h1>
          <button className="mt-4">
            <Link
              href={"/"}
              className="font-light font-poppins bg-[#008000] px-6 py-3 block hover:bg-[#222222] transition duration-500"
            >
              Book Now
            </Link>
          </button>
        </div>
      </section>

      <section className="py-[100px] px-[21px] flex items-center flex-col gap-6 lg:flex-row max-w-[1170px] mx-auto">
        <div className="flex-1">
          <div className="flex flex-col gap-5">
            <span className="font-poppins text-4xl font-extrabold">
              Welcome to
            </span>
            <h2 className="font-playfairDisplay italic text-[#C19B76] text-4xl font-extrabold">
              Sudarshan Agro Resort,{" "}
            </h2>
            <span className="text-[#797979]">
              Agro Tourism Resort near Biratnagar.
            </span>
          </div>
          <p className="font-poppins italic leading-8 text-[#797979] py-4 text-xl">
            Welcome to Sudarshan Park and Resort! Here, peacefulness mixes with
            Nepali customs. Situated in lush greenery, our haven calls you to
            relax and enjoy Nepal's essence. Immerse yourself in our lively
            culture, enjoying real food and fun activities. With cozy rooms and
            fair prices, we promise your stay will be unforgettable. Come,
            relax, and immerse yourself in the beauty of Nepal, right here with
            us. Welcome to a unique getaway!
          </p>
          <button>
            <Link
              href={"/"}
              className="font-light font-poppins bg-[#008000] px-16 py-3 block text-white hover:bg-[#222222] transition duration-500"
            >
              About
            </Link>
          </button>
        </div>
        <div>
          <Image
            src={"/SudarshanAbout.jpg"}
            alt="img"
            width={500}
            height={600}
            className="rounded-2xl"
          />
        </div>
      </section>

      <section className=" bg-[#F4F4F4] ">
        <div className="py-[100px] px-[21px] flex items-center flex-col gap-6 max-w-[1170px] mx-auto ">
          <div className="flex justify-between w-full flex-wrap">
            <div>
              <h2 className="font-poppins text-4xl font-extrabold">
                Our Accomodation
              </h2>
              <p className="font-playfairDisplay italic leading-8 text-[#797979] py-4 text-xl after:ml-7  after:h-0.5 after:w-14 after:inline-block after:bg-[#C19B76]">
                Pick a room that best suits your choice and budget
              </p>
            </div>
            <button>
              <Link
                href={"/"}
                className="font-light border border-black text-black px-8 py-3 block  hover:text-white font-poppins hover:bg-[#505050] transition duration-500"
              >
                View all rooms
              </Link>
            </button>
          </div>

          <div className="image_cards flex flex-col sm:flex-row gap-8">
            {imageCards.map((item, key) => {
              return (
                <div className="relative group overflow-hidden" key={key}>
                  <Image
                    src={item.imgLink}
                    alt="room1"
                    width={1000}
                    height={1000}
                    className="block"
                  />
                  <div className="absolute inset-0 group-hover:opacity-0 transition-all duration-700  flex items-end ">
                    <div className=" p-4 font-poppins text-white bg-black/0 transform transition-all duration-500 ">
                      <h2 className="font-bold text-xl mb-1 font-poppins">
                        {item.name}
                      </h2>
                      <span className="text-sm bg-[#008000]  px-3 py-1 inline-block">
                        Starting From NPR {item.price}
                      </span>
                    </div>
                  </div>
                  <div className="absolute translate-y-full group-hover:translate-y-0 inset-0 group-hover:bg-black/60 transition-all duration-700  flex items-center justify-center text-center ">
                    <div className=" p-4 font-poppins text-white bg-black/0 transform transition-all duration-500 ">
                      <h2 className="font-bold text-xl mb-1 font-poppins">
                        {item.name}
                      </h2>
                      <Link
                        href={item.link}
                        className="text-base  bg-[#008000] hover:bg-[#242424] transition duration-500 px-3  leading-7 py-1 block "
                      >
                        Starting From NPR <br /> {item.price}
                      </Link>
                      <button>
                        <Link
                          href={item.link}
                          className="font-light underline underline-offset-8 border border-none  mt-12  px-12 py-3 block  hover:text-white font-poppins transition duration-500 text-xl"
                        >
                          Book Now
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="py-[100px] px-[21px] flex items-center flex-col gap-6 max-w-[1170px] mx-auto ">
          <div className="flex justify-center items-center w-full flex-wrap">
            <div className="text-center flex items-center justify-center flex-col">
              <h2 className="font-poppins text-4xl font-extrabold">
                Facilities
              </h2>
              <p className="  after:h-0.5 after:w-14 after:inline-block after:bg-[#C19B76]"></p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilitiesCards.map((items, key) => {
              return (
                <div
                  key={key}
                  className="px-4 py-12 border-[#E0E0E0] text-center font-poppins items-center justify-center flex flex-col gap-4 border"
                >
                  <Image
                    src={items.imgLink}
                    width={50}
                    height={50}
                    alt={items.imgLink}
                  />
                  <h3 className="text-xl font-bold">{items.title}</h3>
                  <p className="font-light text-[#787878] text-sm">
                    {items.paragraph}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-[113px] text-center flex flex-col gap-6 bg-bottom  bg-fixed bg-no-repeat bg-cover "
        style={{ backgroundImage: "url('/1.jpg')" }}
      >
        <h2 className=" text-4xl md:text-6xl  font-bold text-white">
          Enjoy Agro Tourism
        </h2>
        <p className="text-4xl  md:text-6xl text-[#008000]">#VisitKoshi2025</p>

        <div>
          <VideoDialog />
        </div>
      </section>

      <section className="py-[113px] px-[21px] bg-[#EEEEEE]">
        <div className="text-center">
          <h2 className="font-poppins text-3xl font-extrabold">Testimonials</h2>
          <p className="  after:h-0.5 after:w-14 after:inline-block after:bg-[#008000]"></p>
        </div>
        <div className="max-w-6xl mx-auto">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
    </main>
  );
}
