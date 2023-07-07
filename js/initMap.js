var map;

$(function () {
    // map = $('#map1').vectorMap({
    //     map: 'map',
    //     backgroundColor: "white",
    //     regionStyle: {
    //         initial: {
    //             "fill": 'white',
    //             "fill-opacity": 1,
    //             "stroke": 'black',
    //             "stroke-width": 0.1,
    //             "stroke-opacity": 1
    //         },
    //         hover: {
    //             "fill-opacity": 0.8,
    //             "cursor": 'pointer',
    //         },
    //         selected: {
    //             fill: 'yellow'
    //         },
    //         selectedHover: {
    //         }
    //     },
    //     labels: {
    //         regions: {
    //             render: function (code) {
    //                 return code;
    //             }
    //         },
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
            { coords: [253, 150], name: 'Aisle 12', style: { fill: 'yellow' } },
            { coords: [232, 150], name: 'Aisle 11', style: { fill: 'blue' } },
            { coords: [212, 150], name: 'Aisle 10', style: { fill: 'red' } },
        ],
        onRegionTipShow: function(event, tip, code){
            tip.html(""); // Line 13 in jquery-jvectormaps.css has commented out styling to fully hide tip

        }
    });


})