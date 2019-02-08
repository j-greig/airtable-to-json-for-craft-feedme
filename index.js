// Connect to Airtable API
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'XXXXXXXX'}).base('XXXXXXXX');
// Request Master Products table
base('Master Products').select({
    maxRecords: 999,
    view: "List"
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        console.log('{\n"title": ' + '"' + record.get('Name') + '"' + ',\n"brand": ' + '"' + record.get('Brand name') + '"' + ',\n"description": ' + '"' + record.get('Description') + '",');
        //  Split arrays to create Variants
        var skus = record.get('SKUS');
        var skuArray = skus.split(',');
        var skuArrayLength = skuArray.length;
        //
        var prices = record.get('Prices');
        var pricesArray = prices.split(',');
        var pricesArrayLength = pricesArray.length;
        //
        var dimensions = record.get('Dimensions');
        var dimensionsArray = dimensions.split(',');
        var dimensionsArrayLength = dimensionsArray.length;
        //
        console.log('"variants": {')
        console.log('   "variant": [');
        for (var i = 0; i < skuArrayLength; i++) {
            console.log('     {');
            var variantDimensionsArray = dimensionsArray[i].split('x');
            console.log('       "sku":' + '"' + skuArray[i] + '"' + ', "price":' + '"' + pricesArray[i] + '"' + ', "h":' + '"' + variantDimensionsArray[0] + '"' + ', "w":' + '"' + variantDimensionsArray[1] + '"' + ', "d":' + '"' + variantDimensionsArray[2] + '"');
            if (i == skuArrayLength) {
              console.log('}');
            } else {
              console.log('     }, ')
            }
        }
        console.log('   ]');
        console.log('}');
        console.log('');
        console.log('//////////////////////////////////////////////////');
        console.log('');
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
