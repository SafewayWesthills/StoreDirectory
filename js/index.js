var productLocations;

$(window).on('load', function(){
    //Import Product Location Data
    $.ajax({
        type: "GET",
        url: "/StoreDirectory/assets/SF8852 Product Locations.csv",
        dataType: "text",
        success: function (data) {
            productLocations = $.csv.toObjects(data);
        },
        error: function () {
            $.ajax({
                type: "GET",
                url: "/assets/SF8852 Product Locations.csv",
                dataType: "text",
                success: function (data) {
                    productLocations = $.csv.toObjects(data);
                }
            });
        }
    });
})
