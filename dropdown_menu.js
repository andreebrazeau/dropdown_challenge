(function ( $ ) {
  $.fn.makeMenu = function(menu, menuColor) {
    var showAlert = function (event) {

      // To prevent multiple alert when propagating up the dom
      event.stopPropagation();
      var target = event.target;
      if ($(target).is(".menu-item")) {

        alert($(target).find("p").html());
      } else {

        alert($(target).html());
      }
    };

    var showSubmenu = function(){
      $(this).find('ul.dropdown-content:first').show();
    };

    var hideSubmenu = function(){
      $(this).find('ul.dropdown-content:first').hide();
    };

    var buildmenu = function (layer, depth) {
      if (layer == null) {
        return
      } else {
        var list = $("<ul>", {class: "dropdown-content"});
        for (var i = 0; i < layer.length; i++) {

          var title = $("<p>").html(layer[i].title);
          var list_el = $("<li>", {class: "menu-item"}).html(title);

          list.append(list_el);

          // Color the background based on the menu color array.
          list_el.css("background-color", menuColor[depth] || "orange");

          // Add the hover functionality.
          list_el.hover(showSubmenu, hideSubmenu);

          // Add the click functionality
          list_el.click(showAlert);

          var sub_list = buildmenu(layer[i].submenu, depth + 1);
          list_el.append(sub_list)
        }
      }
      return list
    };
    // Load the menu dom
    var menus = buildmenu(menu, 0);

    // Add menu dom to "this"
    return this.append(menus);
  };
}( jQuery ));


var MENU = [
  {
    'title': 'Item 1',
    'submenu': null
  },
  {
    'title': 'Item 2',
    'submenu': null
  },
  {
    'title': 'Item 3',
    'submenu': [
      {
        'title': 'Sub 1',
        'submenu': null
      },
      {
        'title': 'Sub 2',
        'submenu': null
      },
      {
        'title': 'Sub 3',
        'submenu': [
          {
            'title': 'SubSub 1',
            'submenu': null
          },
          {
            'title': 'SubSub 2',
            'submenu': null
          },
          {
            'title': 'SubSub 3',
            'submenu': null
          }
        ]
      }
    ]
  }
];

var menuColor = ["pink", "violet", "lightgreen"];

$("#main_menu").makeMenu(MENU, menuColor);
