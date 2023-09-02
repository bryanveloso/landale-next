// import { SmallCloseIcon, SmallFullScreenIcon } from '~/components'

/**
 * Browser source size should be 432x312.
 */
const HorizontalCamera = () => {
  return (
    <div className="flex flex-col w-[384px] m-6 bg-[#343434] shadow-black/50 shadow-xl rounded-xl ring-1 ring-offset-0 ring-inset ring-white/20">
      <div className="flex-auto flex justify-center items-center gap-2 p-2 px-4 text-sm text-white/25 font-bold">
        {/* <SmallCloseIcon className="w-3 h-3" /> */}
        {/* <SmallFullScreenIcon className="w-3 h-3" /> */}
        <div className="flex-auto text-center">Camera</div>
      </div>
      <div className="aspect-video m-2 mt-0 bg-[#1E1E1E] rounded-lg"></div>
    </div>
  )
}

export default HorizontalCamera
