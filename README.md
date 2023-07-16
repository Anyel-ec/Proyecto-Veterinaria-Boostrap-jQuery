<!DOCTYPE html>
<html>
<head>
  <title>Carrusel de Imágenes con Bootstrap</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/js/bootstrap.min.js"></script>
  <style>
    .carousel-indicators li {
      background-color: #000;
    }
  </style>
</head>
<body>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="imagen1.jpg" alt="Imagen 1">
        <div class="carousel-caption">
          <h3>Texto de la imagen 1</h3>
        </div>
      </div>

      <div class="carousel-item">
        <img src="imagen2.jpg" alt="Imagen 2">
        <div class="carousel-caption">
          <h3>Texto de la imagen 2</h3>
        </div>
      </div>

      <div class="carousel-item">
        <img src="imagen3.jpg" alt="Imagen 3">
        <div class="carousel-caption">
          <h3>Texto de la imagen 3</h3>
        </div>
      </div>
    </div>

    <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>

  <script>
    $(document).ready(function() {
      $('.carousel').carousel({
        interval: 5000
      });
    });
  </script>
</body>
</html>

