<?php
/**
 * Created by PhpStorm.
 * User: new
 * Date: 2018/4/13
 * Time: 13:43
 */

// �����ļ��� 0700���Ȩ��
//mkdir('test/a/b/c/d', 0700, true);

/**
 * �ݹ�ɾ���ļ���
 * @param $path
 */
rm('test');
function rm($path) {
    // ��Ŀ¼
    $dir = opendir($path);
//    var_dump($dir);
    // �����������Ŀ¼�ṹ ����Ŀ¼ʱ���������.���͡�..�����������Ŀ¼
    readdir($dir);
    readdir($dir);
    // ѭ��ɾ��
    while ($newFile = readdir($dir)) {
        //�ж��Ƿ����ļ������ļ���
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