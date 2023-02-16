var map;

$(function () {
    // map = $('#map1').vectorMap({
    //     map: 'map',
    //     backgroundColor: "white",
    //     regionStyle: {
    //         initial: {
    //             fill: 'white',
    //             "fill-opacity": 1,
    //             stroke: 'black',
    //             "stroke-width": 0.1,
    //             "stroke-opacity": 1
    //         },
    //         hover: {
    //             "fill-opacity": 0.8,
    //             cursor: 'pointer'
    //         },
    //         selected: {
    //             fill: 'yellow'
    //         },
    //         selectedHover: {
    //         }
    //     },
    //     markers: [
    //         // { coords: [0, 0], name: 'Marker 1', style: { fill: 'yellow' } },
    //         // { coords: [150, 150], name: 'Marker 2', style: { fill: 'yellow' } },
    //         // { coords: [300, 300], name: 'Marker 2', style: { fill: 'yellow' } },
    //     ],
    // });

    map = new jvm.Map({
        container: $('#map1'),
        map: 'map',
        regionStyle: {
            initial: {
                fill: 'white',
                "fill-opacity": 1,
                stroke: 'black',
                "stroke-width": 0.1,
                "stroke-opacity": 1
            },
            hover: {
                "fill-opacity": 0.8,
                cursor: 'pointer'
            },
            selected: {
                fill: 'blue'
            },
            selectedHover: {

            }
        },
        markers: [
            // { coords: [0, 0], name: 'Marker 1', style: { fill: 'yellow' } },
            // { coords: [150, 150], name: 'Marker 2', style: { fill: 'yellow' } },
            // { coords: [300, 300], name: 'Marker 2', style: { fill: 'yellow' } },
        ],
        onRegionTipShow: function(event, tip, code){
            tip.html(""); // Line 13 in jquer-jvectormaps.css has commented out stylingt o fully hide tip

        }
    });


})