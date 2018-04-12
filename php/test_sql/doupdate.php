<?php
/**
 * Created by PhpStorm.
 * User: new
 * Date: 2018/4/11
 * Time: 14:07
 */
    $id = $_GET['id'];
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
    // 修改语句
    $sql = "update user set name='$name', sex='$sex', address='$address', age='$age'where id=$id";
    //6 发送sql语句
    $res = mysqli_query($link, $sql);
    //mysqli_affected_rows($link)函数返回前一次 MySQL 操作所影响的记录行数。
    if ($res && mysqli_affected_rows($link)) {
        echo '修改成功';
    } else {
        echo '修改失败';
    }


mysqli_close($link);