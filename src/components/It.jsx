import design1 from '../assets/icons/icon-ux.svg'
import design2 from '../assets/icons/icon-ui.svg'
import design3 from '../assets/icons/icon-arch.svg'
import design4 from '../assets/icons/icon-devop.svg'
import design5 from '../assets/icons/icon-web.svg'
import design6 from '../assets/icons/icon-atom.svg'
import designImg from '../assets/images/it.svg'
import GeneralCard from '../ui/GeneralCard'

const It = () => {
  return (
    <div id='it' className=' container mx-auto mb-[80px] '>
    <h1 className='title'>IT consulting</h1>
    <div className=' grid grid-cols-2 gap-[150px] '>
        <div>
            <p className='text mb-[40px] '>We can improve the qualifications of your employees thereby increasing the efficiency of your company</p>
            <div className="grid grid-cols-3 mb-[50px] gap-[15px] " >
                <GeneralCard icon={design1} content={'UX'}/>
                <GeneralCard icon={design2} content={'UI'}/>
                <GeneralCard icon={design3} content={'Prototyping'}/>
                <GeneralCard icon={design4} content={'Mobile Design'}/>
                <GeneralCard icon={design5} content={'Web Design'}/>
                <GeneralCard icon={design6} content={'Atomic Design'}/>
            </div>
        </div>

        <div className=' flex justify-end h-full'>
            <img src={designImg} alt="image" />
        </div>
    </div>
</div>
  )
}

export default It