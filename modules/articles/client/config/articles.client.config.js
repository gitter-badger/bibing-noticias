'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
    function(Menus) {
        // Add the articles dropdown item
        Menus.addMenuItem('topbar', {
            title: 'Noticias',
            state: 'articles',
            type: 'dropdown'
        });

        // Add the dropdown list item
        Menus.addSubMenuItem('topbar', 'articles', {
            title: 'Lista de noticias',
            state: 'articles.list'
        });

        // Add the dropdown create item
        Menus.addSubMenuItem('topbar', 'articles', {
            title: 'Crear noticias',
            state: 'articles.create'
        });
    }
]);
