<?php
if(!defined('DOKU_INC')) define('DOKU_INC',realpath(dirname(__FILE__).'/../../../').'/');
if(!defined('DOKU_PLUGIN')) define('DOKU_PLUGIN',DOKU_INC.'lib/plugins/');
require_once(DOKU_PLUGIN.'action.php');

/**
 * @license    GPL 2 (http://www.gnu.org/licenses/gpl.html)
 * @author     Pierre Spring <pierre.spring@liip.ch>
 */

class action_plugin_ckgdoku_delete extends DokuWiki_Action_Plugin {


    function register(Doku_Event_Handler $controller) {
        $controller->register_hook('DOKUWIKI_STARTED', 'BEFORE', $this, 'ckgdoku_delete_preprocess');
    }

    function ckgdoku_delete_preprocess(Doku_Event $event){
        global $ACT;
        if (! is_array($ACT) || !(isset($ACT['delete']))) return;
        global $TEXT;
        $TEXT = NULL;
        unset($ACT['delete']);
        $ACT['save'] = "Speichern";
    }


} //end of action class
?>
