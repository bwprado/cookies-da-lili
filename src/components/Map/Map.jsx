import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
const LAT = -2.4920137
const LNG = -44.3029785

const createInfoWindow = (e, map) => {
	const infoWindow = new window.google.maps.InfoWindow({
		content: '<div id="infoWindow" />',
		position: { lat: e.latLng.lat(), lng: e.latLng.lng() },
	})
	console.log(infoWindow)
	// infoWindow.addListener('domready', e => {
	// 	render(<InfoWindow />, document.getElementById('infoWindow'))
	// })
	infoWindow.open(map)
}

const handleMarkerClick = (e) => (map) => this.createInfoWindow(e, map)
const Map = () => {
	useEffect(() => {
		const googleMap = new window.google.maps.Map(
			document.getElementById('map'),
			{
				center: { lat: LAT, lng: LNG },
				zoom: 12,
				mapTypeControl: false,
				streetViewControl: false,
				fullscreenControl: false,
			}
		)
		const marker = new window.google.maps.Marker({
			position: { lat: LAT, lng: LNG },
			map: googleMap,
			title: 'Cookies da Lili',
		})
		// console.log(marker)
		// marker.addListener('click', handleMarkerClick(googleMap))
		// return () => marker.removeEventListener('click', handleMarkerClick)
	}, [])
	return (
		<div
			style={{
				width: '100%',
				height: 300,
				borderRadius: 10,
				position: 'relative',
			}}>
			<div style={{ width: '100%', height: 300, borderRadius: 10 }} id="map" />
			<div className="btn__icon">
				<FontAwesomeIcon icon={faPaperPlane} style={{pointerEvents: 'none', padding: 0, margin: 0, height: 20}} />
			</div>
		</div>
	)
}

export default Map
