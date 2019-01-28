mapboxgl.accessToken = 'pk.eyJ1IjoiZ2NtaWxsYXIiLCJhIjoiY2pvcDhrbGl4MDFvaTNrczR0d2hxcjdnNSJ9.JYgBw6y2pEq_AEAOCaoQpw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9', 
  center: [5.065, 51.5775],
  zoom: 16.5,
  pitch: 100,
  tilt: 100,
  // movingMethod: "jumpTo";
  // (load): "map = $event"
});

let markerSource = {
  type: "geojson",
  data: {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [5.0633,51.6272]
    },
    properties: {}
  }
};

map.on('load', function () {
    let photos = "https://a.mapillary.com/v3/images?client_id=QjI1NnU0aG5FZFZISE56U3R5aWN4ZzplNDVjNDc0YmYwYjJmYjQ0&closeto=5.0633,51.6272"
        let mapillaryphotos = null
        fetch(photos).then(response => {
          return response.json()
        }).then(data => {
          mapillaryphotos = data
        })
    map.addSource('CHIPS_all_pts', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/gcmillar/stress3d/master/CHIPS_all_pts'
    });

    map.addSource('photos-mapillary', {
        type: 'geojson',
        data: photos,

      });
      map.addSource("markers", markerSource);
      map.addLayer({
        id: "markers",
        type: "symbol",
        source: "markers",
        layout: {
          "icon-image": "car-15"
        }  });

    if (window.location.search.indexOf('embed') !== -1) map.scrollZoom.disable();

    map.addLayer({
        "id": "Cyclist 1",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 1]
    }, 'waterway-label');
    map.addLayer({
        "id": "Cyclist 2",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 2]
    }, 'waterway-label');
    map.addLayer({
        "id": "Cyclist 3",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 3]
    }, 'waterway-label');
    map.addLayer({
        "id": "Cyclist 4",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 4]
    }, 'waterway-label');
    map.addLayer({
        "id": "Cyclist 5",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 5]
    }, 'waterway-label');
    map.addLayer({
        "id": "Cyclist 6",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 6]
    }, 'waterway-label');
    map.addLayer({
        "id": "Cyclist 7",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 7]
    }, 'waterway-label');
    map.addLayer({
        "id": "Cyclist 8",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 8]
    }, 'waterway-label');
    map.addLayer({
        "id": "Cyclist 9",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 9]
    }, 'waterway-label');
    map.addLayer({
        "id": "Cyclist 10",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 10]
    }, 'waterway-label');
    map.addLayer({
        "id": "Cyclist 11",
        "type": "circle",
        "source": "CHIPS_all_pts",
        "paint": {
            "circle-radius": {
                'base': 6,
                'stops': [[12, 6], [70, 350]],
            },
            "circle-opacity": 1,
            "circle-color": {
              property: 'conductance_z',
              type: 'exponential',
              stops: [
                [-12361.2246720,'#2166ac'],
                [0.1773300, '#92c5de'],
                [2647.7223040, '#f4a582'],
                [28208.5369920, '#b2182b'],
                ]
            }
        },
        'filter': ['==', 'participant', 11]
    }, 'waterway-label');
    map.on("mousemove", function(e) {
          let features = map.queryRenderedFeatures(e.point, {
            layers: ['Cyclist 1', 'Cyclist 2', 'Cyclist 3', 'Cyclist 4', 'Cyclist 5', 'Cyclist 6', 'Cyclist 7', 'Cyclist 8', 'Cyclist 9', 'Cyclist 10', 'Cyclist 11']
          });
          map.getCanvas().style.cursor = features.length ? "pointer" : "";
        });

        map.on('load', function() {
          let layers = map.getStyle().layers;

          let labelLayerId;
          for (let i = 0; i < layers.length; i++) {
            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
              labelLayerId = layers[i].id;
              break;
            }
          }



        window.addEventListener("resize", function() {
          mly.resize();
        });
      });
        let mly = new Mapillary.Viewer(
        'mly',

        'WGl5Z2dkVHEydGMwWlNMOHUzVHR4QToyMmQ4OTRjYzczZWFiYWVi',
        null,
      );
      map.on('click', function(e) {
        // https://a.mapillary.com/v3/images?closeto=5.0633,51.6272&client_id=QjI1NnU0aG5FZFZISE56U3R5aWN4ZzplNDVjNDc0YmYwYjJmYjQ0&usernames=gcmillar
        let closeto = "https://a.mapillary.com/v3/images?closeto=" + e.lngLat.lng + "," + e.lngLat.lat + "&client_id=QjI1NnU0aG5FZFZISE56U3R5aWN4ZzplNDVjNDc0YmYwYjJmYjQ0";
        let newpoint = turf.point([e.lngLat.lng, e.lngLat.lat])
        // console.log(newpoint)
        map.getSource('markers').setData(newpoint

        );
        fetch(closeto)
          .then(response => {
            return response.json()
          })
          .then(data => {

            let mapillaryphotos = data;
            let mapillary_keys = mapillaryphotos.features[0].properties.key;
            mly.moveToKey(mapillary_keys)

            // console.log(e.lngLat.lng, e.lngLat.lat)

          });

        document.getElementById("map").onclick = function() {
          displaySidebar()
        };

        function displaySidebar() {
          document.getElementById("sidebar").style.display = "block";
          mly.resize();
        }

        document.getElementById("close").onclick = function() {
          closeSidebar()
        };

        function closeSidebar() {
          document.getElementById("sidebar").style.display = "none";
          mly.resize();
        }

      });




});

