<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
/*
Plugin Name: Push Down Banners (Free Version)
Plugin URI: http://pushdownbanners.com
Description: Create professional push down banners for any page on your Wordpress site.
Version: 1.3
Author: Melodic Media
Author URI: http://melodicmedia.com
License: Copyright 2013 Melodic Media
Text Domain: push-down-banners
Domain Path: /languages
*/

include_once('pushdownoptions.php');
function push_load_plugin_textdomain() {
  load_plugin_textdomain( 'push-down-banners', false, basename( dirname( __FILE__ ) ) . '/languages' );
}
add_action( 'plugins_loaded', 'push_load_plugin_textdomain' );
add_action('wp_enqueue_scripts', 'push_pushdwonhead');
add_action('wp_footer', 'push_pushdowndiv');
add_filter( 'plugin_row_meta', 'push_plugin_meta_links', 10, 2 );

function push_plugin_meta_links( $links, $file ) {
 
$plugin = plugin_basename(__FILE__);
 
// create link
if ( $file == $plugin ) {
return array_merge(
$links,
array( '<a href="http://www.expandablebanners.com/buy_push_wp.php">'.__('Buy Full Version','push-down-banners').'</a>' )
);
}
return $links;
 
}


function push_pushdwonhead() {
       

	wp_register_script( 'melo-pushdownbanner', plugins_url('pushdownbanners.js', __FILE__) );
	wp_enqueue_script('pushflashscript',  plugins_url('swfobject/swfobject.js', __FILE__));
        wp_enqueue_script( 'melo-pushdownbanner' );

	
}



function push_pushdowndiv(){ 
global $wpdb;
$folder=plugins_url('', __FILE__)."/images";
 
  $ispg="No";
  $push_pushdownoptions=get_option('push_options');
  if($push_pushdownoptions){
  if(is_home()){
	  $this_title='Home';
  }else{
      $this_title=get_the_title(get_the_ID());
  }

if($push_pushdownoptions['showonpage']=='Specific' && $push_pushdownoptions['pagetitle']==$this_title){
	$ispg="Yes";
}else if($push_pushdownoptions['showonpage']=='Home' && $push_pushdownoptions['pagetitle']==$this_title){
	$ispg="Yes";
}else if($push_pushdownoptions['showonpage']=='All'){
		$ispg="Yes";
	

}

	
	

if($ispg=="Yes"){	
	

?>

<?php
 
	 $bannertype=$push_pushdownoptions['bannertype'];
		   $bgcolor=$push_pushdownoptions['bgcolor'];
		    $bgimage=$push_pushdownoptions['bgimage'];
		    $bannerid=$push_pushdownoptions['bannerid'];
	   $mainnewwindow=$push_pushdownoptions['mainnewwindow'];
		   $imageoption=$push_pushdownoptions['imageoption'];
		   $bannername=$push_pushdownoptions['bannername'];
		   $mainbanner=$push_pushdownoptions['mainbanner'];
		   $mainwidth=$push_pushdownoptions['mainwidth'];
		   $mainheight=$push_pushdownoptions['mainheight'];
		   $responsive=$push_pushdownoptions['responsive'];
		   $mainurl=$push_pushdownoptions['mainurl'];
		   $autoopen=$push_pushdownoptions['autoopen'];
		   $autoclose=$push_pushdownoptions['autoclose'];
		   $autoopentime=$push_pushdownoptions['autoopentime']*1000;
		   $autoclosetime=$push_pushdownoptions['autoclosetime']*1000;
		   $onceperday=$push_pushdownoptions['onceperday'];
		   $firstonpage=$push_pushdownoptions['firstonpage'];
		    $showonpage=$push_pushdownoptions['showonpage'];
		   $abovecss=$push_pushdownoptions['abovecss'];
		    $belowcss=$push_pushdownoptions['belowcss'];
		   if($bannertype=='Image'){  
		  if($imageoption=='Option 4'){
			   $objectheight=$mainheight;
		   }
	  
	 }
	  
	?>

<script type="text/javascript">
 var adm_url="<?php echo esc_url(admin_url());?>"; 
 var panid = "<?php echo esc_js($bannerid); ?>|Plugin|Push";
			ocis(panid);
var _gPDBSpeed = 20;
var _gPDBTime = 2200;
</script>



<style type="text/css">
img
{
	max-width:100%
	}
	

</style>
<?php if($onceperday=='Yes'){ ?>
   <style type="text/css">
#PushdownAd2 {
   display: none;
}
#PushdownAd2.show {
    display: block;
}
</style>



<script type="text/javascript">
function createCookie(name,value,days) {
if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}
 
function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}
 
function eraseCookie(name) {
createCookie(name,"",-1);
}

</script>
<?php }?> 
<div id="tmp_push" style="display:hidden">
    
