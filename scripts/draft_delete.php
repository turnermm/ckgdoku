<?php
define('DOKU_INC', realpath(dirname(__FILE__)) . '/../../../../');
require_once(DOKU_INC.'inc/init.php');
require_once(DOKU_INC.'inc/io.php');
global $INPUT;

$cname = $INPUT->str('draft_id');
$cname = urldecode($cname);
if(!preg_match("#/data/cache/\w/[a-f0-9]{32}\.draft$#i", $cname)) return;
$ckgdoku_cname = $cname . '.fckl';


if(file_exists($cname)) {
   io_lock($cname);
   if(file_exists($ckgdoku_cname)) {
      unlink($ckgdoku_cname); 
   }
   unlink($cname); 

  exit;
}

echo "done";

