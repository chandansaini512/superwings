<?php
require 'assignment5.php';
use PHPUnit\Framework\TestCase;

class EqualsTest extends TestCase
{
    public $temp;

    protected function setUp(){
        $this->$temp =new sample;
    }

    public function testfunc1(){
        $res=$this->$temp->evenodd(12);
        $this->assertEquals(1,$res);
    }
    public function testfunc2(){
        $res=$this->$temp->Palindrome('racecar');
        $this->assertEquals(0,$res);
    }
    public function testfunc3(){
        $res=$this->$temp->year_check(1996);
        $this->assertEquals(true,$res);
    }
    public function testfunc4(){
        $res=$this->$temp->chargescal(12);
        $this->assertEquals(215,$res);
    }
    public function testfunc5(){
        $res=$this->$temp->medianofarray(array(1.5,4,8.1,3.2,5,3));
        $this->assertEquals(3.5,$res);
    }
}
?>