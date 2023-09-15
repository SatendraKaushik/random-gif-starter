import Tag from "./components/Tag"
import Random from "./components/Random"
export default function App() {
  return (
    <div className="w-full flex flex-col h-screen background overflow-x-hidden relative items-center">
      <h1 className="bg-white  text-center mt-[40px]   px-10 py-2 text-3xl  rounded-lg
      font-bold ">Random Gifs</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
