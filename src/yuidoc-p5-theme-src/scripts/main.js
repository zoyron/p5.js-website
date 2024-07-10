/**
 * Define global App.
 */
var App = window.App || {};
define('App', function() {
  return App;
});

/**
 * Load json API data and start the router.
 * @param {module} App
 * @param {module} router
 */
require([
  'App',
  './documented-method'], function(App, DocumentedMethod) {

  // Set collections
  App.collections = ['allItems', 'classes', 'events', 'methods', 'properties', 'p5.sound'];

  // Get json API data
  $.getJSON('data.min.json', function(data) {
    App.data = data;
    App.classes = [];
    App.methods = [];
    App.properties = [];
    App.events = [];
    App.allItems = [];
    App.sound = { items: [] };
    App.dom = { items: [] };
    App.modules = [];
    App.project = data.project;


    var modules = data.modules;

    // Get class items (methods, properties, events)
    _.each(modules, function(m, idx, array) {
      App.modules.push(m);
      if (m.name == "p5.sound") {
        App.sound.module = m;
      }
    });


    var items = data.classitems;
    var classes = data.classes;

    // Get classes
    _.each(classes, function(c, idx, array) {
      if (!c.private) {
        App.classes.push(c);
      }
    });


    // Get class items (methods, properties, events)
    _.each(items, function(el, idx, array) {
      if (el.itemtype) {
        if (el.itemtype === "method") {
          el = new DocumentedMethod(el);
          App.methods.push(el);
          App.allItems.push(el);
        } else if (el.itemtype === "property") {
          App.properties.push(el);
          App.allItems.push(el);
        } else if (el.itemtype === "event") {
          App.events.push(el);
          App.allItems.push(el);
        }

        // libraries
        if (el.module === "p5.sound") {
          App.sound.items.push(el);
        }
      }
    });

    _.each(App.classes, function(c, idx) {
      c.items = _.filter(App.allItems, function(it){ return it.class === c.name; });
    });

    require(['router']);
  });
});
