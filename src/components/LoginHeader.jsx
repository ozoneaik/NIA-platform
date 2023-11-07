import ImgHeader from "../assets/images/BackgroundHeader.png";

function LoginHeader(){
    return (
        <>
            <div className="HeaderBG">
                <img src={ImgHeader} style={{ borderRadius: '0px 0px 100px 0px', height: 200, width: '100%', objectFit: "cover" }} alt="" />
            </div>
        </>
    )
}

export default LoginHeader;