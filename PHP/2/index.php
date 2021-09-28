    <!-- Подгрузили файл ресайзер с необходимыми функциями -->
    <? require_once('resizeImages.php'); ?>

    <!DOCTYPE html>
    <html lang="ru">

    <head>
        <meta charset="UTF-8">
        <title>тестовое задание ИНТЕРВОЛГА</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body>
        <div class='img-block'>
            <!-- Выводим картинки специальной функцией которая проверит есть ли обрезаная картинка. Если нет создаст обрезаную -->
            <img src="<? outImage('/images/img1.jpg', 200, 100); ?>">
            <img src="<? outImage('/images/img2.png', 200, 100); ?>">
        </div>
    </body>

    </html>