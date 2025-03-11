import Header from '../components/base/header'
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div>
        <Header/>
        <div className='py-[30px] px-[120px]'>
          <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout