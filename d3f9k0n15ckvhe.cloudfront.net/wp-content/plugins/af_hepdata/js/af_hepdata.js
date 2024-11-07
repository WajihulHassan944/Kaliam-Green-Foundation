jQuery(document).ready(function() {
    url = "https://javamatch.matchinggifts.com/search/companyprofile/americanforests_iframe/";
    if (jQuery("#org_search_value").length) {
        jQuery("#org_search_value").autocomplete({
                source: 'https://javamatch.matchinggifts.com/search/getCompanyList?nonprofit=americanforests_iframe',
                select: function(event, ui) {
                    //jQuery('#inputOrgId').val(ui.item.companyId);
                    //jQuery('#frmSearch').submit();

                },
                minLength: 2
            })
            .autocomplete("instance")._renderItem = function(ul, item) {
                return jQuery("<li>")
                    .append("<div><a href='" + url + item.companyId + "' target='_blank'>" + item.companyName + "</a></div>")
                    .appendTo(ul);
            };
    }


    jQuery("#frmSearch").submit(function(event) {
        if ((jQuery('#org_search_value').val().length == 0 && jQuery('#inputOrgId').val().length == 0) || jQuery('#org_search_value').val() == 'Type employer or company name here') {
            event.preventDefault();
            alert('Please enter a company name');
        }
    });

    window.addEventListener("hashchange", offsetAnchor);

    window.setTimeout(offsetAnchor, 1);

});

function offsetAnchor() {
    if (location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}