map.once('style.load', function(e) {
    // init();
    // map.addControl(new mapboxgl.NavigationControl());
    map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
            layers: ['Cyclist 1', 'Cyclist 2', 'Cyclist 3', 'Cyclist 4', 'Cyclist 5', 'Cyclist 6', 'Cyclist 7', 'Cyclist 8', 'Cyclist 9', 'Cyclist 10', 'Cyclist 11']
        });
        if (!features.length) {
            return;
        }
        var feature = features[0];
        var popup = new mapboxgl.Popup()
            .setLngLat(map.unproject(e.point))
            .setHTML('<h3>Cyclist Information</h3>' +
                '<ul>' +
                '<li>Skin Conductance: <b>' + feature.properties.conductance_z + '</b></li>' +
                '<li>Speed: <b>' + feature.properties.speed2 + '</b></li>' +
                '<li>Elevation (m): <b>' + feature.properties.altitude + '</b></li>' +
                '<li>Distance Travelled: <b>' + feature.properties.distance + '</b></li>' +
                '<li>Cyclist: <b>' + feature.properties.participant + '</b></li>' +
                '</ul>')
            .addTo(map);
       
    });

    //Hide loading bar once tiles from geojson are loaded
        map.on('data', function(e) {
            if (e.dataType === 'source' && e.sourceId === 'CHIPS_all_pts') {
                document.getElementById("menu");
            }
        })

        // Use the same approach as above to indicate that the symbols are clickable
        // by changing the cursor style to 'pointer'.
        map.on('mousemove', function(e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['Cyclist 1', 'Cyclist 2', 'Cyclist 3', 'Cyclist 4', 'Cyclist 5', 'Cyclist 6', 'Cyclist 7', 'Cyclist 8', 'Cyclist 9', 'Cyclist 10', 'Cyclist 11']
            });
            map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
        });

    let icon = document.getElementById('icon');

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    chartInit()

    map.on("render", chartSetData);

});

const toggleableLayerIds = ['Cyclist 1', 'Cyclist 2', 'Cyclist 3', 'Cyclist 4', 'Cyclist 5', 'Cyclist 6', 'Cyclist 7', 'Cyclist 8', 'Cyclist 9', 'Cyclist 10', 'Cyclist 11'];



for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'inactive';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'none') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            this.className = 'active';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = 'inactive';
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}

map.on('load', function() {
    // Insert the layer beneath any symbol layer.
    for (var i = 0; i < toggleableLayerIds.length; i++) {
    	var id = toggleableLayerIds[i];
    	map.setLayoutProperty(id, 'visibility', 'none');
    }
    
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 0,
        'paint': {
            'fill-extrusion-color': '#616A95',

            // use an 'interpolate' expression to add a smooth transition effect to the buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                10, 0,
                15, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
               10, 0,
                15, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .55
        }
    }, labelLayerId);
});


function getallData() {
	var dataList = [];
	let layerName;
	for (var i = 0; i < toggleableLayerIds.length; i++) {
    	layerName = toggleableLayerIds[i];
    	var data = getData(layerName);
    	dataList.push(data);
    }
    return dataList;
}


function getData(layerName) {
  var vals = [];
  var layer = layerName;
  // if (!map.getLayer(layer)) return vals;

  var test = map.queryRenderedFeatures({
    layers: toggleableLayerIds
  }); 

  test.forEach(function(f) {
    vals.push([f.properties.time, f.properties.conductance_z]);
  })

  vals = vals.sort(function(a, b) {

    return a[0] - b[0];
  })

  return (vals);
}



