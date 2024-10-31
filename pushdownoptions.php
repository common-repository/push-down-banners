<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
add_action('admin_menu', 'push_menu');
add_action('admin_init', 'push_pushdownoptions_init' );
add_action('wp_ajax_push_submit','push_submit_callback');
add_action('wp_ajax_push_uplimage','push_uplimage_callback');
add_action('wp_ajax_push_clicks','push_clicks_callback');
add_action('wp_ajax_push_impressions','push_impressions_callback');
add_action('wp_ajax_push_opens','push_opens_callback');
add_action('wp_ajax_nopriv_push_clicks','push_clicks_callback');
add_action('wp_ajax_nopriv_push_impressions', 'push_impressions_callback');
add_action('wp_ajax_nopriv_push_opens','push_opens_callback');
function push_clicks_callback(){
	global $wpdb;
	$week=date('W');
	$date=date('m-d-Y');
	$month=date('F');
				 $year=date('Y');
				      $bannerid=sanitize_text_field($_POST['id']);
						  
							 	 $id=$date."_".$bannerid;
							 $mres=$wpdb->get_row($wpdb->prepare("SELECT * FROM ".$wpdb->prefix ."daily_stats WHERE StatsDate=%s AND StatsMonth=%s AND BannerId=%s AND StatsYear=%s AND BannerType='PushDown'",$date,$month,$bannerid,$year));
							 
							 if(!$mres){
								
								 $res=$wpdb->query($wpdb->prepare("INSERT INTO ".$wpdb->prefix ."daily_stats(idDailyStats,BannerId,BannerType,StatsDate,StatsMonth,StatsYear,DClicks) VALUES(%s,%s,'PushDown',%s,%s,%s,'1')",$id,$bannerid,$date,$month,$year));
							 }else{
								
								
								
								$res=$wpdb->update($wpdb->prefix."daily_stats",array('DClicks'=>$mres->DClicks+1),array('StatsDate'=>$date, 'StatsMonth'=>$month , 'BannerId'=>$bannerid ,'StatsYear'=>$year, 'BannerType'=>'PushDown'));
								 
							 }
							 
}
function push_impressions_callback(){
	global $wpdb;
	$week=date('W');
	$date=date('m-d-Y');
	$month=date('F');
				 $year=date('Y');
				      $bannerid=sanitize_text_field($_POST['id']);
						  
							 	 $id=$date."_".$bannerid;
							 $mres=$wpdb->get_row($wpdb->prepare("SELECT * FROM ".$wpdb->prefix ."daily_stats WHERE StatsDate=%s AND StatsMonth=%s AND BannerId=%s AND StatsYear=%s AND BannerType='PushDown'",$date,$month,$bannerid,$year));
							 
							 if(!$mres){
								
								 $res=$wpdb->query($wpdb->prepare("INSERT INTO ".$wpdb->prefix ."daily_stats(idDailyStats,BannerId,BannerType,StatsDate,StatsMonth,StatsYear,DImpressions) VALUES(%s,%s,'PushDown',%s,%s,%s,'1')",$id,$bannerid,$date,$month,$year));
							 }else{
								
								
								
								$res=$wpdb->update($wpdb->prefix."daily_stats",array('DImpressions'=>$mres->DImpressions+1),array('StatsDate'=>$date, 'StatsMonth'=>$month , 'BannerId'=>$bannerid ,'StatsYear'=>$year, 'BannerType'=>'PushDown'));
								 
							 }
							 
}
function push_opens_callback(){
	global $wpdb;
	$week=date('W');
	$date=date('m-d-Y');
	$month=date('F');
				 $year=date('Y');
				      $bannerid=sanitize_text_field($_POST['id']);
						  
							 	 $id=$date."_".$bannerid;
							 $mres=$wpdb->get_row($wpdb->prepare("SELECT * FROM ".$wpdb->prefix ."daily_stats WHERE StatsDate=%s AND StatsMonth=%s AND BannerId=%s AND StatsYear=%s AND BannerType='PushDown'",$date,$month,$bannerid,$year));
							 
							 if(!$mres){
								
								 $res=$wpdb->query($wpdb->prepare("INSERT INTO ".$wpdb->prefix ."daily_stats(idDailyStats,BannerId,BannerType,StatsDate,StatsMonth,StatsYear,DOpens) VALUES(%s,%s,'PushDown',%s,%s,%s,'1')",$id,$bannerid,$date,$month,$year));
							 }else{
								
								
								
								$res=$wpdb->update($wpdb->prefix."daily_stats",array('DOpens'=>$mres->DOpens+1),array('StatsDate'=>$date, 'StatsMonth'=>$month , 'BannerId'=>$bannerid ,'StatsYear'=>$year, 'BannerType'=>'PushDown'));
								 
							 }
							 
}
function push_uplimage_callback(){
	 $folder=plugin_dir_path( __FILE__)."images";
	 
	if(!is_dir($folder)){
	  
            @mkdir($folder);	
			
       }
	   

if(@is_uploaded_file(sanitize_text_field($_FILES['file']['tmp_name'])) ){
	
	                 if(sanitize_text_field($_POST['previmg'])!='' && file_exists($folder."/".sanitize_text_field($_POST['previmg']))  && strpos(sanitize_text_field($_POST['previmg']),'ile_')!=false){
											     unlink($folder."/".sanitize_text_field($_POST['previmg']));
											 }
	
					$fname = sanitize_text_field($_FILES['file']["name"]);
					$filesize= sanitize_text_field($_FILES['file']["size"]);
					if(!$fname==""){					
					$chk_ext = explode(".",$fname);
									
								 if(strtolower($chk_ext[1]) == "gif" || strtolower($chk_ext[1]) == "jpg" || strtolower($chk_ext[1]) == "png" || strtolower($chk_ext[1]) == "swf")
								 {
									if(sanitize_text_field($_POST['ftype'])=="firstflashfile" && $filesize>50000){
									       echo "sizeerror";
										   die();
									}else if(sanitize_text_field($_POST['ftype'])=="mainflashfile" && $filesize>250000){
									       echo "sizeerror";
										    die();
									}else if(sanitize_text_field($_POST['ftype'])=="firstbackupimage" && $filesize>250000){
									       echo "sizeerror";
										    die();
									}else if(sanitize_text_field($_POST['ftype'])=="mainbackupimage" && $filesize>250000){
									       echo "sizeerror";
										    die();
									}else if(sanitize_text_field($_POST['ftype'])=="firstimage" && $filesize>50000){
									       echo "sizeerror";
										    die();
									}else if(sanitize_text_field($_POST['ftype'])=="mainimage" && $filesize>250000){
									       echo "sizeerror";
										    die();
									}else if(sanitize_text_field($_POST['ftype'])=="closeimage" && $filesize>50000){
									       echo "sizeerror";
										    die();
									}else if(sanitize_text_field($_POST['ftype'])=="backimage" && $filesize>50000){
									       echo "sizeerror";
									}else if(sanitize_text_field($_POST['ftype'])=="fcloseimage" && $filesize>50000){
									       echo "sizeerror";
									}else if(sanitize_text_field($_POST['ftype'])=="hcloseimage" && $filesize>50000){
									       echo "sizeerror";
									}else{
										
											 $filename = sanitize_text_field($_FILES['file']['tmp_name']);
									     
											  $serverbanner="file_".rand(0, 9999999999).".".$chk_ext[1];
											  while (file_exists($folder."/".$serverbanner))
		                                             $serverbanner="file_".rand(0, 9999999999).".".$chk_ext[1];
		                                      $savefile=$folder."/".$serverbanner;
								            
											 @move_uploaded_file($filename, $savefile);
											
											 echo $serverbanner;
											  die();
											
									}
											 
								
						}else{
							
						  echo "Imageerror";
						
						}
					}
}

	}
