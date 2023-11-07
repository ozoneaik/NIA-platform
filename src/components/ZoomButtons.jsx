

const ZoomInButton = () => {
    const map = window.google.maps.map;

    const handleZoomIn = () => {
        map.setZoom(map.getZoom() + 1);
    };

    return (
        <button onClick={handleZoomIn}>Zoom In</button>
    );
};

const ZoomOutButton = () => {
    const map = window.google.maps.map;

    const handleZoomOut = () => {
        map.setZoom(map.getZoom() - 1);
    };

    return (
        <button onClick={handleZoomOut}>Zoom Out</button>
    );
};

export { ZoomInButton, ZoomOutButton };