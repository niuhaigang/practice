<?php
/**
 * Created by PhpStorm.
 * User: new
 * Date: 2018/4/13
 * Time: 14:08
 */
//var_dump($_FILES);

//判断是否有错误号
if ($_FILES['file']['error']){
    switch ($_FILES['file']['error']) {
        case 1:
            //UPLOAD_ERR_INI_SIZE
            //其值为 1，上传的文件超过了 php.ini 中 upload_max_filesize选项限制的值。
            $str = '传的文件超过了 php.ini 中 upload_max_filesize选项限制的值';
            break;
        case 2:
            // UPLOAD_ERR_FORM_SIZE
            //其值为 2，上传文件的大小超过了 HTML 表单中 MAX_FILE_SIZE 选项指定的值。
            $str = '上传文件的大小超过了 HTML 表单中 MAX_FILE_SIZE 选项指定的值';
            break;
        case 3:
            // UPLOAD_ERR_PARTIAL
            // 其值为 3，文件只有部分被上传。
            $str = '文件只有部分被上传';
            break;
        case 4:
            // UPLOAD_ERR_NO_FILE
            // 其值为 4，没有文件被上传。
            $str = '没有文件被上传';
            break;
        case 6:
            //UPLOAD_ERR_NO_TMP_DIR
            //其值为 6，找不到临时文件夹。PHP 4.3.10 和 PHP 5.0.3 引进。
            $str = '找不到临时文件夹';
            break;
        case 7:
            //UPLOAD_ERR_CANT_WRITE
            //其值为 7，文件写入失败。PHP 5.1.0 引进。
            $str = '文件写入失败';
            break;
    }
}

// 判断准许上传文件大小
if ($_FILES['file']['size'] > (pow(1024, 2) * 2)) {
    exit('文件大小超过了准许大小');
}

// 判断准许的 mime类型 文件后缀
$allowMime = ['image/png', 'image/png', 'image/gif', 'image/wbmp'];
$allowSubFix = ['png', 'jpg', 'jpeg', 'gif', 'wamp'];
$info = pathinfo($_FILES['file']['name']);
//var_dump($info);

$subFix = $info['extension'];
if (!in_array($subFix, $allowSubFix)) {
  exit('不容许的文件后缀');
};
if (!in_array($_FILES['file']['type'], $allowMime)) {
    exit('不容许的mime类型');
}

// 拼接上传路径
$path = 'upload/';
// 判断是否有上传路径
if (!file_exists($path)) {
    mkdir($path);
}

//文件名随机
$name = uniqid() . '.' . $subFix;

// 判断是否是上传文件
if (is_uploaded_file($_FILES['file']['tmp_name'])) {
    if (move_uploaded_file($_FILES['file']['tmp_name'], $path.$name)) {
        echo '上传成功';
    }
    else {
        echo '文件移动失败';
    }

} else {
 exit('不是上传文件');
}
