<!DOCTYPE html>
<html lang="en">

<head>
  <title>Laravel Quick Start</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <style>
    body {
      background-color:beige;
    }

    .contain_app {
      width: 100%;
      margin-top: 25px;
    }

    .control-label {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 25px;
    }
    .panel-body {
      width: 100%;
      text-align: center;
      justify-content: center;
      padding: 0px 10vw;
    }
    .form-horizontal {
      text-align: center;
      justify-content: center;
    }

    .inputcontainer {
      margin-left: 15vw;
    }
    .input-group{
      padding: 0px 10vw;
    }
    .panel-heading {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 25px;
    }
  </style>
</head>

<body>
  <div class="contain_app">
    <nav class="navbar navbar-default">

    </nav>
  </div>

  @yield('content')
</body>

</html>