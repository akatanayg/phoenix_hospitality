
const Hero = () => (
  <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/hero.jpg')" }}>
    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-serif">Phoenix Residency</h1>
      <p className="mt-4">Feel the atmosphere of luxury</p>
      <div className="mt-6 flex space-x-2">
        <input type="date" className="p-2" />
        <input type="date" className="p-2" />
        <select className="p-2">
          <option>2 Guests</option>
          <option>3 Guests</option>
        </select>
        <button className="bg-black text-white px-4">Book Now</button>
      </div>
    </div>
  </section>
);

export default Hero;
            