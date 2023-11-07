import Layout from "../components/Layout.jsx";
import confirm_icon from '../assets/images/confirm_icon.png'
import map_icon from '../assets/images/map_icon.png'
import {Link} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function AddPlot() {
      return (
          <>
              <div className='Container'>
                  <Header/>
                  <Layout>
                      <form action="">
                          <div className="form-group mb-2">
                              <label className='text-muted form-label' style={{fontSize:14}}>ชื่อแปลง</label>
                              <input className='form-control' type="text" placeholder='ระบุชื่อแปลง'/>
                          </div>
                          <div className="form-group mb-2">
                              <label className='text-muted form-label' style={{fontSize:14}}>พิกัดแปลง</label>
                              <div className='input-group'>
                                  <input className='form-control' type="text" placeholder='ระบุพิกัดแปลง' style={{borderRight:"none"}}/>
                                  <div className='input-group-text' id="" style={{borderLeft:"none"}}>
                                      <Link to='/map-plot'><img src={map_icon} alt=""/></Link>
                                  </div>
                              </div>
                          </div>

                          <div className="col-12">
                              <div className="form-group mb-2">
                                  <label className='text-muted form-label' style={{fontSize:14}}>ขนาดพื้นที่</label>
                                  <div className="row">
                                      <div className="col-6">
                                          <div className='input-group'>
                                              <input className='form-control' type="number" placeholder='ระบุ' style={{borderRight:"none"}}/>
                                              <div style={{borderLeft:"none"}} className='input-group-text' id="">ไร่</div>
                                          </div>
                                      </div>
                                      <div className="col-6">
                                          <div className='input-group'>
                                              <input className='form-control' type="number" placeholder='ระบุ' style={{borderRight:"none"}}/>
                                              <div className='input-group-text' style={{borderLeft:"none"}} id="">ตร.ม.</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="form-group mb-2">
                              <label className='text-muted form-label' style={{fontSize:14}}>จำนวนต้น</label>
                              <div className='input-group'>
                                  <input className='form-control' type="number" placeholder='ระบุจำนวนต้น' style={{borderRight:"none"}}/>
                                  <div className='input-group-text' id="" style={{borderLeft:"none"}}>ต้น</div>
                              </div>
                          </div>
                          <div className="d-grid gap-2" style={{marginTop:30}}>
                              <button className="btn btn-success bg_primary d-flex justify-content-center align-items-center" type="button">
                                  <img src={confirm_icon} alt="" style={{paddingTop:4}}/>
                                  &nbsp;&nbsp;
                                  <span style={{fontSize:18}}>ตกลง</span>
                              </button>
                          </div>
                      </form>
                  </Layout>
                  <Footer/>
              </div>

          </>
      )
}

export default AddPlot