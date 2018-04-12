<?php
/**
 * Created by PhpStorm.
 * User: new
 * Date: 2018/4/12
 * Time: 17:38
 */
$account = 'zhangsan';
$password = '123';
//var_dump($_GET);
if ($account == $_GET['account'] && $password == $_GET['password']) {
    // setcookie("TestCookie", $value, time()+3600, path);
    // setcookie('isLogin', true, time()+3600, '/'); // cookie 记录缓存浏览器上；
    // setcookie('isLogin', '', time()+3600, '/'); // 删除缓存

    // 通过$_SESSION
    session_start();
    $_SESSION['isLogin'] = true;
    // unset() 函数用于释放指定的 session 变量：
    //    unset($_SESSION['isLogin']);
    //可以通过 session_destroy() 函数彻底终结 session：
    //session_destroy();
    echo '登录成功<a href="userLists.php">点击进入列表页</a>';
} else {
    echo '登录失败，请检查你的账号、密码';
}