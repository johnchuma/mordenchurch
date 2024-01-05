const CustomButton = ({text,textColor,backgroundColor}) => {
    return ( <div>
            <div className={`py-3 px-4 rounded-full ${backgroundColor??"bg-indigo-600"} ${textColor??"text-white"}  text-sm`}>{text}</div>
    </div> );
}
 
export default CustomButton;