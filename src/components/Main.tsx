const MainSection = () => {
  return (
    <section id="main" className="relative bg-cover bg-center text-white py-20">
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      <div className="container mx-auto text-center relative z-10 ">
        <div className="relative inline-block rounded-full p-1 bg-gradient-to-r from-pink to-blue">
          <img
            src="/images/me.png"
            alt="Apostolia Maria Sofianopoulou"
            className="mx-auto rounded-full w-40 h-40 object-cover "
          />
        </div>
        <h1 className="text-5xl font-semibold mt-6">
          APOSTOLIA MARIA SOFIANOPOULOU
        </h1>
        <h2 className="text-2xl text-white mt-2">SOFTWARE DEVELOPER</h2>
      </div>
    </section>
  );
};

export default MainSection;
