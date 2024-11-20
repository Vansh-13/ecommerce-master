import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const TST2 =()=>{
    // const navigate = useNavigate();
    // const handleToast = () =>{
    //     toast.success("fellings good",{
    //         position:"top-center",
    //     });
    //     navigate("/tost2");
    // }
    return(
        <>
            <div>
                {/* <button onClick={handleToast}>Toast</button> */}
                <h1>Hello Toaster</h1>
            </div>
        </>
    )
}
export default TST2;