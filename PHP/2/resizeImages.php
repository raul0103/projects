<?
//Основная функция вывода картинки
function outImage($path_image, $WIDTH, $HEIGHT){
    $path_parts = pathinfo($path_image);

    //Если уже есть сжатая картинка тогда выдать ее
    $thumb_path = $path_parts['dirname'] . '/thumbs/' . $path_parts['basename'];
    if (file_exists($_SERVER['DOCUMENT_ROOT'] . $thumb_path)) {
        echo $thumb_path;
        return;
    }

    //Если сжатой картинки нет создать ее и выдать сжатую
    $full_path = $path_parts['dirname'] . '/' . $path_parts['basename'];

    $image = new SimpleImage();
    $image->load($_SERVER['DOCUMENT_ROOT'] . $full_path);
    $image->resize(0, 0, $WIDTH, $HEIGHT, $_SERVER['DOCUMENT_ROOT'] . $full_path);
    $image->save($_SERVER['DOCUMENT_ROOT'] . $thumb_path);

    echo $thumb_path;
}


//Клас для получения оригинала изображения и создания сжатой копии
class SimpleImage{
    function load($filename)
    {
        $image_info = getimagesize($filename);

        $this->image_type = $image_info[2];
        if ($this->image_type == IMAGETYPE_JPEG) {
            $this->image = imagecreatefromjpeg($filename);
        } elseif ($this->image_type == IMAGETYPE_GIF) {
            $this->image = imagecreatefromgif($filename);
        } elseif ($this->image_type == IMAGETYPE_PNG) {
            $this->image = imagecreatefrompng($filename);
        }
    }
    function save($filename, $image_type = IMAGETYPE_JPEG, $compression = 90, $permissions = null)
    {
        if ($image_type == IMAGETYPE_JPEG) {
            imagejpeg($this->image, $filename, $compression);
        } elseif ($image_type == IMAGETYPE_GIF) {
            imagegif($this->image, $filename);
        } elseif ($image_type == IMAGETYPE_PNG) {
            imagepng($this->image, $filename);
        }
        if ($permissions != null) {
            chmod($filename, $permissions);
        }
    }
    function getWidth()
    {
        return imagesx($this->image);
    }
    function getHeight()
    {
        return imagesy($this->image);
    }
    function resize($x, $y, $THUMB_WIDTH, $THUMB_HEIGHT, $filename)
    {

        $image_info = getimagesize($filename);

        $full_image_width = $image_info[0];
        $full_image_height = $image_info[1];

        $original_aspect = $full_image_width / $full_image_height;
        $thumb_aspect = $THUMB_WIDTH / $THUMB_HEIGHT;

        if ($original_aspect >= $thumb_aspect) {
            $new_height = $THUMB_HEIGHT;
            $new_width = $full_image_width / ($full_image_height / $THUMB_HEIGHT);
        } else {
            $new_width = $THUMB_WIDTH;
            $new_height = $full_image_height / ($full_image_width / $THUMB_WIDTH);
        }

        $new_image = imagecreatetruecolor($THUMB_WIDTH, $THUMB_HEIGHT);

        imagecopyresampled($new_image, $this->image, 0 - ($new_width - $THUMB_WIDTH) / 2, 0 - ($new_height - $THUMB_HEIGHT) / 2, $x, $y, $new_width, $new_height, $full_image_width, $full_image_height);

        $this->image = $new_image;
    }
}
