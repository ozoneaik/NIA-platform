import FooterImag from '../assets/images/footer.png'
import ImgHeader from "../assets/images/BackgroundHeader.png";
import back_icon from '../assets/images/back_icon.png'
import emtry_icon from '../assets/images/emtry.png'
import {useLocation, useNavigate} from 'react-router-dom'; // นำเข้า hook useLocation จาก react-router-dom

const Layout = ({children}) => {
    const location = useLocation(); // ใช้ hook useLocation เพื่อรับข้อมูลเกี่ยวกับ route ปัจจุบัน
    const navigate = useNavigate();

    return (
        <>
            <div className='container'>
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout