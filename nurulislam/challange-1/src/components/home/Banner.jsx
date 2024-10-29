import Navigation from "../common/Navigation";

function Banner() {
  return (
    <div className="bg-[url('/hero.png')] bg-auto bg-center w-[100%] h-auto">
      <Navigation />
      <div className="left w-[994px] mx-auto ">
        <h3 className="text-[60px]  font-[700] text-center">
          Transform your workflow with cutting-edge solutions from FYTOBYTE
          LIMITED.
        </h3>
        <p className="text-[32px]  font-[400] text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          sapiente suscipit amet optio quia fuga rerum ex cupiditate maiores,
          perferendis blanditiis, quam a.
        </p>
        <div className="hero-buttons"></div>
      </div>
      <div className="bottom text-center">
        <img src="/hero-img.png" alt="" className="inline-block" />
      </div>
    </div>
  );
}

export default Banner;
