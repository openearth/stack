// TODO replace with wps name
function updateview(view, id) {
    $.getJSON( view, function( data ) {
        // Loop over processes
        var items = [];
        // Put every process in a list element
        $.each( data.rows, function( i, row ) {
            var url = '/couchdb/wps';
            var identifier = row.value.identifier;
            var id = row.value._id;
            var a = '<a href="' + url + '/' + id  + '">' + identifier + '</a>' ;
            items.push( "<li id='" + identifier + "'>" + a + "</li>" );
        });
        // Add the list
        $( "<ul/>", {
            html: items.join( "" )
        }).appendTo( "#outputlist" );
    }
             );
}
updateview("http://54.77.21.140/couchdb/wps/_design/views/_view/input?callback=?", "#inputlist");
updateview("http://54.77.21.140/couchdb/wps/_design/views/_view/output?callback=?", "#outputlist");

var jqxhr = $.ajax( "http://54.77.21.140/wps?request=GetCapabilities&service=wps&version=1.0.0" )
        .done(function(data) {
            var processes = $(data).find("Process");
            var items = [];
            $.each( processes, function( i, process ) {
                var url = '/wps?request=DescribeProcess&version=1.0.0&service=wps';
                var identifier = $(process).find("Identifier").text();
                var title = $(process).find("Title").text() || identifier;
                var summary = $(process).find("Abstract").text();
                var a = '<a href="' + url + '&' + 'identifier=' + identifier +'" title="' + summary + '">' + title + '</a>';
                items.push( "<li>" + a + "</li>" );
            });
            // Add the list
            $( "<ul/>", {
                "class": "processes",
                html: items.join( "" )
            }).appendTo( "#processlist" );

        })