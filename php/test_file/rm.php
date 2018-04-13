<?php
/**
 * Created by PhpStorm.
 * User: new
 * Date: 2018/4/13
 * Time: 13:43
 */

// 创建文件夹 0700最大权限
//mkdir('test/a/b/c/d', 0700, true);

/**
 * 递归删除文件夹
 * @param $path
 */
rm('test');
function rm($path) {
    // 打开目录
    $dir = opendir($path);
//    var_dump($dir);
    // 跳过两特殊的目录结构 遍历目录时，会包括“.”和“..”两个特殊的目录
    readdir($dir);
    readdir($dir);
    // 循环删除
    while ($newFile = readdir($dir)) {
        //判断是否是文件还是文件夹
        $newPath = $path . '/' . $newFile;
        if (is_file($newPath)) {
            unlink($newPath);
        } else {
            rm($newPath);
        }
    }
    closedir($dir);
    rmdir($path);
}