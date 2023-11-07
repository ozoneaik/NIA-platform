import Layout from "../components/Layout.jsx";
import ImgHeader from '../assets/images/BackgroundHeader.png'
import Icon_Brand from '../assets/images/icon.png'
import IconBrand from "../assets/images/IconBrand.jsx";

import email_icon from '../assets/images/email_icon.png'
import password_icon from '../assets/images/password_icon.png'
import login_icon from '../assets/images/login_icon.png'
import {Link} from "react-router-dom";
import LoginHeader from "../components/LoginHeader.jsx";
import Footer from "../components/Footer.jsx";

function Login(){
    return (
        <>
            <div className="Container">
                <LoginHeader/>
                <Layout>
                    <div className='d-block justify-content-center align-items-center'>
                        <div className='Brand d-flex justify-content-center align-items-center mt-5'>
                            <img src={Icon_Brand} alt=""/>
                            &nbsp;
                            <IconBrand/>
                        </div>
                        <h3 className='fw-bold pt-5 text-center' style={{fontSize:20}}>เข้าสู่ระบบ</h3>
                        <div className='pt-1'>
                            <form action="">
                                <div className="form-group mb-3">
                                    <label className='text-muted form-label' style={{fontSize:14}}>อีเมล</label>
                                    <div className='input-group'>
                                        <div className='input-group-text' id="">
                                            <img src={email_icon} alt=""/>
                                        </div>
                                        <input className='form-control' type="email" placeholder="ป้อนอีเมล" />
                                    </div>
                                </div>
                                <div className="form-group mb-2">
                                    <label className='text-muted form-label' style={{fontSize:14}}>รหัสผ่าน</label>
                                    <div className='input-group'>
                                        <div className='input-group-text' id="">
                                            <img src={password_icon} alt=""/>
                                        </div>
                                        <input className='form-control' type="password" placeholder="ป้อนรหัสผ่าน" />
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <input type="checkbox" className='form-check-input'/>
                                        &nbsp;
                                        <span className='text-muted' style={{fontSize:14}}>จดจำรหัสผ่าน</span>
                                    </div>
                                    <span className='font_sec_primary' style={{fontSize:14}}>ลืมรหัสผ่าน?</span>
                                </div>
                                <div className="d-grid gap-2 mt-4 ">
                                    <Link to='/add-plot' className="btn btn-success bg_primary d-flex justify-content-center align-items-center" type="button">
                                        <span style={{fontSize:18}}>เข้าสู่ระบบ</span>
                                        &nbsp;&nbsp;
                                        <img src={login_icon} alt="" style={{paddingTop:4}}/>
                                    </Link>
                                </div>
                            </form>

                            <div className='d-flex justify-content-center mt-3' style={{fontSize:14}}>
                                <span className='text-muted'>คุณยังไม่มีบัญชี</span>
                                &nbsp;
                                <Link to='/add-plot' className='font_sec_primary text-decoration-none'>สร้างบัญชี</Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Footer/>
            </div>


        </>
    )
}

export default Login;