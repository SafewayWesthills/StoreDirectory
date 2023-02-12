var productLocations;
var indexedProductList

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
    
    initProducts();
    var searchBox = document.getElementById("searchbox");
    searchBox.addEventListener("input", updateSearchResults);
    
})

function initProducts(){
    var productFields = Object.keys(productLocations[0]);
    
    indexedProductList = elasticlunr(function () {
        productFields.forEach(element => {
            this.addField(element);
        })
        this.setRef('Art Desc');
    });

    productLocations.forEach(element => {
        indexedProductList.addDoc(element);
    });
}

function updateSearchResults(event){
    console.log("Search query:" + event.target.value);
    var searchResults = indexedProductList.search(event.target.value);
    console.log(searchResults.slice(0,5));
    
    var searchOutput = document.getElementById("searchOutput");
    searchResults.forEach(element => {
        var p = document.createElement("p");
        var text = document.createTextNode(element);
        console.log("Element: " + element);
        p.appendChild(text);
        searchOutput.appendChild(p);
        //searchOutput.appendChild("<p>" + element + "</p>");
    })
    
    
}
