
import Card from "./Card";

const FeaturedSection = ({ data }) => {
  const { heading, description, hotels,btntext } = data;

  return (
    <section className="py-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-black">{heading}</h2>

      {/* Description with <br /> */}
      <p className="text-gray-500 max-w-2xl font-semibold mx-auto mt-2">
        {description.map((line, index) => (
          <span key={index}>
            {line}
            {index < description.length - 1 && <br />}
          </span>
        ))}
      </p>

      {/* Cards */}
      <div className="mt-10 grid md:grid-cols-3 gap-8 w-[95%] mx-auto items-start">
        {hotels.map((hotel) => (
          <Card key={hotel.id} hotel={hotel} btntext={btntext} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
