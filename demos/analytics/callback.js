function parse(val) {
    var result = "Not found", tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
    });
    return result;
}
dataLayer.push({'myValue': 'this_is_my_value_' + parse('value')});
dataLayer.push({'event': 'custom.dataLayer.modified'});
