<?php
/**
 * 面向对象的练习
 * User: new
 * Date: 2018/4/13
 * Time: 17:21
 */

/**
 * 父类
 */
Class Father {
    // 属性
    /*
      *             外部访问       子类继承
      * public        可以           可以
      * protected    不可以          可以
      * private      不可以         不可以
    */
    public $name;
    protected $age;
    private $height;
    static $like = '吃';
    const SEX = '男';

    /**
     * 魔术方法
     */
    public function __construct(){
        echo '测试'; //自动执行， 输出“测试”
        $this->name = '父亲';
        $this->age = 49;
        $this->height = 180;
        echo self::$like;  // 吃
        echo self::SEX; // 男
//          echo $this->like; //报错
//          echo $this->SEX;//报错
    }

    /**
     * 父类中方法
     */
    public function work() {
        echo '<h2>努力工作</h2>';
    }
    /**
     *  重写的时候权限只能放大不能缩小
     *  在子集是可以的
     */
//    protected function jump() {
//        echo '<h2>能跳3米</h2>';
//    }
    public function jump() {
        echo '<h2>能跳3米</h2>';
    }
    /**
     * 完全输出
     */
    public function out() {
        echo '<h2>'.$this->name.' </h2>';
        echo '<h2>'.$this->age.' </h2>';
        echo '<h2>'.$this->height.' </h2>';
    }
}
/**
 * 子类继承父类
 */
Class Son extends Father {
    /**work
     * 重写父类方法
     */
    public function jump() {
        echo '<h2>能跳5米</h2>';
    }
    public function work() {
        parent::work(); //在父类基础上添加
        echo '<h2>还要谈恋爱</h2>';
    }
    /**
     * 完全输出
     */
    public function sonOut() {
        echo '<h2>'.$this->name.' </h2>';// 父亲
        echo '<h2>'.$this->age.' </h2>'; // 49
//        echo '<h2>'.$this->height.' </h2>'; // 报错
    }
}
$f = new father();

echo $f->name.'<br />'; // “父亲”
//echo $f->age.'<br />'; // 报错
//echo $f->height.'<br />';// 报错

//$f->out();

$ming = new Son();
$ming->work(); //"努力工作/n 还要谈恋爱"
$ming->jump(); //"能跳5米"

$ming->sonOut();