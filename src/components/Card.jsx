import { flower } from "../assets/icons/icons";
const Card = (props) => {
  return (
   <div className="feature-card group h-50 w-50 hover:scale-100">
    <div className="bg-blue-50 py-6 px-3 w-50 h-50 
                rounded-3xl flex flex-col items-center gap-2.5
                shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                border border-[#F3E8DA]
                transition-transform duration-700 ease-out
                group-hover:scale-95">
      <img src={props.image} className="w-25 transition-transform duration-700 ease-out group-hover:scale-120" />
      <div className="font-semibold text-center text-[1.3rem]">
        {props.title}
      </div>
    </div>
   </div> 
  )
}

export default Card
