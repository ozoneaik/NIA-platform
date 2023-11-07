import React, {useRef,useState} from "react";
import {useNavigate} from 'react-router-dom'; // นำเข้า hook useLocation จาก react-router-dom
import '../assets/style/GoogleMap.css'; // ระบุชื่อไฟล์ CSS ที่คุณสร้าง
import {
    GoogleMap,
    DrawingManager,
    useJsApiLoader,
    Marker, Autocomplete
} from '@react-google-maps/api';
import Layout from "../components/Layout";
import garden from '../assets/images/garden.png'
import serch_icon from '../assets/images/search_icon.png'
import Header from "../components/Header";
import login from "./Login.jsx";




const mapContainerStyle = {
    height: '70vh',
    width: '100%',
};

const center = {
    lat: 18.759992307103566,
    lng: 99.03768321970126
};

const libraries = ['drawing'];

// เริ่มต้นใช้งาน google map



// เช็ค Drawing
const onLoad = (drawingManager) => {
    console.log("DrawingManager = " + drawingManager);
};



// เก็บพิกัด lat,lng ที่ mark ในแผนที่
const onMarkComplete = (polygon) => {
    console.log("Lat = " + polygon.getPosition().lat(), ' Lng = ' + polygon.getPosition().lng());

};

const MapPlot = () => {
    const [searchResult, setSearchResult] = useState('')

    const originRef = useRef()
    console.log("originRef: " + originRef)


    const [position, setPosition] = useState({ lat: 0, lng: 0 });



    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD1Gj1tyD-0EJiyKB2X9BtekJgsW-MAoSU",
        libraries: ['places','drawing'],

    });

    function onLoad(autocomplete) {
        setSearchResult(autocomplete);
    }
    function onPlaceChanged() {
        if (searchResult != null) {
            //variable to store the result
            const place = searchResult.getPlace();
            //variable to store the name from place details result
            const name = place.name;
            //variable to store the status from place details result
            const status = place.business_status;
            //variable to store the formatted address from place details result
            const formattedAddress = place.formatted_address;

            const Lat = place.geometry.location.lat();
            const Lng = place.geometry.location.lng();
            // console.log(place);
            //console log all results
            console.log(`Name: ${name}`);
            console.log(`Business Status: ${status}`);
            console.log(`Formatted Address: ${formattedAddress}`);
            console.log(`Lat: ${Lat}`);
            console.log(`Lng: ${Lng}`);
        } else {
            alert("Please enter text");
        }
    }




    return (
        <div className="Container">
            <Header/>

            {isLoaded ? (
                <div style={{borderRadius:20}}>
                    <GoogleMap
                        id=""
                        mapContainerStyle={mapContainerStyle}
                        zoom={19}
                        center={center}
                        options={{
                            mapTypeId: "satellite",
                            zoomControl: true,
                            fullscreenControl: false,
                            streetViewControl: false,
                        }}
                    >

                    <DrawingManager
                        onLoad={onLoad}
                        onMarkerComplete={onMarkComplete}
                        options={{
                            drawingControl: true,
                            drawingControlOptions: {
                                drawingModes: ['marker'],
                                position: window.google.maps.ControlPosition.BOTTOM_LEFT,
                            },
                        }}

                    />
                        <Marker position={center}/>


                    </GoogleMap>


                    <div className='search' style={{padding:'20px',borderRadius:'40px 40px 0px 0px'}}>
                        <div className='serch-box'>
                            <p className='form-control'>{position.lat}, {position.lng}</p>
                            {/*<Autocomplete>*/}
                            {/*    <div className='input-group'>*/}
                            {/*        <div style={{ borderRight: "none" }} className='input-group-text' id="">*/}
                            {/*            <img src={serch_icon} alt="" />*/}
                            {/*        </div>*/}
                            {/*        <input*/}
                            {/*            className='form-control'*/}
                            {/*            type="text"*/}
                            {/*            placeholder='ระบุ'*/}
                            {/*            style={{ borderLeft: "none" }}*/}
                            {/*            ref={originRef}*/}
                            {/*            onChange={handleAutocompleteChange}*/}
                            {/*            id='pac-input'*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*</Autocomplete>*/}
                            <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
                                <input
                                    type="text"
                                    placeholder="Search for Tide Information"
                                    style={{
                                        boxSizing: `border-box`,
                                        border: `1px solid transparent`,
                                        width: `240px`,
                                        height: `32px`,
                                        padding: `0 12px`,
                                        borderRadius: `3px`,
                                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                        fontSize: `14px`,
                                        outline: `none`,
                                        textOverflow: `ellipses`
                                    }}
                                />
                            </Autocomplete>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default MapPlot;
