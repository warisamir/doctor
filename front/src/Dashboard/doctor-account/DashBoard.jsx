import { BASE_URL } from "../../../config"
import {useGetProfile} from '../../hooks/useFetchData'
const DashBoard = () => {
  // const {data,loading,error}=useGetProfile(`${BASE_URL}/doctors/prodile/me`)
  return (
    <div className="max-w-[1170px] px-5 mx-auto">
      <div className="grid md:grid-cols-3 gap-10"> 
      <div className="pb-[50px] px-[30px] rounded-md">
        
      </div>
      </div>
    </div>
  )
}

export default DashBoard