import design1 from '../assets/icons/icon-ux.svg'
import design2 from '../assets/icons/icon-ui.svg'
import design3 from '../assets/icons/icon-protot.svg'
import design4 from '../assets/icons/design-phone.svg'
import design5 from '../assets/icons/icon-web.svg'
import design6 from '../assets/icons/icon-atom.svg'
import figma from '../assets/icons/figma.svg'
import sketch from '../assets/icons/sketch.svg'
import lottie from '../assets/icons/lottie.svg'
import illuster from '../assets/icons/illuster.svg'
import designImg from '../assets/images/designImg.png'
import GeneralCard from '../ui/GeneralCard'

const Design = () => {
  return (
    <div id='design' className=' container mx-auto mb-[80px] '>
        <h1 className='title'>UI / UX design</h1>
        <div className=' grid grid-cols-2 gap-[150px] '>
            <div>
                <p className='text mb-[40px] '>Our company takes a human-centered approach to design</p>
                <div className="grid grid-cols-3 mb-[50px] gap-[15px] " >
                    <GeneralCard icon={design1} content={'UX'}/>
                    <GeneralCard icon={design2} content={'UI'}/>
                    <GeneralCard icon={design3} content={'Prototyping'}/>
                    <GeneralCard icon={design4} content={'Mobile Design'}/>
                    <GeneralCard icon={design5} content={'Web Design'}/>
                    <GeneralCard icon={design6} content={'Atomic Design'}/>
                </div>
                <p className="text-[38px] mb-[40px] text-[--second] font-semibold ">Technologies</p>
                
                <div className="flex gap-[60px] mb-[40px]">
                    <div className="flex justify-center flex-col ">
                        <img src={figma} alt="" className="w-[80px] " />
                        <p className="ml-[10px] text-[--second] text-[22px] font-bold ">Figma</p>
                    </div>
                    <div className="flex justify-center flex-col ">
                        <img src={sketch} alt="" className="w-[80px]" />
                        <p className="ml-[10px] text-[--second] text-[22px] font-bold ">Sketch</p>
                    </div>
                    <div className="flex justify-center flex-col ">
                        <img src={lottie} alt="" className="w-[50px] pb-[15px] " />
                        <p className=" text-[--second] text-[22px] font-bold ">Lottie</p>
                    </div>
                    <div className="flex justify-center flex-col ">
                        <img src={illuster} alt="" className="w-[80px] " />
                        <p className="ml-[10px] text-[--second] text-[22px] font-bold ">Illustrator</p>
                    </div>
                </div>
            </div>

            <div className=' flex justify-end h-full'>
                <img src={designImg} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Design