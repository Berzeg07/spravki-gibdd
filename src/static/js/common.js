$(document).ready(function () {

    $(".burger").click(function () {
        $(this).toggleClass('is-active');
        $('.dropdown-menu').toggleClass('is-active');
    });


    $(".mobnav-list a").click(function () {

        var $this = $(this);
        var elem = $(this).next();

        if (!$this.hasClass("is-active")) {
            $(".mobnav-list__dropdown").slideUp();
            $(".mobnav-list a").removeClass("is-active");
        }

        $this.toggleClass("is-active");
        elem.slideToggle();

    });

});
