/* eslint-disable no-unused-vars */
import { BASE_URL } from "../../../config"
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../components/Loader/Loader'
import Error from "../../components/Error/Error";
import { useState } from "react";
import Tabs from "./Tabs";
const DashBoard = () => {
  const {data,
    loading,
    error}=useFetchData(`${BASE_URL}/doctors/profile/me`);
  const [tab, setTab] = useState("overview")
  return (
    <section>
    <div className="max-w-[1170px] px-5 mx-auto">
        {
          loading && !error && <Loader/>
        }
        {
          error && !loading && <Error/>
        }
        {
          !loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab}/>
            <div className="lg:col-span-2">
              {data.isApproved=='pending' && (<div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                
                </div>
                )}
            </div>
          </div>
        )}
     
    </div></section>
  )
}

export default DashBoard