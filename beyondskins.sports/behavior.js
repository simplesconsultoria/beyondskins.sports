
jQuery(document).ready(function(){

    jQuery(".cycle-slideshow img").each(function(){

        var linkslide = jQuery(this).attr("data-link");

        jQuery(this).wrap(function() {
        return "<a href='" + linkslide + "'></a>";
        });

    });

});
