(function() {
    var icons = {
        up: "chevron-up",
        down: "chevron-down"
    };
    var hiddenClass = "closed";
    var handlerClassName = "collapsible-dl__title";
    var iconClassName = "collapsible-dl__icon";

    var handlers = document.getElementsByClassName(handlerClassName);

    for (var i=0;i<handlers.length;i++) {
        handlers[i].addEventListener("click", function(e) {
            var detail, icon;
            e.preventDefault();
            e.stopPropagation();

            detail = e.currentTarget.parentNode;
            if (hasClass(detail, hiddenClass)) {
                removeClass(detail, hiddenClass);
            } else {
                addClass(detail, hiddenClass);
            }
            icon = e.currentTarget.getElementsByClassName(iconClassName)[0];
            changeIconClass(icon);
        });
    }

    function getClassNameRE(className) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)');
    }

    function changeIconClass(elem) {
        if (elem.getAttribute("data-icon") === icons.up) {
            elem.setAttribute("data-icon", icons.down)
        } else {
            elem.setAttribute("data-icon", icons.up)
        }
    }

    function hasClass(elem, className) {
        return elem.className.match(getClassNameRE(className));
    }
    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += " ";
            elem.className += className;
        }
    }
    function removeClass(elem, className) {
        elem.className = elem.className.replace(getClassNameRE(className), "");
    }
})()