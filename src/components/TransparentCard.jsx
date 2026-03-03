const TransparentCard = (props) => {
  return (
    <div>
        <div className='bg-transparent py-6 px-3 w-50 h-50  flex-col flex items-center gap-2.5'>
            <img src={props.image} className="w-35" />
            <div className="font-bold text-center">
                {props.id}. {props.title}
            </div>
        </div>
    </div>
  )
}

export default TransparentCard
