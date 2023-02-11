var productLocations;

$(window).on('load', function(){
    //Import Product Location Data
    $.ajax({
        type: "GET",
        url: "/StoreDirectory/assets/SF8852 Product Locations.csv",
        async: false,
        dataType: "text",
        success: function (data) {
            productLocations = $.csv.toObjects(data);
        },
        error: function () {
            $.ajax({
                type: "GET",
                url: "/assets/SF8852 Product Locations.csv",
                async: false,
                dataType: "text",
                success: function (data) {
                    productLocations = $.csv.toObjects(data);
                }
            });
        }
    });
    
    var productFields = Object.keys(productLocations[0]);
    
    var indexedProductList = elasticlunr(function () {
        productFields.forEach(element => {
            this.addField(element);
        })
        this.setRef('Art Desc');
    });

    productLocations.forEach(element => {
        indexedProductList.addDoc(element);
    });
    
})
