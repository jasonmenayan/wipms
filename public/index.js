<!doctype html>
<html ng-app="wipms">
  <head>
    <meta charset="utf-8">
    <title>Where'd I Put My Stuff?</title>
    <meta name="description" content="Record and retrieve where or with whom you put your stuff...because you shouldn't have to rely on your memory!">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>

    <script src="scripts/services/core.js"></script>
    <script src="scripts/controllers/main.js"></script>

  </head>
  <body ng-controller="mainController">
    <div class="header">
      <div class="navbar navbar-default" role="navigation">
        <div class="container">
          <div class="navbar-header">

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
            </button>

            <a class="navbar-brand" href="#/">Where'd I Put My Stuff?</a>
          </div>

          <div class="collapse navbar-collapse" id="js-navbar-collapse">

            <ul class="nav navbar-nav">
              <li><a href="#/">Home</a></li>
              <li><a ng-href="#/store">Store an item</a></li>
              <li><a ng-href="#/retrieve">Retrieve an item</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
    <div ng-view=""></div>
    </div>

</body>
</html>