function push_submit_callback(){
	header('content-type: text/html; charset=utf-8');

global $wpdb;
$table_name=$wpdb->prefix . "pushdownbanners";
$folder=plugins_url('', __FILE__)."/images";
   if(isset($_POST['action']) && sanitize_text_field($_POST['action'])=='push_submit'){
	   $imageoption=sanitize_text_field($_POST['imageoption']);
	    
	   $bannername=sanitize_text_field($_POST['bannername']);
	   $bannertype=sanitize_text_field($_POST['bannertype']);
	   $bgcolor=sanitize_text_field($_POST['bgcolor']);
	    $bgimage=sanitize_text_field($_POST['bgimage']);
	    $pagetitle=sanitize_text_field($_POST['pagetitle']);
		 $beforediv=sanitize_text_field($_POST['beforediv']);
		 $firstonpage=sanitize_text_field($_POST['firstonpage']);
		  $showonpage=sanitize_text_field($_POST['showonpage']);
		   $abovecss=sanitize_text_field($_POST['abovecss']);
		    $belowcss=sanitize_text_field($_POST['belowcss']);
			$responsive=sanitize_text_field($_POST['responsive']);
	    $divid=sanitize_text_field($_POST['divid']);
		 

	   $mainnewwindow=sanitize_text_field($_POST['mainnewwindow']);
	   $bannerid=sanitize_text_field($_POST['bannerid']);
	   $mainbanner=sanitize_text_field($_POST['mainbanner']);
	   $mainurl=esc_url($_POST['mainurl']);
	   $autoopen=sanitize_text_field($_POST['autoopen']);
	   $autoclose=sanitize_text_field($_POST['autoclose']);
	   $autoopentime=intval(sanitize_text_field($_POST['autoopentime']));
	   $autoclosetime=intval(sanitize_text_field($_POST['autoclosetime']));
	   $onceperday=sanitize_text_field($_POST['onceperday']);
		   $mainwidth=0;
		   $mainheight=0;
		  
	    if($mainbanner!=''){
		   $main=getimagesize($folder.'/'.$mainbanner);
		   $mainwidth=$main[0];
		   $mainheight=$main[1];
		}
		
		
		if($bannerid=='new'){
		
				  $bannerid='bn_'.date('m-d-Y')."_".date('H:i:s');
			      
	$push_pushdownoptions = array(
	'bannerid' => $bannerid,								
	'bannername' => $bannername,
	'bannertype' => $bannertype,
	'imageoption' => $imageoption,
	'htmloption' => 'Option 1',
	'bannerspeed' => '20',
	'bannertime' => '2200',
	'flvclosebutton' => 'No',
	'bgcolor' => $bgcolor,
	'bgimage' => $bgimage,
	'firsthtml' => '',
	'firsthtmlheight' => '0',
	'firsthtmlwidth' => '0',
	'mainbackup' => 'No',
	'firstbackup' => 'No',
	'firstnewwindow' => 'No',
	'mainnewwindow' => $mainnewwindow,
	'mainhtml' => '',
	'htmbannertype' => 'Code',
	'mainhtmfile' => '',
	'mainhtmlheight' => '0',
	'mainhtmlwidth' => '0',
	'mainflashbanner' => '',
	'firstflashbanner' => '',
	'mainbanner' => $mainbanner,
	'mainwidth' => $mainwidth,
	'mainheight' => $mainheight,
	'autoopen' => $autoopen,
	'autoclose' => $autoclose,
	'autoopentime' => $autoopentime,
	'autoclosetime' => $autoclosetime,
	'onceperday' => $onceperday,
	'firstbanner' => '',
	'firstopen' => 'Yes',
	'firsturl' => '',
	'responsive' => $responsive,
	'closebanner' => '',
	'mainurl' => $mainurl,
	'pagetitle'	=> utf8_encode($pagetitle),
	'divid'	=> $divid,
	'beforediv'	=> $beforediv,
	'toggle'	=> 'Yes',
	'firstonpage' => $firstonpage,
	'showonpage'	=> $showonpage,
	'abovecss'	=> $abovecss,
	'belowcss'	=> $belowcss,
	'openingstate' => '0',
	'htoggle' => 'No',
	'ftoggle' => 'No',
	'htmlclose' => 'Yes'
);	
	update_option( 'push_options',  $push_pushdownoptions );
				  $week=date('W');
	$date=date('m-d-Y');
	$month=date('F');
	$year=date('Y');
	$id=$date."_".$bannerid;
				  
				   $res=$wpdb->query($wpdb->prepare("INSERT INTO ".$wpdb->prefix ."daily_stats(idDailyStats,BannerId,BannerType,StatsDate,StatsMonth,StatsYear) VALUES(%s,%s,'PushDown',%s,%s,%s)",$id,$bannerid,$date,$month,$year));
				  
				       echo $bannerid;
					   die();
				 
		}else{
			$push_pushdownoptions = array(
	'bannerid' => $bannerid,								
	'bannername' => $bannername,
	'bannertype' => $bannertype,
	'imageoption' => $imageoption,
	'htmloption' => 'Option 1',
	'bannerspeed' => '20',
	'bannertime' => '2200',
	'flvclosebutton' => 'No',
	'bgcolor' => $bgcolor,
	'bgimage' => $bgimage,
	'firsthtml' => '',
	'firsthtmlheight' => '0',
	'firsthtmlwidth' => '0',
	'mainbackup' => 'No',
	'firstbackup' => 'No',
	'firstnewwindow' => 'No',
	'mainnewwindow' => $mainnewwindow,
	'mainhtml' => '',
	'htmbannertype' => 'Code',
	'mainhtmfile' => '',
	'mainhtmlheight' => '0',
	'mainhtmlwidth' => '0',
	'mainflashbanner' => '',
	'firstflashbanner' => '',
	'mainbanner' => $mainbanner,
	'mainwidth' => $mainwidth,
	'mainheight' => $mainheight,
	'autoopen' => $autoopen,
	'autoclose' => $autoclose,
	'autoopentime' => $autoopentime,
	'autoclosetime' => $autoclosetime,
	'onceperday' => $onceperday,
	'firstbanner' => '',
	'firstopen' => 'Yes',
	'firsturl' => '',
	'responsive' => $responsive,
	'closebanner' => '',
	'mainurl' => $mainurl,
	'pagetitle'	=> utf8_encode($pagetitle),
	'divid'	=> $divid,
	'beforediv'	=> $beforediv,
	'toggle'	=> 'Yes',
	'firstonpage' => $firstonpage,
	'showonpage'	=> $showonpage,
	'abovecss'	=> $abovecss,
	'belowcss'	=> $belowcss,
	'openingstate' => '0',
	'htoggle' => 'No',
	'ftoggle' => 'No',
	'htmlclose' => 'Yes'
);	
	update_option( 'push_options',  $push_pushdownoptions );
		      
				       echo $bannerid;
					   die();
				 
		}
	 
   }
}

