function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 32.997019, lng: -117.269833},
      mapTypeId: 'terrain'
    });
  
    var fiberLineCoordinates = [
      {lat: 32.991952, lng: -117.271095},
      {lat: 32.992105, lng: -117.270387},
      {lat: 32.992312, lng: -117.269518},
      {lat: 32.993914, lng: -117.269872},
      {lat: 32.996749, lng: -117.270540},
      {lat: 33.000186, lng: -117.271495},
      {lat: 33.000303, lng: -117.268545},
      {lat: 33.003290, lng: -117.269425},
      {lat: 33.000474, lng: -117.269586}
    ];

    var fiberLine = new google.maps.Polyline({
      path: fiberLineCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
  
    fiberLine.setMap(map);
  }