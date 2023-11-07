import FooterImag from "../assets/images/footer.png";

function Footer(){
    return (
        <>
            <div className='Footer'>
                <img src={FooterImag} style={{width:'100%'}} className='footer-img' alt="" />
            </div>
        </>
    )
}

export default Footer;