$push_pushdownoptions_defaults = array(
	'bannerid' => 'new',								
	'bannername' => 'Enter Banner Name',
	'bannertype' => 'Image',
	'imageoption' => 'Option 4',
	'htmloption' => 'Option 1',
	'bannerspeed' => '20',
	'bannertime' => '2200',
	'flvclosebutton' => 'No',
	'bgcolor' => '#333',
	'bgimage' => '',
	'firsthtml' => '',
	'firsthtmlheight' => '0',
	'firsthtmlwidth' => '0',
	'mainbackup' => 'No',
	'firstbackup' => 'No',
	'firstnewwindow' => 'Yes',
	'mainnewwindow' => 'Yes',
	'mainhtml' => '',
	'htmbannertype' => 'Code',
	'mainhtmfile' => '',
	'mainhtmlheight' => '0',
	'mainhtmlwidth' => '0',
	'mainflashbanner' => '',
	'firstflashbanner' => '',
	'mainbanner' => 'image-example.jpg',
	'mainwidth' => '300',
	'mainheight' => '300',
	'autoopen' => 'No',
	'autoclose' => 'No',
	'autoopentime' => '2',
	'autoclosetime' => '10',
	'onceperday' => 'No',
	'firstbanner' => 'clicktoexpand.jpg',
	'firstopen' => 'Yes',
	'firsturl' => '',
	'responsive' => 'No',
	'closebanner' => 'close.png',
	'mainurl' => 'www.pushdownbanners.com/',
	'pagetitle'	=> 'Home',
	'divid'	=> 'masthead',
	'beforediv'	=> 'No',
	'toggle' => 'Yes',
	'firstonpage' => 'No',
	'showonpage'	=> 'All',
	'abovecss'	=> '',
	'belowcss'	=> '',
	'openingstate' => '0',
	'htoggle' => 'No',
	'ftoggle' => 'No',
	'htmlclose' => 'Yes'
);


function push_menu() {
	//create new top-level menu
	add_menu_page('PushdownBanner Settings', __('Push Down Banners','push-down-banners'), 'administrator', 'push_pushdown_top', 'push_main_options',plugins_url('', __FILE__)."/images/push_16X16.png");
	add_submenu_page('push_pushdown_top' , 'Add New Pushdown banner', __('Add New Pushdown Banner','push-down-banners') , 'administrator' , 'new_pushdown_banner' , 'push_pushdownbanner_settings_page' );
	add_submenu_page('push_pushdown_top' , 'Daily Stats', __('Daily Stats','push-down-banners') , 'administrator' , 'push_daily_stat' , 'push_daily_stat_page' );
	add_submenu_page(NULL , 'Push Down Banner Preview', '' , 'administrator' , 'push_preview_banner' , 'push_preview' );
	
}