function chartSetData() {
  var data = getData();
  if (!data || data.length == 0) return;

  chart.series[0].update({
    data: data
  })
}


function chartInit(data) {
  // var data = data || getData() || [];

  Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Unica+One',
    rel: 'stylesheet',
    type: 'text/css'
  }, null, document.getElementsByTagName('head')[0]);

  Highcharts.theme = {
    colors: ['#79A892', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
    ],
    chart: {
      backgroundColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 1,
          y2: 1
        },
        stops: [
          [0, '#282828'],
          [1, '#282828']
        ]
      },
      style: {
        fontFamily: 'Helvetica Neue, Arial, Helvetica, sans-serif;'
      },
      plotBorderColor: '#606063'
    },
    title: {
      style: {
        color: '#747474',
        textTransform: 'uppercase',
        fontSize: '20px'
      }
    },
    subtitle: {
      style: {
        color: '#747474',
        textTransform: 'uppercase'
      }
    },
    xAxis: {
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#747474'
        }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
        style: {
          color: '#747474'

        }
      }
    },
    yAxis: {
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#747474'
        }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
        style: {
          color: '#747474'
        }
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, .55)',
      style: {
        color: '#747474'
      }
    },
    plotOptions: {
      series: {
        dataLabels: {
          color: '#B0B0B3'
        },
        marker: {
          lineColor: '#333'
        }
      },
      boxplot: {
        fillColor: 'blue'
      },
      candlestick: {
        lineColor: 'white'
      },
      errorbar: {
        color: 'white'
      }
    },
    legend: {
      itemStyle: {
        color: '#E0E0E3'
      },
      itemHoverStyle: {
        color: '#FFF'
      },
      itemHiddenStyle: {
        color: '#606063'
      }
    },
    credits: {
      style: {
        color: '#666'
      }
    },
    labels: {
      style: {
        color: '#707073'
      }
    },

    drilldown: {
      activeAxisLabelStyle: {
        color: '#747474'
      },
      activeDataLabelStyle: {
        color: '#747474'
      }
    },

    navigation: {
      buttonOptions: {
        symbolStroke: '#DDDDDD',
        theme: {
          fill: '#505053'
        }
      }
    },

    // scroll charts
    rangeSelector: {
      buttonTheme: {
        fill: '#505053',
        stroke: '#747474',
        style: {
          color: '#CCC'
        },
        states: {
          hover: {
            fill: '#707073',
            stroke: '#747474',
            style: {
              color: 'white'
            }
          },
          select: {
            fill: '#000003',
            stroke: '#747474',
            style: {
              color: 'white'
            }
          }
        }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
        backgroundColor: '#333',
        color: 'silver'
      },
      labelStyle: {
        color: 'silver'
      }
    },

    navigator: {
      handles: {
        backgroundColor: '#666',
        borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(0,0,0,0.1)',
      series: {
        color: '#7798BF',
        lineColor: '#A6C7ED'
      },
      xAxis: {
        gridLineColor: '#505053'
      }
    },

    scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
    },

    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#505053',
    dataLabelsColor: '#B0B0B3',
    textColor: '#747474',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(0,0,0,0.3)'
  };

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

  chart = Highcharts.chart('container', {
    chart: {
      zoomType: 'x',
      events: {
        selection: function(event) {
            var layer = "CHIPS_all_pts";
          
          if(event.resetSelection){
               map.setFilter(layer,[
            'all'
          ])
            
          }else{
          var ext = event.xAxis[0];
         
          map.setFilter(layer,[
            'all',
            ['<','time',ext.max],
            ['>','time',ext.min]
          ])
          }
        }
      }
    },
    title: {
      text: 'Skin Conductivity'
    },
    subtitle: {
      text: 'Click & drag to filter'
    },
    xAxis: {
      title: {
        text: 'Cycling Time (s)'
    }
    },
    yAxis: {
      title: {
        text: 'Conductivity'
      }
    },
    legend: {
      enabled: false
    },

    plotOptions: {
      line: {
        fillColor: {
          // linearGradient: {
          //   x1: 0,
          //   y1: 0,
          //   x2: 0,
          //   y2: 1
          // },
          stops: [
          [-12361.2246720,'rgba(33, 102, 172, .55)'], 
          [28208.5369920, 'rgba(178,24,43, .55)'] 
          // [0, Highcharts.getOptions().colors[0]],
          // [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
      },
    },

    series: [{
      type: 'area',
      name: 'Skin Conductivity',
      data: data
    }]
  });
}

function rCoord() {
  var coord = [
    (Math.random() * 360) - 180, (Math.random() * 180) - 90
  ]
  return coord
}

function rDate(base) {
  base = base || 0;
  mx = new Date();
  mn = new Date("2004/12/02");
  dd = Math.round(mx - (Math.random() * (mx - mn - base)));
  return (dd)
}

function rProp(base) {
  base = base || [0];
  var a = (base[0] + 180) / 360 || Math.random();

  var prop = {
    date: rDate(a * 1000),
    nHgKg: Math.round(a * 1000)
  }

  return prop;
}

function rPoint() {
  var coord = rCoord()
  var point = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: coord
    },
    properties: rProp(coord)
  }
  return point;
}

