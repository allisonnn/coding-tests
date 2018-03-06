(function() {
    var icons = {
        up: "chevron-up",
        down: "chevron-down"
    };
    var hiddenClass = "hidden";
    var handlers = document.getElementsByClassName("collapsible-dl__title");
    for (var i=0;i<handlers.length;i++) {
        handlers[i].addEventListener("click", function(e) {
            var detail, icon;
            e.preventDefault();
            e.stopPropagation();

            detail = e.currentTarget.parentNode.getElementsByClassName("collapsible-dl__detail")[0];
            if (hasClass(detail, hiddenClass)) {
                removeClass(detail, hiddenClass);
            } else {
                addClass(detail, hiddenClass);
            }
            icon = e.currentTarget.getElementsByClassName("collapsible-dl__handler")[0];
            changeIconClass(icon);
        });
    }

    function changeIconClass(elem) {
        if (elem.getAttribute("data-icon") === icons.up) {
            elem.setAttribute("data-icon", icons.down)
        } else {
            elem.setAttribute("data-icon", icons.up)
        }
    }

    function hasClass(elem, className) {
        var rg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        return elem.className.match(rg);
    }
    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += " ";
            elem.className += className;
        }
    }
    function removeClass(elem, className) {
        var rg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        elem.className = elem.className.replace(rg, "");
    }
})()