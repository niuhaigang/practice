<?php
/**
 * Created by PhpStorm.
 * User: new
 * Date: 2018/4/11
 * Time: 18:20
 */
$id = $_GET['id'];

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
// 删除语句
$sql = "delete from user where id=$id";
//6 发送sql语句
$boolean = mysqli_query($link, $sql);
//mysqli_affected_rows($link)函数返回前一次 MySQL 操作所影响的记录行数。
if ($boolean && mysqli_affected_rows($link)) {
    echo '删除成功<a href="userLists.php">返回</a>';
} else {
    echo '删除失败';
}
mysqli_close($link);