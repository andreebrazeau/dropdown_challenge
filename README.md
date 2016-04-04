#Solution to the dropdown menu exercise


I created a Jquery plugin that manage all the functionality of the dropdown. If this feature would have been part
of a web application using AngularJS or any other framework I would have use the framework to build the 
solution. But for simplicity sake I chose the current design. 

* First I recursively go through the MENU json object and build the full dom.
I could have build each submenu when I needed (When hovering a item with submenu) but decided on 
making the full menu on load. The other approach would be preferable if there is a chance the data might 
change dynamically.

* I used the JQuery .show and .hide for the hover functionality of the submenus.

* I decided to create a array with all the color for each layer of submenu. I could have done it in
CSS using cascading class but decided that it was simpler to make it part of the initialization of the full menu.