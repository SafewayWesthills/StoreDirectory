var productLocations;
var indexedProductList;
var locationMappings;


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

    //Import Location Mappings
    $.getJSON('assets/safeway8852-LocationMappings.json', function(element) {
        locationMappings = element
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
    console.log(searchResults.slice(0,10));
    
    var searchOutput = document.getElementById("searchOutput");
    searchOutput.textContent = '';
    searchResults.slice(0,10).forEach(element => {
        var location = String(element.doc["Aisle Number"]).padStart(2, '0') + "-" + element.doc["Side"] + "-" + String(element.doc["Aisle Section"]).padStart(2, '0')
        var p = document.createElement("p");
        var text = document.createTextNode(element.ref);
        p.appendChild(text);
        p.setAttribute('id', location);
        p.setAttribute('class', 'result');
        p.setAttribute('data-bs-toggle', 'collapse');
        p.setAttribute('data-bs-target', '#collapseWidthExample');
        
        p.addEventListener('click', element => {
            var selectedProduct = element.target.id;
            var locations = [];
            Object.keys(locationMappings).forEach(section => {
                if(locationMappings[section].includes(selectedProduct))
                    locations.push(section);
            })
            updateSelectedRegions(locations);
        })
        searchOutput.appendChild(p);
    })
    
    
}

function updateSelectedRegions(regionId){
    map.clearSelectedRegions();
    map.setSelectedRegions(regionId);
    map.setFocus({regions: regionId, animate: true});
}