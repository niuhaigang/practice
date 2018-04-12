<?php
//    $isLogin = $_COOKIE['isLogin'];
    session_start();
    if (empty( $_SESSION['isLogin'])) {
        exit('请先登录<a href="login.html">点击跳转登录页面</a>');
    }
    //    var_dump( $isLogin);
    $page = empty($_GET['page']) ? 1 : $_GET['page'];
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
    //------------分页开始--------------------

    // 求出总条数
    $sql = "select count(*) as count from user";
    $result = mysqli_query($link, $sql);
    $pageRes = mysqli_fetch_assoc($result);
    $count = $pageRes['count'];
    //var_dump($count);
    // 每页显示数5条
    $num = 5;
    // 总页数
    $pageCount = ceil($count/$num);
    // 根据总页数求出偏移量
    $offset = ($page-1) * $num;
    //-------------分页结束-------------------
    //5 准备sql语句 （select updata insert delete）
    $sql = "select * from user limit " . $offset . "," .$num;
    //6 发送sql语句
    $obj = mysqli_query($link, $sql);
    //    var_dump($obj);
    echo '<p><a href="add.html">添加</a></p>';
    echo '<table width="600" border="1" style="text-align: center">';
        echo '<th>用户名</th><th>年龄</th><th>性别</th><th>地址</th><th>操作</th>';
        while($rows = mysqli_fetch_assoc($obj)) {
            echo '<tr>';
                echo '<td>'.$rows['name'].'</td>';
                echo '<td>'.$rows['age'].'</td>';
                echo '<td>'.($rows['sex'] ? '女': '男').'</td>';
                echo '<td>'.$rows['address'].'</td>';
                echo '<td><a href="del.php?id='.$rows['id'].'">删除</a>/<a href="update.php?id='.$rows['id'].'">修改</a></td>';
            echo '</tr>';
        }
    echo '</table>';
    $prev = $page - 1;
    ($prev < 1) ? 1 : $prev;
    if($prev < 1) {
        $prev = 1;
    }
    $next = $page + 1;
    if($next > $pageCount) {
        $next = $pageCount;
    }
    //8 关闭数据库（释放资源）
    mysqli_close($link);
?>
<p>
<a href="userlists.php">首页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="userlists.php?page=<?=$prev ?>">上一页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="userlists.php?page=<?=$next ?>">下一页</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="userlists.php?page=<?=$pageCount ?>">尾页</a>
</p>