function rPoints(n) {
  var gJson = {
    type: "FeatureCollection",
    features: []
  };
  n = n || 100;
  for (var i = 0; i < n; i++) {
    gJson.features.push(rPoint());
  }
  return gJson;
}

function cloneArray(arr) {
  var i = arr.length;
  var clone = [];
  while (i--) {
    clone[i] = arr[i];
  }
  return (clone);
};

function getArrayStat(o) {

  if (
    o.arr === undefined ||
    o.arr.constructor != Array ||
    o.arr.length === 0
  ) return [];

  if (
    o.stat == "quantile" &&
    o.percentile &&
    o.percentile.constructor == Array
  ) o.stat = "quantiles";

  var arr = cloneArray(o.arr);
  var stat = o.stat ? o.stat : "max";
  var len_o = arr.length;
  var len = len_o;

  function sortNumber(a, b) {
    return a - b;
  }

  opt = {
    "max": function() {
      var max = -Infinity;
      var v = 0;
      while (len--) {
        v = arr.pop();
        if (v > max) {
          max = v;
        }
      }
      return max;
    },
    "min": function() {
      var min = Infinity;
      while (len--) {
        v = arr.pop();
        if (v < min) {
          min = v;
        }
      }
      return min;
    },
    "sum": function() {
      var sum = 0;
      while (len--) {
        sum += arr.pop();
      }
      return sum;
    },
    "mean": function() {
      var sum = getArrayStat({
        stat: "sum",
        arr: arr
      });
      return sum / len_o;
    },
    "median": function() {
      var median = getArrayStat({
        stat: "quantile",
        arr: arr,
        percentile: 50
      });
      return median;
    },
    "quantile": function() {
      arr.sort(sortNumber);
      o.percentile = o.percentile ? o.percentile : 50;
      index = o.percentile / 100 * (arr.length - 1);
      if (Math.floor(index) == index) {
        result = arr[index];
      } else {
        i = Math.floor(index);
        fraction = index - i;
        result = arr[i] + (arr[i + 1] - arr[i]) * fraction;
      }
      return result;
    },
    "quantiles": function() {
      var quantiles = {};
      o.percentile.forEach(function(x) {
        var res = getArrayStat({
          stat: "quantile",
          arr: arr,
          percentile: x
        });
        quantiles[x] = res;
      });
      return quantiles;
    },
    "distinct": function() {
      var n = {},
        r = [];

      while (len--) {
        if (!n[arr[len]]) {
          n[arr[len]] = true;
          r.push(arr[len]);
        }
      }
      return r;
    }
  };
  return (opt[stat](o));
};

function printLayerStat() {

  var s = getLayerStat();

  var elN = document.getElementById("sN");
  var elMin = document.getElementById("sMin");
  var elMax = document.getElementById("sMax");
  var elPtil = document.getElementById("sPtil");

  elN.innerHTML = s.n;
  elMin.innerHTML = s.min;
  elMax.innerHTML = s.max;
  elPtil.innerHTML = JSON.stringify(s.ptil);

}


function getLayerStat() {
  var test = map.queryRenderedFeatures({
    layers: ["CHIPS_all_pts"] 
  });
  var vals = [];
  test.forEach(function(f) {
    vals.push([
      f.properties.time,
      f.properties.conductance_z
    ]);
  })
  var out = {
    n: test.length,
    max: getArrayStat({
      arr: vals,
      stat: 'max'
    }),
    min: getArrayStat({
      arr: vals,
      stat: 'min'
    }),
    ptil: getArrayStat({
      arr: vals,
      stat: 'quantiles',
      percentile: [25, 50, 75]
    })
  }
  return (out)
}



var url = 'https://raw.githubusercontent.com/gcmillar/stress3d/master/CHIPS_all_pts';