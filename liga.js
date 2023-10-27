/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            '/c': '&#xe900;',
            '/cb': '&#xe903;',
            '/f': '&#xe904;',
            '/g': '&#xe905;',
            '/gen': '&#xe906;',
            '/hj': '&#xe899;',
            '/hyp': '&#xe907;',
            '/ij': '&#xe908;',
            '/j': '&#xe901;',
            '/l': '&#xe909;',
            '/lh': '&#xe90a;',
            '/li': '&#xe90b;',
            '/lu': '&#xe90c;',
            '/ly': '&#xe90d;',
            '/m': '&#xe90e;',
            '/nbh': '&#xe90f;',
            '/nc': '&#xe910;',
            '/neg': '&#xe911;',
            '/neu': '&#xe912;',
            '/nm': '&#xe913;',
            '/nsb': '&#xe914;',
            '/nsrs': '&#xe915;',
            '/nsx': '&#xe916;',
            '/nx': '&#xe917;',
            '/p': '&#xe918;',
            '/pc': '&#xe919;',
            '/pos': '&#xe91a;',
            '/r': '&#xe91b;',
            '/rh': '&#xe91c;',
            '/rt': '&#xe91d;',
            '/s': '&#xe902;',
            '/srs': '&#xe91e;',
            '/sx': '&#xe91f;',
            '/t': '&#xe920;',
            '/x': '&#xe921;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/tone-indicator/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