function push_preview(){
	?><script type="text/javascript" src="<?php echo plugins_url('pushdownbanners.js', __FILE__); ?>"></script><?php
	

$folder=plugins_url('', __FILE__)."/images";
if(isset($_POST['pid'])){
	$push_pushdownoptions=get_option('push_options');
	
	 $bannertype=$push_pushdownoptions['bannertype'];
		   $bgcolor=$push_pushdownoptions['bgcolor'];
		    $bgimage=$push_pushdownoptions['bgimage'];
		    
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

}else{
		    $imageoption=sanitize_text_field($_POST['imageoption']);
			 $bannertype=sanitize_text_field($_POST['bannertype']);
			 $bgcolor=sanitize_text_field($_POST['bgcolor']);
			  $bgimage=sanitize_text_field($_POST['backname']);
	   $mainnewwindow=sanitize_text_field($_POST['mainnewwindow']);
		   $bannername=sanitize_text_field($_POST['bannername']);
		   $mainbanner=sanitize_text_field($_POST['mainname']);
			$firstonpage=sanitize_text_field($_POST['firstonpage']);
			 $showonpage=sanitize_text_field($_POST['showonpage']);
			 $responsive=sanitize_text_field($_POST['responsive']);
		   $abovecss=sanitize_text_field($_POST['abovecss']);
		    $belowcss=sanitize_text_field($_POST['belowcss']);
		   $mainwidth=0;
		   $mainheight=0;
		 
		    $mainurl=esc_url($_POST['mainurl']);
		   $autoopen=sanitize_text_field($_POST['autoopen']);
		   $autoclose=sanitize_text_field($_POST['autoclose']);
		   $autoopentime=intval(sanitize_text_field($_POST['autoopentime']))*1000;
		   $autoclosetime=intval(sanitize_text_field($_POST['autoclosetime']))*1000;
		   $onceperday=sanitize_text_field($_POST['onceperday']);
		   
			if($mainbanner!=''){
			   $main=getimagesize($folder.'/'.$mainbanner);
			   $mainwidth=$main[0];
			   $mainheight=$main[1];
			}
		  
	   
}
 if($bannertype=='Image'){  
		  
			   $objectheight=$mainheight;
		  
	  
	 }
?>

<script type="text/javascript">
var _gPDBSpeed = 20;
var _gPDBTime = 2200;

</script>

<script type="text/javascript">
<?php if(($bannertype=="HTML" && $htoggle=='Yes') || ($bannertype=="Image" && $toggle=='Yes')){ ?>_Toggle=1;<?php }?>
<?php if($autoopen=='Yes' || $imageoption=='Option 3' || $imageoption=='Option 4' || $autoclose=='Yes' || $imageoption=='Option 2'){?>

	<?php if($autoopen=='Yes' || $imageoption=='Option 3' || $imageoption=='Option 4'){?>
_gPDBAutoopen=<?php echo esc_js($autoopentime); ?>;
<?php }?>
<?php if($autoclose=='Yes' || $imageoption=='Option 2' || $imageoption=='Option 4'){?>
_gPDBAutoclose= <?php echo esc_js($autoclosetime); ?>;
<?php }?>
autostart();
<?php }?>

</script>




<br>
    
    
<div style="<?php echo esc_attr($abovecss); ?>"></div>
  <?php if($bannertype=='Image'){?>
  
 <?php if($imageoption=='Option 4'){?>
<div id="PushdownAd1" class="PushdownAd" style="width:auto; height:0px; <?php if($bgimage!=''){ ?>background-Image:url(<?php echo esc_url($folder.'/'.$bgimage); ?>); background-repeat:repeat;<?php }?> <?php if($bgcolor!=''){ ?>background-color:<?php echo esc_attr($bgcolor).";"; }?> overflow:hidden;">
  
   <object width="<?php echo esc_attr($mainwidth); ?>" height="<?php echo esc_attr($objectheight); ?>">  
  <center>
  		 <div id="outer">	
	 <a href="<?php echo esc_url($mainurl); ?>" <?php if($mainnewwindow=='Yes'){?>target="_blank"<?php }?>><img <?php if($responsive=='Yes'){ ?>id="mainimg"<?php }?> src="<?php echo esc_url($folder."/".$mainbanner); ?>" border="0"></a>
 		  </div>	
   
  </center>
  </object>
</div>
<?php }?>
<?php }?>
  
<div style="<?php echo esc_attr($belowcss); ?>"></div>
    <br /><br /><br /><br /><br />
<?php
}
function push_daily_stat_page(){
	global $wpdb;
	$table_name=$wpdb->prefix . "daily_stats";

	$week=date('W');
	$date=date('m-d-Y');
	$month=date('F');
	 $year=date('Y');
	$folder=plugins_url('', __FILE__)."/images";?>
	 <div class="wrap">
   <h2><?php esc_html_e('Melodic Media Push Down Banner','push-down-banners');?></h2>
    <br />
	<h3><?php esc_html_e('My Push Down Banners Daily Stats','push-down-banners');?></h3>
    <br />
    <?php
	 $push_pushdownoptions=get_option('push_options'); 
$mybanner = $wpdb->get_row( $wpdb->prepare("SELECT * FROM ".$table_name." WHERE StatsDate=%s AND StatsMonth=%s AND StatsYear=%s AND BannerType='PushDown' AND BannerId=%s",$date,$month,$year,$push_pushdownoptions['bannerid']));
if($mybanner){
	?>
   <table class="form-table"><tr><th><?php esc_html_e('Push Down Banner','push-down-banners');?></th><th><?php esc_html_e('Banner Name','push-down-banners');?></th><th><?php esc_html_e('Imp. today','push-down-banners');?></th><th><?php esc_html_e('Opens today','push-down-banners');?></th><th><?php esc_html_e('Clicks today','push-down-banners');?></th><th>CTR</th></tr>
		 <tr><td><img src="<?php if($push_pushdownoptions['bannertype']=='Image'){ echo esc_url($folder."/".$push_pushdownoptions['mainbanner']);}else if($push_pushdownoptions['bannertype']=='HTML'){ echo esc_url($folder."/"."html.png");}else if($push_pushdownoptions['bannertype']=='Flash'){ echo esc_url($folder."/"."flash.png");}?>" width="40" height="40" /></td><td><?php echo esc_html($push_pushdownoptions['bannername']); ?></td><td><?php echo esc_html($mybanner->DImpressions); ?></td><td><?php echo esc_html($mybanner->DOpens); ?></td><td><?php echo esc_html($mybanner->DClicks); ?></td><td><?php if($mybanner->DImpressions!=0){echo esc_html(round(($mybanner->DClicks/$mybanner->DImpressions)*100,2)); echo " %";}else{ echo "0 %";} ?></td></tr>
    </table>
    <?php
}else{
      _e('You have currently no push down banners.','push-down-banners');
}
?>
<br />
<br />
<a href="http://www.expandablebanners.com/buy.php"  style="text-decoration:none;" target="_blank"><div style=" width:600px; height:250px; background:url(<?php echo esc_url($folder."/wp_push_buy_em.png");?>) no-repeat"><font color="#000000"><br /><br /><br /><br /><table width="510"><tr><td><strong>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('Free version includes','push-down-banners');?></strong></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('1. Save and view daily stats for 1 banner.','push-down-banners');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('2. Only Image banner and only auto close and auto open.','push-down-banners');?></td></tr>
</table>
<br /><table width="510"><tr><td><strong>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('Full version includes','push-down-banners');?></strong></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('1. Save and view daily, weekly and monthly stats for unlimited banners.','push-down-banners');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('2. Make Image, flash and HTML unlimited banners.','push-down-banners');?></td></tr>
</table></font></div></a>
 </div>
    
<?php  

}

