import BgImage from '../assets/bg-image.png';

const Accessories = () => {
  return (
    <div className="relative w-full h-[600px] px-6 md:px-12 py-16">
      {/* Background Image */}
      <img
        src={BgImage}
        alt="Accessories Background"
        className="w-full h-full object-cover"
      />

      {/* Overlayed Text */}
      <h2 className="absolute inset-0 flex top-70  items-center justify-center text-white text-9xl leading-10 font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
        Accessories
      </h2>
    </div>
  );
};

export default Accessories;
