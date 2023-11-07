import {
    DrawingManager,
    GoogleMap,
    LoadScript,
    Marker,
    Polygon,
    useJsApiLoader,
    useLoadScript
} from "@react-google-maps/api";
import React, {useCallback, useRef, useState} from "react";

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 18.898329,
    lng: 99.013295
};

const libraries = ['places', 'drawing']
const apiKey = 'AIzaSyD1Gj1tyD-0EJiyKB2X9BtekJgsW-MAoSU';
const TestMap = () => {
    let { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
        libraries
    })

    /* const [map, setMap] = useState(null)

     const onLoad = React.useCallback(function callback(map) {
       // This is just an example of getting and using the map instance!!! don't just blindly copy!
       const bounds = new window.google.maps.LatLngBounds(center);
       map.fitBounds(bounds);

       setMap(map)
     }, [])

     const onUnmount = React.useCallback(function callback(map) {
       setMap(null)
     }, [])*/

    /*const setPolygon = (e) => {
      let location = e.latLng;
      console.log('location >>> ', location)
      // path.push({lng: location.lng(), lat: location.lat()})
      path.push({lat: location.lat(), lng: location.lng()})
      setPath(path)
      console.log("path >>>> ", path)
    }

    const onEdit = useCallback(() => {
      if (polygonRef.current) {
        const nextPath = polygonRef.current
          .getPath()
          .getArray()
          .map(latLng => {
            return { lat: latLng.lat(), lng: latLng.lng() };
          });
        setPath(nextPath);
      }
    }, [setPath]);

    const onLoadPolygon = useCallback(
      polygon => {
        polygonRef.current = polygon;
        const path = polygon.getPath();
        listenersRef.current.push(
          path.addListener("set_at", onEdit),
          path.addListener("insert_at", onEdit),
          path.addListener("remove_at", onEdit)
        );
      },
      [onEdit]
    );

    // Clean up refs
    const onUnmountPolygon = useCallback(() => {
      listenersRef.current.forEach(lis => lis.remove());
      polygonRef.current = null;
    }, []);*/

    const onLoadDrawing = (drawingManager) => {
        console.log(drawingManager);
    }

    const onMarkerComplete = (polygon) => {
        console.log(polygon);
    };

    return isLoaded ? (
        <GoogleMap
            id="farm-google-map"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            <DrawingManager
                onLoad={onLoadDrawing}
                onMarkerComplete={onMarkerComplete}
                options={{
                    drawingControlOptions: {
                        // drawingModes: ['polygon'],
                        drawingModes: ['marker']
                    },
                    drawingControl: true,
                    circleOptions: {
                        clickable: true,
                        editable: true,
                        draggable: false,
                        strokeColor: '#FF0000',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#FF0000',
                        fillOpacity: 0.1,
                    },
                }}
            />
        </GoogleMap>
    ) : <></>
}

export default TestMap;
