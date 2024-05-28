/* eslint-disable react/prop-types */

const Error = ({errMesage}) => {
  return (
    <div className="flex  items-center justify-center w-full h-full">
        <h3 className="text-headingColor text-[20px] leading-[30px] font-semibold">{errMesage}</h3>
    </div>
  )
}

export default Error