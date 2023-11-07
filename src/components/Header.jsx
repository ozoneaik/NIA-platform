import back_icon from "../assets/images/back_icon.png";
import emtry_icon from "../assets/images/emtry.png";
import {useNavigate} from "react-router-dom";

function Header(){
    const navigate = useNavigate()

    return (
        <>
            <div className="d-flex justify-content-between align-items-center py-4 px-4">
                <div className='1' onClick={() => navigate(-1)} style={{
                    height:40,
                    width:40,
                    backgroundColor:'#EBF3ED',
                    borderRadius:12,
                    padding:'10px 10px',
                    textAlign:"center"
                }}>
                    <i className="fa-solid fa-chevron-left" style={{
                        fontSize:20,
                        color:'#0E572B'
                    }}></i>
                    {/*<img src={back_icon} alt=""/>*/}
                </div>
                <div className='fw-bold 2' style={{ fontSize: 20, textAlign: 'center' }}>เพิ่มแปลง</div>
                <div className='3'>
                    <img src={emtry_icon} alt="" style={{backgroundColor:"white"}}/>
                </div>
            </div>
        </>
    )
}

export default Header;