<?php if($onceperday=='Yes'){ ?>
  <div id="PushdownAd2">
<?php }?>
<div style="<?php echo esc_attr($abovecss);?>"></div>
 <?php if($bannertype=='Image'){?>
  
 <?php if($imageoption=='Option 4'){?>
<div id="PushdownAd1" class="PushdownAd" style="width:auto; height:0px; <?php if($bgimage!=''){ ?>background-Image:url(<?php echo esc_url($folder.'/'.$bgimage); ?>); background-repeat:repeat;<?php }?> <?php if($bgcolor!=''){ ?>background-color:<?php echo esc_attr($bgcolor.";"); }?> overflow:hidden;">
  
   <object width="<?php echo esc_attr($mainwidth); ?>" height="<?php echo esc_attr($objectheight); ?>">  
  <center>
  		 <div id="outer">	
	 <a href="<?php echo esc_url($mainurl); ?>" onclick="occs(panid);" <?php if($mainnewwindow=='Yes'){?>target="_blank"<?php }?>><img <?php if($responsive=='Yes'){ ?>id="mainimg"<?php }?> src="<?php echo esc_url($folder."/".$mainbanner); ?>" border="0"></a>
 		  </div>	
   
  </center>
  </object>
</div>
<?php }?>
<?php }?>
  
 
<div style="<?php echo esc_attr($belowcss); ?>"></div>
<?php if($onceperday=='Yes'){ ?>
</div>
<script type="text/javascript">
var days = 1;
var PushdownAd2 = document.getElementById('PushdownAd2');
if (readCookie('seenAdvert')) {
    PushdownAd2.className = '';
} else {
    PushdownAd2.className = 'show';
    createCookie('seenAdvert', 'yes', days);
}
</script>

<?php }?>
</div>

<script type="text/javascript">
<?php if($firstonpage=='Yes'){?>
jQuery( "body" ).prepend(document.getElementById('tmp_push').innerHTML);
<?php }else{?>
if(document.getElementById('<?php echo esc_js($push_pushdownoptions['divid']); ?>')!=null){
<?php if($push_pushdownoptions['beforediv']=='Yes'){?>
document.getElementById('<?php echo esc_js($push_pushdownoptions['divid']); ?>').innerHTML=document.getElementById('tmp_push').innerHTML+document.getElementById('<?php echo esc_js($push_pushdownoptions['divid']); ?>').innerHTML;
<?php }else{?>
document.getElementById('<?php echo esc_js($push_pushdownoptions['divid']); ?>').innerHTML+=document.getElementById('tmp_push').innerHTML;
<?php }?>
}
<?php }?>
document.getElementById('tmp_push').innerHTML="";
</script>
<script type="text/javascript">
<?php if($autoopen=='Yes' || $imageoption=='Option 3' || $imageoption=='Option 4' || $autoclose=='Yes' || $imageoption=='Option 2'){?>

	<?php if($autoopen=='Yes' || $imageoption=='Option 3' || $imageoption=='Option 4'){?>
_gPDBAutoopen=<?php echo esc_js($autoopentime); ?>;
<?php }?>
<?php if($autoclose=='Yes' || $imageoption=='Option 2' || $imageoption=='Option 4'){?>
_gPDBAutoclose= <?php echo esc_js($autoclosetime); ?>;
<?php }?>
<?php }?>
<?php if(($bannertype=="HTML" && $htoggle=='Yes') || ($bannertype=="Image" && $toggle=='Yes')){ ?>_Toggle=1;<?php }?>
</script>
<?php
  }

  }
}

function push_db_install(){
	global $wpdb;
  

  
   require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
 
 $table_name = $wpdb->prefix . "daily_stats";
   $sql="CREATE TABLE IF NOT EXISTS ".$table_name." (
  `idDailyStats` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `BannerId` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `BannerType` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'PushDown',
  `StatsDate` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `StatsMonth` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `StatsYear` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `DClicks` int(11) NOT NULL DEFAULT '0',
  `DImpressions` int(11) NOT NULL DEFAULT '0',
  `DOpens` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idDailyStats`),
  KEY `BannerId` (`BannerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;";
dbDelta( $sql );
}

register_activation_hook( __FILE__, 'push_db_install' );
function push_copyr($source, $dest)
{
    // Check for symlinks
    if (is_link($source)) {
        return symlink(readlink($source), $dest);
    }

    // Simple copy for a file
    if (is_file($source)) {
        return copy($source, $dest);
    }

    // Make destination directory
    if (!is_dir($dest)) {
        mkdir($dest);
    }

    // Loop through the folder
    $dir = dir($source);
    while (false !== $entry = $dir->read()) {
        // Skip pointers
        if ($entry == '.' || $entry == '..') {
            continue;
        }

        // Deep copy directories
		if(is_file($source.'/'.$entry) && strpos($entry,'ile_')==1)
        push_copyr("$source/$entry", "$dest/$entry");
    }

    // Clean up
    $dir->close();
    return true;
}
function push_backup()
{
	$upload_dir = wp_upload_dir();
	$to = $upload_dir['basedir']."/push_images_backup/";
	$from = plugin_dir_path(__FILE__)."images/";
	if(is_dir($to))push_rmdirr($to);
	push_copyr($from, $to);
}
function push_recover()
{
	$upload_dir = wp_upload_dir();
	$from = $upload_dir['basedir']."/push_images_backup/";
	$to = plugin_dir_path(__FILE__)."images/";
	push_copyr($from, $to);
	if (is_dir($from)) {
		push_rmdirr($from);#http://putraworks.wordpress.com/2006/02/27/php-delete-a-file-or-a-folder-and-its-contents/
	}
}
function push_rmdirr($dirname)
{
// Sanity check
if (!file_exists($dirname)) {
return false;
}

// Simple delete for a file
if (is_file($dirname)) {
return unlink($dirname);
}

// Loop through the folder
$dir = dir($dirname);
while (false !== $entry = $dir->read()) {
// Skip pointers
 if ($entry == '.' || $entry == '..') {
continue;
}

// Recurse
push_rmdirr("$dirname/$entry");
}

// Clean up
$dir->close();
return rmdir($dirname);
}
add_filter('upgrader_pre_install', 'push_backup', 10, 2);
add_filter('upgrader_post_install', 'push_recover', 10, 2);
?>