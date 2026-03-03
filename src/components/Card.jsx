import { flower } from "../assets/icons/icons";
const Card = (props) => {
  return (
    <div className='bg-blue-50 py-6 px-3 w-50 h-50 rounded-3xl flex-col flex items-center gap-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#F3E8DA]'>
      <img src={props.image} className="w-25" />
      <div className="font-semibold text-center text-[1.3rem]">
        {props.title}
      </div>
    </div>
  )
}

export default Card
