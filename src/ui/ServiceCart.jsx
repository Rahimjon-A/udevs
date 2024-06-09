
const ServiceCart = ({icon, content}) => {
  return (
    <div className="bg-[--bg] rounded-lg p-[30px] h-[250px] " >
        <img src={icon} alt="icon" className=" w-[50px] " />
        <p className="mt-[40px] text-[--second] text-[28px] font-semibold " > {content} </p>
    </div>
  )
}

export default ServiceCart