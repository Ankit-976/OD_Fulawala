import { close } from '../assets/icons/icons'

const Dropdown = (props) => {
  return (
    <div className='h-fit w-fit z-30 absolute top-2 right-5 px-5 py-7 backdrop-blur-3xl bg-white/50 flex flex-col gap-2.5 text-[1.3rem] rounded-xl'>
        <li className="list-none flex z-20 absolute right-0 top-0 justify-end">
            <img onClick={props.toggle} height="28" width="28" src={close}/>
        </li>
        <li className="list-none">Home</li>
        <li className="list-none">Plans</li>
        <li className="list-none">Contact</li>
    </div>
  )
}

export default Dropdown;
