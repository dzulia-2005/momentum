import Cards from "../components/cards/view";
import DropdownMenu from "../components/dropDown/view";



const Home = () => {
  return (
    <div>
        <p className="text-[34px] font-semibold">დავალებების გვერდი</p>
        <DropdownMenu/>
        <Cards/>
    </div>
  )
}

export default Home