function push_main_options()
{
	global $wpdb;
	
	$folder=plugins_url('', __FILE__)."/images";
	if(isset($_POST['did'])){
		$push_pushdownoptions=get_option('push_options');

		$folder2=plugin_dir_path(__FILE__)."images";
		
		
		if(is_file($folder2.'/'.$push_pushdownoptions['firstbanner']) && strpos($push_pushdownoptions['firstbanner'],'ile_')!=false){
		unlink($folder2.'/'.$push_pushdownoptions['firstbanner']);
		}
		if(is_file($folder2.'/'.$push_pushdownoptions['mainbanner'])  && strpos($push_pushdownoptions['mainbanner'],'ile_')!=false){
		unlink($folder2.'/'.$push_pushdownoptions['mainbanner']);
		}
		if(is_file($folder2.'/'.$push_pushdownoptions['closebanner']) && strpos($push_pushdownoptions['closebanner'],'ile_')!=false){
		unlink($folder2.'/'.$push_pushdownoptions['closebanner']);
		}
		if(is_file($folder2.'/'.$push_pushdownoptions['mainflashbanner'])){
		unlink($folder2.'/'.$push_pushdownoptions['mainflashbanner']);
		}
		if(is_file($folder2.'/'.$push_pushdownoptions['firstflashbanner'])){
		unlink($folder2.'/'.$push_pushdownoptions['firstflashbanner']);
		}
		if(is_file($folder2.'/'.$push_pushdownoptions['bgimage'])  && strpos($push_pushdownoptions['bgimage'],'ile_')!=false){
		unlink($folder2.'/'.$push_pushdownoptions['bgimage']);
		}
		
		   $dres=$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix ."daily_stats WHERE BannerType='PushDown' AND BannerId=%s",$_POST['did']));
	        delete_option('push_options');
	}
	?>
    <div class="wrap">
     <h2><?php esc_html_e('Melodic Media Push Down Banner','push-down-banners');?></h2>
    <br />
	<h3><?php esc_html_e('My Push Down Banners','push-down-banners');?></h3>
    <br />
    <?php
	
$push_pushdownoptions=get_option('push_options');
if($push_pushdownoptions){
	?>
    <table class="form-table"><tr><th><?php esc_html_e('Push Down Banner','push-down-banners');?></th><th width="30%"><?php esc_html_e('Banner Name','push-down-banners');?></th><th><?php esc_html_e('Actions','push-down-banners');?></th></tr>
    <?php
	
	$count=1;
	
		?>
		 <tr><td><img src="<?php if($push_pushdownoptions['bannertype']=='Image'){ echo esc_url($folder."/".$push_pushdownoptions['mainbanner']);}else if($push_pushdownoptions['bannertype']=='HTML'){ echo esc_url($folder."/"."html.png");}else if($push_pushdownoptions['bannertype']=='Flash'){ echo esc_url($folder."/"."flash.png");}?>" width="40" height="40" /></td><td><?php echo esc_html($push_pushdownoptions['bannername']); ?></td><td><table class="form-table"><tr><td><form id="pform_<?php echo esc_attr($count); ?>" action="admin.php?page=push_preview_banner" method="post" target="_blank"><input type="hidden" name="pid" id="pid_<?php echo esc_attr($count); ?>" value="<?php echo esc_attr($push_pushdownoptions['bannerid']); ?>" /><input  type="submit" style="background:url(<?php echo esc_url($folder."/"); ?>button.png) no-repeat; border:none; width:100px; height:23px; color:#FFF; font-weight:bolder; vertical-align:top; padding-top:2px; cursor:pointer;" alt="Submit Form" value="<?php esc_attr_e('PREVIEW','push-down-banners');?>"/</form></td><td><a href="admin.php?page=new_pushdown_banner&act=edit&id=<?php echo esc_attr($push_pushdownoptions['bannerid']); ?>" style="text-decoration:none; color:#FFF" ><div style="width:100px; height:23px; background:url(<?php echo esc_url($folder."/"); ?>button.png) no-repeat; border:none color:#FFF; font-weight:bolder; vertical-align:top; padding-top:2px; text-align:center"><?php esc_html_e('EDIT','push-down-banners');?></div></a></td><td><form id="dform_<?php echo esc_attr($count); ?>" action="admin.php?page=push_pushdown_top" method="post"><input type="hidden" name="did" id="did_<?php echo esc_attr($count); ?>" value="<?php echo esc_attr($push_pushdownoptions['bannerid']); ?>" /><input  type="image" alt="Submit Form"  src="<?php echo esc_url($folder."/"); ?>delete.png" /></form></td></tr></table></td></tr>
    </table>
    <?php
}else{
      _e('You have currently no push down banners.','push-down-banners');
}
?>
 <br />
<br />
<a href="http://www.expandablebanners.com/buy.php"  style="text-decoration:none;" target="_blank"><div style=" width:600px; height:250px; background:url(<?php echo esc_url($folder."/wp_push_buy_em.png");?>) no-repeat"><font color="#000000"><br /><br /><br /><br /><table width="510"><tr><td><strong>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('Free version includes','push-down-banners');?></strong></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('1. Save and view daily stats for 1 banner.','push-down-banners');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('2. Only Image banner and only auto close and auto open.','push-down-banners');?></td></tr>
</table>
<br /><table width="510"><tr><td><strong>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('Full version includes','push-down-banners');?></strong></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('1. Save and view daily, weekly and monthly stats for unlimited banners.','push-down-banners');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('2. Make Image, flash and HTML unlimited banners.','push-down-banners');?></td></tr>
</table></font></div></a>
  </div>  
<?php  
}



