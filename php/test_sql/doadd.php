<?php
/**
 * Created by PhpStorm.
 * User: new
 * Date: 2018/4/11
 * Time: 14:07
 */
    $name = $_GET['username'];
    $age = $_GET['age'];
    $sex = $_GET['sex'];
    $address = $_GET['address'];
//    var_dump($_GET);
    //1 链接数据库
    $link = mysqli_connect('localhost', 'root', '');
    // var_dump($link);
    //2 判断是否连接成功
    if(!$link) {
        exit('数据库链接失败');
    }
    //3 设置字符集
    mysqli_set_charset($link, 'utf8');
    //4 选择数据库
    mysqli_select_db($link, 'bbs');
    //5 准备sql语句 （select updata insert delete）
//    $sql = "select * from user";
    // 添加语句
    //insert into user(name, age, address, sex) VALUE('六品', '32', '窦村', '0');
    $sql = "insert into user(name, age, address, sex) values('$name', $age, '$address', $sex)";
    //6 发送sql语句
    $res = mysqli_query($link, $sql);
//  var_dump($res);
    // mysql_insert_id() 函数返回上一步 INSERT 操作产生的 ID。
    $id = mysqli_insert_id($link);
    if ($id) {
        echo '添加成功<a href="userLists.php">返回用户列表</a>';
    } else {
        echo '添加失败';
    }

mysqli_close($link);