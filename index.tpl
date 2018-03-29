<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <link id="favicon" rel="icon" type="image/png" sizes="16x16" href="https://cn.vuejs.org/images/logo.png">
    <% for (var i in htmlWebpackPlugin.options.cdn.css) { %>
    <link rel="stylesheet" href="<%= htmlWebpackPlugin.options.cdn.css[i] %>"><% } %>
  </head>
  <% if (htmlWebpackPlugin.options.dev) { %>
  <script>
    CONFIG=<%= JSON.stringify(htmlWebpackPlugin.options.config) %>;
  </script>
  <% }else{ %>
  <script src="<%= htmlWebpackPlugin.options.root_path %>config.js"></script>
  <% } %>
  <body>
    <app></app>
    <% for (var i in htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script><% } %>
  </body>
</html>