function push_pushdownoptions_init(){
	
wp_register_script( 'push-func', plugins_url('func.js', __FILE__));
	$push_translation_array = array(
	'str1' => __('Uploading','push-down-banners'),
'str2' => __('Only jpeg, png and gif images could be uploaded','push-down-banners'),
'str3' => __('Size exceeds 50kb limit','push-down-banners'),
'str4' => __('Uploaded','push-down-banners'),
'str5' => __('Size exceeds 250kb limit','push-down-banners'),
'str6' => __('Only swf file could be uploaded','push-down-banners'),
'str7' => __('Please make sure main banner image is uploaded','push-down-banners'),
'str11' => __('Banner with this name already exists.Please Change the name','push-down-banners'),
'str12' => __('Fill this field','push-down-banners'),
'str13' => __('Please enter valid email address','push-down-banners'),
'str14' => __('Enter only number','push-down-banners'),
'str15' => __('Previous Image deleted. Make sure to save banner','push-down-banners'),
'str16' => __('Previous flash deleted. Make sure to save banner','push-down-banners'),
'str17' => __('Correct Errors','push-down-banners')
);
wp_localize_script( 'push-func', 'push_obj', $push_translation_array );
wp_enqueue_script('push-func');
wp_enqueue_script('pushflashscript',  plugins_url('swfobject/swfobject.js', __FILE__));
	global $push_pushdownoptions_defaults;
	global $wpdb;
	
	if(isset($_GET['act']) && $_GET['act']=="edit"){
		$push_pushdownoptions=get_option('push_options');
		$push_pushdownoptions_defaults=$push_pushdownoptions;
	   
	}
	
	
     if(isset($_GET['act']) && $_GET['act']=="edit"){
	add_settings_section('push_pushdownmain', __('Edit Push Down Banner','push-down-banners'), NULL, 'new_pushdown_banner');
	 }else{
		add_settings_section('push_pushdownmain', __('New Push Down Banner','push-down-banners'), NULL, 'new_pushdown_banner'); 
     }
	
    add_settings_field('bannername',__('Banner Name','push-down-banners'), 'push_text', 'new_pushdown_banner','push_pushdownmain',array('id' => 'bannername'));
	add_settings_section('push_htmlbanner', '', 'push_optionsdiv', 'new_pushdown_banner');
	

	add_settings_section('push_autodivf', '', 'push_autodiv', 'new_pushdown_banner');
	add_settings_section('push_pagedivf', '', 'push_pagediv', 'new_pushdown_banner');
	add_settings_section('push_push2', '', NULL, 'new_pushdown_banner');
	

	
	 add_settings_field('onceperday', __('Show the banner only once per day?','push-down-banners'), 'push_radio', 'new_pushdown_banner', 'push_push2',
		array('id' => 'onceperday', 'values' => array('Yes' => __('Yes','push-down-banners'),'No' => __('No','push-down-banners')) ));

	

}



function push_dropdown($args) {
	global $push_pushdownoptions_defaults;
	$options = $push_pushdownoptions_defaults;
	$id = $args['id'];
	echo "<select name='$id' id='$id'>";
	foreach($args['values'] as $key => $val) {
?>
		<option value="<?php echo esc_attr($key);?>" <?php echo $options[$args['id']] == $key ? 'selected':'' ?> > <?php echo esc_html($val);?> </option>
<?php
	}
	echo "</select>";
}

function push_optionsdiv(){
	$folder=plugins_url('', __FILE__)."/images";
	global $push_pushdownoptions_defaults;
	$options = $push_pushdownoptions_defaults;
    ?>
   <table class="form-table"><tr><th><?php esc_html_e('Type of banner','push-down-banners');?>:</th><td><input type="radio" name="bannertype" id="bannertype1" value="Image" checked onClick="document.getElementById('imgbanner').style.display='block';document.getElementById('resdiv').style.display='block';"> 
   <?php esc_html_e('Image Banner','push-down-banners');?> &nbsp;&nbsp;&nbsp;&nbsp; <?php esc_html_e('(For making flash and html banners buy the full version)','push-down-banners');?></td></tr></table><br>
   


 
   
    
  <div id="imgbanner" style="display:block">
  <table class="form-table"><tr>
 <th><?php esc_html_e('There are 4 different kinds of image Push Down Banners,(For more options buy the full version)','push-down-banners');?>.</th></tr></table>
 

  <input type="radio" name="opt" id="opt4" value="Option 4" onClick="changeOption('Option 4');">
 <input type="hidden" name="imageoption" id="imageoption" value="<?php echo esc_attr($options['imageoption']); ?>">
<input type="hidden" name="bannerid" id="bannerid" value="<?php echo esc_attr($options['bannerid']); ?>">
 <input type="hidden" name="plug_url" id="plug_url" value="<?php echo esc_attr(plugins_url('', __FILE__));?>">
 <input type="hidden" name="adm_url" id="adm_url" value="<?php echo esc_attr(admin_url());?>">
  <input type="hidden" name="mainname" id="mainname" value="<?php echo esc_attr($options['mainbanner']); ?>">
<input type="hidden" name="backname" id="backname" value="<?php echo esc_attr($options['bgimage']); ?>">
 
                         
  <strong><?php esc_html_e('Option','push-down-banners');?>:</strong> <?php esc_html_e('1 Image (Main Banner ) + Auto-Open &amp; Close','push-down-banners');?>

 

<div id="main" style="display:block">
<table class="form-table"><tr>
 <th><?php esc_html_e('Main Banner','push-down-banners');?>:</th></tr></table>
 <?php if(isset($_GET['act']) && $options['mainbanner']!=''){ ?>
  <img id="mainimg" src="<?php echo esc_url($folder.'/'.$options['mainbanner']); ?>">

  <table class="form-table"><tr><th><?php esc_html_e('Change Image (jpg, gif, png, max file size 250kb)','push-down-banners');?></th><td><input type="file" name="mainimage" id="mainimage" onChange="changeimg('<?php echo esc_url($folder); ?>','mainimage')"></td><td><div id="mainimage_notice"></div></td></tr>
  <?php }else{?>
  <table class="form-table"><tr><th><?php esc_html_e('Upload your Image (jpg, gif, png, max file size 250kb)','push-down-banners');?></th><td><input type="file" name="mainimage" id="mainimage" onChange="imgUpload('mainimage')"></td><td><div id="mainimage_notice"></div></td></tr><?php }?>
  <tr><th><?php esc_html_e('Please set the URL you want it to link to http://','push-down-banners');?></th><td><input type="text" name="mainurl" id="mainurl" value="<?php echo esc_attr($options['mainurl']); ?>"></td><td><div id="mainurl_notice"></div></td></tr>
<tr><th><?php esc_html_e('Open link in new window?','push-down-banners');?></th><td><input name="mainnewwindow" id="mainnewwindow1" value="Yes" checked="checked" type="radio" /> 
<?php esc_html_e('Yes','push-down-banners');?>&nbsp;&nbsp;&nbsp;&nbsp;
    <input name="mainnewwindow" id="mainnewwindow2" value="No" type="radio" /> 
    <?php esc_html_e('No','push-down-banners');?></td></tr></table>
  </div>

</div>
<div id="resdiv">
<table class="form-table"><tr><th><?php esc_html_e('Make the banner Responsive?','push-down-banners');?></th><td><input type="radio" name="responsive" id="responsive1" value="Yes"> <?php esc_html_e('Yes','push-down-banners');?>
  &nbsp;&nbsp;&nbsp;<input type="radio" name="responsive" id="responsive2" value="No" checked="checked"> <?php esc_html_e('No','push-down-banners');?></td></tr></table>
</div>
<table class="form-table"><tr>
 <th><?php esc_html_e('Set a background Image','push-down-banners');?>:</th></tr></table>
 <?php if(isset($_GET['act']) && $options['bgimage']!=''){?>
  <img id="backimg" src="<?php echo esc_url($folder.'/'.$options['bgimage']); ?>">
  <table class="form-table"><tr><th><?php esc_html_e('Change Image (jpg, gif, png, max file size 50kb)','push-down-banners');?> </th><td><input type="file" name="backimage" id="backimage" onChange="changeimg('<?php echo esc_url($folder); ?>','backimage')"></td><td><div id="backimage_notice"></div></td></tr></table>
  
  
    
   <?php }else{?>
  <table class="form-table"><tr><th><?php esc_html_e('Upload your Image (jpg, gif, png, max file size 50kb)','push-down-banners');?></th><td><input type="file" name="backimage" id="backimage" onChange="imgUpload('backimage')"></td><td><div id="backimage_notice"></div></td></tr></table>
  <?php }?>
  <table class="form-table"><tr>
 <th><?php esc_html_e('Set a background Color','push-down-banners');?>: </th></tr></table>
<table class="form-table"><tr><th><?php esc_html_e('Background Color','push-down-banners');?>: </th><td><input type="text" name="bgcolor" id="bgcolor" class="regtextbox" value="<?php echo esc_attr($options['bgcolor']); ?>"></td><td><div id="bgcolor_notice"></div></td></tr></table>
 <table class="form-table"><tr>
 <th><?php esc_html_e('Speed/Time which the banner will open or close. (For setting your own speed and time buy the full version)','push-down-banners');?></th></tr></table>
<table class="form-table"><tr><th><?php esc_html_e('Speed','push-down-banners');?>: </th><td>20</td><td><div id="speed_notice"></div></td></tr>
   <tr><th><?php esc_html_e('Time','push-down-banners');?>:   </th><td>2200</td><td><div id="time_notice"></div></td></tr></table>
 
    <?php
}




