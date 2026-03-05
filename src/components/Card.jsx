import { flower } from "../assets/icons/icons";
const Card = (props) => {
  return (
   <div className="feature-card group lg:h-50 lg:w-50 lg:hover:scale-100">
    <div className="bg-blue-50 py-6 px-3 lg:w-50 lg:h-50 h-40 w-40
                rounded-3xl flex flex-col items-center gap-2.5
                shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                border border-[#F3E8DA]
                transition-transform duration-700 ease-out
                lg:group-hover:scale-95">
      <img src={props.image} className="lg:w-25 w-15 transition-transform duration-700 ease-out lg:group-hover:scale-120" />
      <div className="font-semibold text-center lg:text-[1.3rem] text-[1.1rem]">
        {props.title}
      </div>
    </div>
   </div> 
  )
}

export default Card
