import React from 'react';
import "./Map.css";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from "./util";

function SetViewOnClick({ coords, zoom }) {
    const map = useMap();
    map.setView(coords, zoom);
    return null;
}


function Map({ countries, casesType, center, zoom }) {
    return (
        <div className="map">
            <MapContainer
                className="markercluster-map"
                center={center}
                zoom={zoom}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
                />

                <SetViewOnClick
                    coords={center}
                    zoom={zoom}
                />

                {showDataOnMap(countries, casesType)}
            </MapContainer>
        </div>
    )
}

export default Map