function push_autodiv(){
	global $push_pushdownoptions_defaults;
	$options = $push_pushdownoptions_defaults;
	?>
   <table class="form-table"><tr><th><?php esc_html_e('Will your banner auto-open?','push-down-banners');?></th><td><input type="radio" name="autoopen" id="autoopen1" value="Yes" onClick="document.getElementById('autoopendiv').style.display='block';" > <?php esc_html_e('Yes','push-down-banners');?>
  &nbsp;&nbsp;&nbsp;<input type="radio" name="autoopen" id="autoopen2" value="No" checked="checked" onClick="document.getElementById('autoopendiv').style.display='none';" > <?php esc_html_e('No','push-down-banners');?></td></tr></table>
  <div id="autoopendiv" style="display:none">
 <table class="form-table"><tr><th> <?php esc_html_e('Auto-open the banner after','push-down-banners');?></th><td> <input type="text" name="autoopentime" id="autoopentime" class="regtextbox2" value="<?php echo esc_attr($options['autoopentime']); ?>" size="7"> <?php esc_html_e('seconds  - Set 0 for right away','push-down-banners');?>.</td><td><div id="autoopentime_notice"></div></td></tr></table></div>
   <br>
 
   <table class="form-table"><tr><th><?php esc_html_e('Will your banner auto-close?','push-down-banners');?></th><td>
  <input type="radio" name="autoclose" id="autoclose1" value="Yes" onClick="document.getElementById('autoclosediv').style.display='block';" > <?php esc_html_e('Yes','push-down-banners');?>&nbsp;&nbsp;&nbsp;<input type="radio" name="autoclose" id="autoclose2" value="No" checked="checked" onClick="document.getElementById('autoclosediv').style.display='none';" > <?php esc_html_e('No','push-down-banners');?></td></tr></table>
  
 <br>
     
     
  <div id="autoclosediv" style="display:none">
  <table class="form-table"><tr><th><?php esc_html_e('Auto-close the banner after','push-down-banners');?> </th><td><input type="text" name="autoclosetime" id="autoclosetime" class="regtextbox2" value="<?php echo esc_attr($options['autoclosetime']); ?>" size="7"> <?php esc_html_e('seconds  - Default is set to 10','push-down-banners');?></td><td><div id="autoclosetime_notice"></div></td></tr></table></div>

    <?php
}

