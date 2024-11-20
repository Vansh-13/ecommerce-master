import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

const TST =()=>{
    const navigate = useNavigate();
    const handleToast = () =>{
        toast.success("fellings good",{
            position:"top-center",
        });
        navigate("/ts2");
    }
    return(
        <>
            <div>
                <button onClick={handleToast}>Toast</button>
            </div>
        </>
    )
}
export default TST;