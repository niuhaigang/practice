<?php
/**
 * Created by PhpStorm.
 * User: new
 * Date: 2018/4/12
 * Time: 15:28
 */
/**
 * 宽 高 字母 数字 字母数字混合 干扰线 干扰点 背景色 字体颜色
 * @param int $width
 * @param int $height
 * @param int $num 验证码长度
 * @param int $type 0-9 a-z
 */
verify();
function verify($width = 100, $height = 40, $num = 5, $type = 3) {
    // 1、创建画布
    $image = imagecreatetruecolor($width, $height);

    //2、生成颜色

    //3、你需要什么样的字符
    $string = '';
    switch ($type) {
        case 1:
            $str = '0123456789';
            $string = substr(str_shuffle($str), 0, $num);
            break;
        case 2:
            $arr = range('a', 'z');
            shuffle($arr);
            $tmp = array_slice($arr, 0, $num);
            $string = join('', $tmp);
            break;
        case 3:
            // 0-9 a-z A-Z
            $str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ';
            $string = substr(str_shuffle($str), 0, $num);
            break;
    }
//    echo $string;
    // 给背景颜色填充浅色
    imagefilledrectangle($image, 0, 0, $width, $height, lightColor($image));
    // 4、 开始写字
    for ($i = 0; $i < $num; $i++) {
        $x = floor($width / $num) * $i;
        $y = mt_rand(10, $height -20);
        imagechar($image, 5, $x, $y, $string[$i], deepColor($image));
    }

    //5、干扰线（点）
    for ($i = 0; $i < $num; $i++) {
        imagearc($image, mt_rand(10, $width), mt_rand(10, $height), mt_rand(10, $width), mt_rand(10, $height), mt_rand(0, 10), mt_rand(0, 270), deepColor($image));
    }
    for ($i = 0; $i < 50; $i++) {
        imagesetpixel($image, mt_rand(0, $width), mt_rand(0, $height), deepColor($image));
    }
    // 6指定输出的类型
    header("Content-type: image/png");;
    // 7 准备输出图片
    imagepng($image);
    //销毁
    imagedestroy($image);

    return $string;
}

/**
 *  浅色
 * @param $image
 * @return int
 */
function lightColor($image) {
    return imagecolorallocate($image, mt_rand(130, 255), mt_rand(130, 255), mt_rand(130, 255));
}

/**
 * 深色
 * @param $image
 * @return int
 */
function deepColor($image) {
    return imagecolorallocate($image, mt_rand(0, 120), mt_rand(0, 120), mt_rand(0, 120));
}