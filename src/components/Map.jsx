import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const BahawalnagarLocation = { lat: 29.9980, lng: 73.2525 };

const LocationMap = (props) => {

  const onMarkerClick = (props, marker, e) => {
    console.log(props.name);
  }

  const onInfoWindowClose = () => {
    // Update the state of the component
    // For example, you could set a boolean flag to indicate that the InfoWindow is closed
    // You can access the state of the component using hooks (if you're using functional components) or this.setState (if you're using class components)
  }

  const style = {
    maxWidth: "1200px",
    height: "350px",
    overflowX: "hidden",
    overflowY: "hidden",
    // position:'relative'
   };
  
  return (
    <div id="mapBox">
      <Map google={props.google}  style={style} zoom={14} initialCenter={BahawalnagarLocation}>
 
        <Marker onClick={onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={onInfoWindowClose}>
          <div>
            <h1>{props.selectedPlace?.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAFPKu1mW3fc2LSLzSkqsC23KiCilNOmfY")
})(LocationMap);
