<?php
/**
 * Created by PhpStorm.
 * User: new
 * Date: 2018/4/12
 * Time: 16:24
 */
/**
 * 生成水印图片函数
 * @param $source 大图资源
 * @param string $water 小图
 * @param int $position 位置  定位分成9份
 * @param int $alpha 透明度默认100
 * @param string $type 图片类型
 * @param string $path 生成路径
 * @param bool|true $isRandName 是否随机名字
 */
water('bg.jpg');
function water($source, $water = 'icon.png', $position = 9, $alpha = 100, $type = "jpeg", $path = 'images', $isRandName = false ) {
    // 打开图片
    $sourceRes = open($source);
//    var_dump($sourceRes);
    $waterRes = open($water);

    // 获取图片大小 算出来位置
    $sourceInfo = getimagesize($source);
    $waterInfo = getimagesize($water);

    // 算位置
    switch ($position) {
        case 1:
            $x = 0;
            $y = 0;
            break;
        case 2:
            $x = ($sourceInfo[0] - $waterInfo[0]) / 2;
            $y = 0;
            break;
        case 3:
            $x = $sourceInfo[0] - $waterInfo[0];
            $y = 0;
            break;
        case 4:
            $x = 0;
            $y = ($sourceInfo[1] - $waterInfo[1]) / 2;
            break;
        case 5:
            $x = ($sourceInfo[0] - $waterInfo[0]) / 2;
            $y = ($sourceInfo[1] - $waterInfo[1]) / 2;
            break;
        case 6:
            $x = $sourceInfo[0] - $waterInfo[0];
            $y = ($sourceInfo[1] - $waterInfo[1]) / 2;
            break;
        case 7:
            $x = 0;
            $y = $sourceInfo[1] - $waterInfo[1];
            break;
        case 8:
            $x = ($sourceInfo[0] - $waterInfo[0]) / 2;
            $y = $sourceInfo[1] - $waterInfo[1];
            break;
        case 9:
            $x = $sourceInfo[0] - $waterInfo[0];
            $y = $sourceInfo[1] - $waterInfo[1];
            break;
        default:
            $x = mt_rand(0, $sourceInfo[0] - $waterInfo[0]);
            $y = mt_rand(0, $sourceInfo[1] - $waterInfo[1]);
    }
    // 把x y 求出来的值供两张图片合并的时候使用

    imagecopymerge($sourceRes, $waterRes, $x, $y, 0, 0, $waterInfo[0], $waterInfo[1], $alpha);

    $func = 'image'.$type;
    /**
     * imagepng();
     * imagejpeg();
     * imagewbmp();
     */
    //处理path 路径 是否启用随机文件名
    if ($isRandName) {
        $name = uniqid() . '.' . $type;
    } else {
        $pathInfo = pathinfo($source);
//        var_dump($pathInfo);

        $name = $pathInfo['filename'] . '.' . $type;
    }
    // 防止双斜杠
    $path = rtrim($path, '/') . '/' .$name;
    $func($sourceRes, $path);
    // 销毁
    imagedestroy($sourceRes);
    imagedestroy($waterRes);
}

/**
 * 打开图片函数
 * @param $path 图片路径
 */
function open($path) {
    //判断是否存在
    if (!file_exists($path)) {
        exit('文件不存在');
    }
    $info = getimagesize($path);
//    var_dump($info);
    $res = '';
    switch ($info['mime']) {
        case 'image/jpeg':
        case 'image/jpg':
        case 'image/pjpeg':
            $res = imagecreatefromjpeg($path);
            break;
        case 'image/png':
            $res = imagecreatefrompng($path);
            break;
        case 'image/gif':
            $res = imagecreatefromgif($path);
            break;
        case 'image/wbmp':
        case 'image/bmp':
            $res = imagecreatefromwbmp($path);
            break;
    }
    return $res;
}