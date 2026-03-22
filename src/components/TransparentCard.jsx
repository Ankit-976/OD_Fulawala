const TransparentCard = (props) => {
  return (
    <div>
        <div className='working-Cards bg-transparent py-6 px-3 lg:w-55 lg:h-50 h-40 w-40 flex-col flex items-center gap-2.5'>
            <img src={props.image} className="w-35 lg:w-35" />
            <div className="font-bold text-center text-xl">
                {props.id}. {props.title}
            </div>
        </div>
    </div>
  )
}

export default TransparentCard