function push_pagediv(){
	global $push_pushdownoptions_defaults;
	$options = $push_pushdownoptions_defaults;
?>
 <table class="form-table"><tr><th><?php esc_html_e('Show the banner on?','push-down-banners');?></th><td><input type="radio" name="showonpage" id="showonpage3" value="All" checked="checked" onClick="document.getElementById('pagediv').style.display='none';" > <?php esc_html_e('All Pages','push-down-banners');?>&nbsp;&nbsp;&nbsp;<input type="radio" name="showonpage" id="showonpage2" value="Home" onClick="document.getElementById('pagediv').style.display='none';" > <?php esc_html_e('HomePage Only','push-down-banners');?>&nbsp;&nbsp;&nbsp;<input type="radio" name="showonpage" id="showonpage1" value="Specific" onClick="document.getElementById('pagediv').style.display='block';" > <?php esc_html_e('Specific Pages Only','push-down-banners');?>
  </td></tr></table>
  <div id="pagediv" style="display:none">
 <table class="form-table"><tr><th> <?php esc_html_e('Page Titles','push-down-banners');?></th><td> <input type="text" name="pagetitle" id="pagetitle" value="<?php echo esc_attr($options['pagetitle']); ?>"> <?php esc_html_e("Titles of the page separated by commas on which to show the banner(Case Sensitive).Type 'Home' as title to show on homepage",'push-down-banners');?></td><td><div id="pagetitle_notice"></div></td></tr>
 </table></div>
 <table class="form-table"><tr><td colspan="2">*<?php esc_html_e('Note Only one Push down Banner can be shown on a single page','push-down-banners');?>.</td></tr></table>
  <table class="form-table"><tr><th><?php esc_html_e('Placement: First Item on Page','push-down-banners');?></th><td><input type="radio" name="firstonpage" id="firstonpage1" value="Yes" onclick="document.getElementById('placediv').style.display='none'"> <?php esc_html_e('Yes','push-down-banners');?>&nbsp;&nbsp;&nbsp;<input type="radio" name="firstonpage" id="firstonpage2" value="No" onclick="document.getElementById('placediv').style.display='block'"> <?php esc_html_e('No','push-down-banners');?>
  </td></tr></table>
  <div id="placediv" style="display:block">
 <table class="form-table"><tr><th><?php esc_html_e('Placement: Div ID','push-down-banners');?></th><td> <input type="text" name="divid" id="divid" value="<?php echo esc_attr($options['divid']); ?>"> <?php esc_html_e('Id of div or any other html element  in which pushdown banner should appear','push-down-banners');?> .</td><td><div id="divid_notice"></div></td></tr><tr><td colspan="2">*<?php esc_html_e('Note If placing into a Post, manually add a new DIV layer in your post like this','push-down-banners');?> &lt;div id="pushdownpost"&gt;&lt;/div&gt; <?php esc_html_e('Then add "pushdownpost" in the box above','push-down-banners');?>.</td></tr><tr><th><?php esc_html_e('Placement of Push down Banner?','push-down-banners');?></th><td><input type="radio" name="beforediv" id="beforediv1" value="Yes" checked="checked"> <?php esc_html_e('Start of Div','push-down-banners');?>&nbsp;&nbsp;&nbsp;<input type="radio" name="beforediv" id="beforediv2" value="No"> <?php esc_html_e('End of Div','push-down-banners');?>
  </td></tr></table></div>
   <table class="form-table"><tr><th scope="row"><?php esc_html_e('Add CSS above your Push Down Banner','push-down-banners');?></th><td>	<input type="text" value="<?php echo esc_attr($options['abovecss']); ?>" style="width:50%;" name="abovecss" id="abovecss">  
</td></tr>
<tr><th scope="row"><?php esc_html_e('Add CSS below your Push Down Banner','push-down-banners');?></th><td>	<input type="text" value="<?php echo esc_attr($options['belowcss']); ?>" style="width:50%;" name="belowcss" id="belowcss">  
</td></tr></table>
<?php
}
function push_radio($args) {
	global $push_pushdownoptions_defaults;
	$options = $push_pushdownoptions_defaults;
	$id = $args['id'];
    $count=1;
	foreach($args['values'] as $key => $val) {
?>
	<input type="radio" name="<?php echo esc_attr($id);?>" id="<?php echo esc_attr($id.$count);?>" value="<?php echo esc_attr($key);?>" <?php if(@$options[$args['id']] == $key){ echo 'checked'; } ?>/> <?php echo esc_html($val);?>
<?php
  $count++;
	}
}



function push_text($args) {
	global $push_pushdownoptions_defaults;
	$options = $push_pushdownoptions_defaults;
	$id = $args['id'];
?>
	<input name="<?php echo esc_attr($id);?>" type="text" id="<?php echo esc_attr($id);?>" value="<?php echo esc_attr(@$options[ $args['id'] ]);?>" /> <div id="<?php echo esc_attr($id);?>_notice"></div>
  
<?php
}
function push_longtext($args) {
	global $push_pushdownoptions_defaults;
	$options = $push_pushdownoptions_defaults;
	$id = $args['id'];
?>
	<input name="<?php echo esc_attr($id);?>" id="<?php echo esc_attr($id);?>" style="width:50%;" type="text" value="<?php echo esc_attr(@$options[ $args['id'] ]);?>" /> <?php echo esc_html(" {$args['text']}\n"); ?><div id="<?php echo esc_attr($id);?>_notice"></div>
<?php
}


function push_checkbox($args) {
	global $push_pushdownoptions_defaults;
	$options = $push_pushdownoptions_defaults;
	$id = $args['id'];
?>
	<input name="<?php echo esc_attr($id);?>" type="checkbox" value="<?php echo esc_attr($args['value']);?>" <?php echo isset($options[$args['id']]) ? 'checked' : '';?> /> <?php echo esc_html(" {$args['text']}"); ?> <br/>
<?php
}




function push_pushdownbanner_settings_page() {
		wp_enqueue_media();
		global $push_pushdownoptions_defaults;
	$options = $push_pushdownoptions_defaults;
	$folder=plugins_url('', __FILE__)."/images";

		
		
		if ( isset($_GET['settings-updated']) && $_GET['settings-updated'] == true )
			$message = 'Settings updated.';

		$title = __('Melodic Media Push Down Banner', 'push-down-banners');
		?>
		<div class="wrap">   
			<?php screen_icon(); ?>
			<h2><?php echo esc_html( $title ); ?></h2>
		
			<?php
				if ( !empty($message) ) : 
				?>
				<div id="message" class="updated fade"><p><?php echo esc_html($message); ?></p></div>
				<?php 
				endif; 
			?>
          

		
			<form id="createbanner" action="admin.php?page=push_preview_banner"  target="_blank" method="post">
             <div id="error_notice"></div><br>
				<?php 
					settings_fields('push_pushdownoptions_group'); 
					do_settings_sections('new_pushdown_banner'); 
				?>
		
				<p>
				<input type="submit" class="button button-primary" name="previewbanner" value="<?php esc_attr_e('Preview Banner','push-down-banners');?>" onclick="return frmaction('preview')" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="button button-primary" name="savebanner" value="<?php esc_attr_e('Save Banner','push-down-banners');?>" onclick="return frmaction('save')" />
				
				</p>
			</form>
		 
         <script type="text/javascript" language="javascript">
		
		fillEditBanner('<?php echo esc_js($options['imageoption']); ?>','<?php echo esc_js($options['onceperday']); ?>','<?php echo esc_js($options['autoopen']); ?>','<?php echo esc_js($options['autoclose']); ?>','<?php echo esc_js($options['bannertype']); ?>','<?php echo esc_js($options['mainnewwindow']); ?>','<?php echo esc_js($options['beforediv']); ?>','<?php echo esc_js($options['firstonpage']); ?>','<?php echo esc_js($options['showonpage']); ?>','<?php echo esc_js($options['responsive']); ?>');
        
         </script>
		</div>
	<?php }

?>
