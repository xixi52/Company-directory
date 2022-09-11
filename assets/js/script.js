$(document).ready(function() {
    var table = $('#annuaire').on( 'draw.dt', function () {
$("#containerannuaire").attr("id", "container"); $("#loadercontainer").css("display","none");
} ).DataTable( {
        "scrollX": true
    } );
    table.buttons().container()
        .appendTo( '#annuaire_wrapper .col-md-6:eq(0)' );
} );