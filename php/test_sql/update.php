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
    $sql = "select * from user where id=$id";

    //6 发送sql语句
    $boolean = mysqli_query($link, $sql);
    $rows = mysqli_fetch_assoc($boolean);
    mysqli_close($link);
?>
<html>
<form action="doupdate.php" method="get">
    <input type="hidden" name="id" value="<?=$id;?>">
    <p><able>姓名：</able><input type="text" name="username" value="<?=$rows['name'];?>"></p>
    <p><able>年龄：</able><input type="text" name="age" value="<?=$rows['age'];?>"></p>
    <p><able>地址：</able><input type="text" name="address" value="<?=$rows['address'];?>"></p>
    <p><able>性别：</able><input type="text" name="sex" value="<?=$rows['sex'];?>"</p>
    <p><input type="submit" value="修改"></p>
</form>
</html>