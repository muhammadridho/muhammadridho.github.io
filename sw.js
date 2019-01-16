/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-2a2869f79eea296f9944.js"
  },
  {
    "url": "app-2ca7c17b5846e06acb1d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-2d637d46ffe1993bce5c.js"
  },
  {
    "url": "index.html",
    "revision": "7de563b7975700208a0ce58a2014bbf7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9ad1826e2dcd6be9a3c5a9822d03ea6f"
  },
  {
    "url": "12.2a6bec9ba0f77d96e833.css"
  },
  {
    "url": "component---src-pages-index-jsx.1210c9023e9b3b6ef33f.css"
  },
  {
    "url": "component---src-pages-index-jsx-2c28ef47466349c64011.js"
  },
  {
    "url": "0-d698c0bd63201150edf3.js"
  },
  {
    "url": "12-b74a8f7af50b77fb11d5.js"
  },
  {
    "url": "1-fa3018e00d6895671bc5.js"
  },
  {
    "url": "static/d/152/path---index-6a9-Uj3iY1Fskfeiu5w7ZFB7eiefMU.json",
    "revision": "6cfff92ae7e71da67a2e38555a08200f"
  },
  {
    "url": "component---src-pages-404-jsx-5f74095c68a7d69f87e9.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "e4894b448e25a5b4b666ece6b41cee76"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "dc3cb71a4883375d0aeabef6e66ec7c0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});