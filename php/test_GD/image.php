<?php
/**
 * Created by PhpStorm.
 * User: new
 * Date: 2018/4/12
 * Time: 14:58
 */
// 1、创建画布
$image = imagecreatetruecolor(500, 500);
// 2、创建颜色
$red = imagecolorallocate($image, 255, 0, 0);
$green = imagecolorallocate($image, 0, 255, 0);
$blue = imagecolorallocate($image, 0, 0, 255);
// 3、 用GD库画画
imageline($image, 0, 0, 500, 500,$blue);
imagefilledrectangle($image, 20, 20, 50, 50,$red);
imageellipse($image, 100, 100, 50, 50, $green);
// 4、告诉浏览器的mime类型
header("Content-type: image/png");
// 5、输出到浏览器或者可以存放到你的本地
imagepng($image);
// 6、销毁资源
imagedestroy($image);