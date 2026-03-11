import { lenis } from "../App";
import { close } from "../assets/icons/icons";

const Dropdown = (props) => {
  const scrollTo = (section) => {
    lenis.scrollTo(`#${section}`, {
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
  };

  return (
    <div className="h-fit w-fit z-30 absolute top-2 right-5 px-5 py-7 backdrop-blur-3xl md:hidden bg-white/50 flex flex-col gap-2.5 text-[1.3rem] rounded-xl">
      <li className="list-none flex z-20 absolute right-0 top-0 justify-end">
        <img onClick={props.toggle} height="28" width="28" src={close} />
      </li>
      <li onClick={() => scrollTo("hero")} className="list-none">
        Home
      </li>
      <li onClick={() => scrollTo("features")} className="list-none">
        Features 
      </li>
      <li onClick={() => scrollTo("plans")} className="list-none">
        Plans
      </li>
      <li onClick={() => scrollTo("contact")} className="list-none">
        Contact
      </li>
    </div>
  );
};

export default Dropdown;
