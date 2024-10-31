function changeimg(folder,image){
     imgUpload(image,folder);
	 //setTimeout("chngpic('"+folder+"','"+image+"')",15000);
}

function imgUpload(image,folder){
	
	if(image=='firstimage'){
	      
			var fileInput = document.getElementById('firstimage');
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append('action', 'push_uplimage');
			formData.append('ftype', 'firstimage');
			formData.append('previmg', document.getElementById('firstname').value);
			formData.append('file', file);
				 document.getElementById('firstimage_notice').innerHTML="<font color='#009900'>"+push_obj.str1+"...</font>";
			 jQuery.ajax({  
			url: document.getElementById('adm_url').value+"admin-ajax.php",  
			type: "POST",  
			data: formData,  
			processData: false,  
			contentType: false,  
			success: function (res) { 
			  if(res=="Imageerror"){
				  document.getElementById('firstimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str2+".</font>";
				  document.getElementById('firstname').value="";
			  }else if(res=="sizeerror"){
				  document.getElementById('firstimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str3+" .</font>";
				   document.getElementById('firstname').value="";
			  }else{
				   document.getElementById('firstimage_notice').innerHTML="<font color='#009900'>"+push_obj.str4+"</font>";
				   document.getElementById('firstname').value=res;
				   if(document.getElementById('firstimg')!=null){
					   chngpic(folder,image);
				   }
				  
			  }
			}  
		}); 
			
	}else if(image=='mainimage'){
	      
			var fileInput = document.getElementById('mainimage');
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append('action', 'push_uplimage');
			formData.append('ftype', 'mainimage');
			formData.append('previmg', document.getElementById('mainname').value);
			formData.append('file', file);
				 document.getElementById('mainimage_notice').innerHTML="<font color='#009900'>"+push_obj.str1+"...</font>";
			 jQuery.ajax({  
			url: document.getElementById('adm_url').value+"admin-ajax.php",  
			type: "POST",  
			data: formData,  
			processData: false,  
			contentType: false,  
			success: function (res) { 
			  if(res=="imageerror"){
				  document.getElementById('mainimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str2+".</font>";
				  document.getElementById('mainname').value="";
			  }else if(res=="sizeerror"){
				  document.getElementById('mainimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str5+" .</font>";
				   document.getElementById('mainname').value="";
			  }else{
				   document.getElementById('mainimage_notice').innerHTML="<font color='#009900'>"+push_obj.str4+"</font>";
				   document.getElementById('mainname').value=res;
				   if(document.getElementById('mainimg')!=null){
					   chngpic(folder,image);
				   }
			  }
			}  
		}); 
			
	}else if(image=='closeimage'){
	      
			var fileInput = document.getElementById('closeimage');
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append('action', 'push_uplimage');
			formData.append('ftype', 'closeimage');
			formData.append('previmg', document.getElementById('closename').value);
			formData.append('file', file);
				 document.getElementById('closeimage_notice').innerHTML="<font color='#009900'>"+push_obj.str1+"...</font>";
			 jQuery.ajax({  
			url: document.getElementById('adm_url').value+"admin-ajax.php",  
			type: "POST",  
			data: formData,  
			processData: false,  
			contentType: false,  
			success: function (res) { 
			  if(res=="imageerror"){
				  document.getElementById('closeimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str2+".</font>";
				  document.getElementById('closename').value="";
			  }else if(res=="sizeerror"){
				  document.getElementById('closeimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str3+" .</font>";
				   document.getElementById('closename').value="";
			  }else{
				   document.getElementById('closeimage_notice').innerHTML="<font color='#009900'>"+push_obj.str4+"</font>";
				   document.getElementById('closename').value=res;
				   if(document.getElementById('closeimg')!=null){
					   chngpic(folder,image);
				   }
			  }
			}  
		}); 
			
	}else if(image=='firstflashfile'){
	   
			var fileInput = document.getElementById('firstflashfile');
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append('action', 'push_uplimage');
			formData.append('ftype', 'firstflashfile');
			formData.append('previmg', document.getElementById('firstflashname').value);
			formData.append('file', file);
				 document.getElementById('firstflashfile_notice').innerHTML="<font color='#009900'>"+push_obj.str1+"...</font>";
			 jQuery.ajax({  
			url: document.getElementById('adm_url').value+"admin-ajax.php",  
			type: "POST",  
			data: formData,  
			processData: false,  
			contentType: false,  
			success: function (res) { 
			  if(res=="Imageerror"){
				  document.getElementById('firstflashfile_notice').innerHTML="<font color='#FF0000'>"+push_obj.str6+".</font>";
				  document.getElementById('firstflashname').value="";
			  }else if(res=="sizeerror"){
				  document.getElementById('firstflashfile_notice').innerHTML="<font color='#FF0000'>"+push_obj.str3+" .</font>";
				   document.getElementById('firstflashname').value="";
			  }else{
				   document.getElementById('firstflashfile_notice').innerHTML="<font color='#009900'>"+push_obj.str4+"</font>";
				   document.getElementById('firstflashname').value=res;
				   if(document.getElementById('firstflash')!=null){
					   chngpic(folder,image);
				   }
			  }
			}  
		}); 
			
	}else if(image=='mainflashfile'){
	      
			var fileInput = document.getElementById('mainflashfile');
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append('action', 'push_uplimage');
			formData.append('ftype', 'mainflashfile');
			formData.append('previmg', document.getElementById('mainflashname').value);
			formData.append('file', file);
				 document.getElementById('mainflashfile_notice').innerHTML="<font color='#009900'>"+push_obj.str1+"...</font>";
			 jQuery.ajax({  
			url: document.getElementById('adm_url').value+"admin-ajax.php",  
			type: "POST",  
			data: formData,  
			processData: false,  
			contentType: false,  
			success: function (res) { 
			  if(res=="Imageerror"){
				  document.getElementById('mainflashfile_notice').innerHTML="<font color='#FF0000'>"+push_obj.str6+".</font>";
				  document.getElementById('mainflashname').value="";
			  }else if(res=="sizeerror"){
				  document.getElementById('mainflashfile_notice').innerHTML="<font color='#FF0000'>"+push_obj.str5+" .</font>";
				   document.getElementById('mainflashname').value="";
			  }else{
				   document.getElementById('mainflashfile_notice').innerHTML="<font color='#009900'>"+push_obj.str4+"</font>";
				   document.getElementById('mainflashname').value=res;
				   if(document.getElementById('mainflash')!=null){
					   chngpic(folder,image);
				   }
			  }
			}  
		}); 
			
	}else if(image=='firstbackupimage'){
	      
			var fileInput = document.getElementById('firstbackupimage');
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append('action', 'push_uplimage');
			formData.append('ftype', 'firstbackupimage');
			formData.append('previmg', document.getElementById('firstname').value);
			formData.append('file', file);
				 document.getElementById('firstbackupimage_notice').innerHTML="<font color='#009900'>"+push_obj.str1+"...</font>";
			 jQuery.ajax({  
			url: document.getElementById('adm_url').value+"admin-ajax.php", 
			type: "POST",  
			data: formData,  
			processData: false,  
			contentType: false,  
			success: function (res) { 
			  if(res=="imageerror"){
				  document.getElementById('firstbackupimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str2+".</font>";
				  document.getElementById('firstname').value="";
			  }else if(res=="sizeerror"){
				  document.getElementById('firstbackupimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str3+" .</font>";
				   document.getElementById('firstname').value="";
			  }else{
				   document.getElementById('firstbackupimage_notice').innerHTML="<font color='#009900'>"+push_obj.str4+"</font>";
				   document.getElementById('firstname').value=res;
				   if(document.getElementById('firstbackupimg')!=null){
					   chngpic(folder,image);
				   }
			  }
			}  
		}); 
			
	}else if(image=='mainbackupimage'){
	      
			var fileInput = document.getElementById('mainbackupimage');
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append('action', 'push_uplimage');
			formData.append('ftype', 'mainbackupimage');
			formData.append('previmg', document.getElementById('mainname').value);
			formData.append('file', file);
				 document.getElementById('mainbackupimage_notice').innerHTML="<font color='#009900'>"+push_obj.str1+"...</font>";
			 jQuery.ajax({  
			url: document.getElementById('adm_url').value+"admin-ajax.php",  
			type: "POST",  
			data: formData,  
			processData: false,  
			contentType: false,  
			success: function (res) { 
			  if(res=="imageerror"){
				  document.getElementById('mainbackupimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str2+".</font>";
				  document.getElementById('mainname').value="";
			  }else if(res=="sizeerror"){
				  document.getElementById('mainbackupimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str5+" .</font>";
				   document.getElementById('mainname').value="";
			  }else{
				   document.getElementById('mainbackupimage_notice').innerHTML="<font color='#009900'>"+push_obj.str4+"</font>";
				   document.getElementById('mainname').value=res;
				   if(document.getElementById('mainbackupimg')!=null){
					   chngpic(folder,image);
				   }
			  }
			}  
		}); 
			
	}else if(image=='backimage'){
	      
			var fileInput = document.getElementById('backimage');
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append('action', 'push_uplimage');
			formData.append('ftype', 'backimage');
			formData.append('previmg', document.getElementById('backname').value);
			formData.append('file', file);
				 document.getElementById('backimage_notice').innerHTML="<font color='#009900'>"+push_obj.str1+"...</font>";
			 jQuery.ajax({  
			url: document.getElementById('adm_url').value+"admin-ajax.php",
			type: "POST",  
			data: formData,  
			processData: false,  
			contentType: false,  
			success: function (res) { 
			  if(res=="Imageerror"){
				  document.getElementById('backimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str2+".</font>";
				  document.getElementById('backname').value="";
			  }else if(res=="sizeerror"){
				  document.getElementById('backimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str3+" .</font>";
				   document.getElementById('backname').value="";
			  }else{
				   document.getElementById('backimage_notice').innerHTML="<font color='#009900'>"+push_obj.str4+"</font>";
				   document.getElementById('backname').value=res;
				   if(document.getElementById('backimg')!=null){
					   chngpic(folder,image);
				   }
			  }
			}  
		}); 
			
	}else if(image=='fcloseimage'){
	      
			var fileInput = document.getElementById('fcloseimage');
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append('action', 'push_uplimage');
			formData.append('ftype', 'fcloseimage');
			formData.append('previmg', document.getElementById('closename').value);
			formData.append('file', file);
				 document.getElementById('fcloseimage_notice').innerHTML="<font color='#009900'>"+push_obj.str1+"...</font>";
			 jQuery.ajax({  
			url: document.getElementById('adm_url').value+"admin-ajax.php",  
			type: "POST",  
			data: formData,  
			processData: false,  
			contentType: false,  
			success: function (res) { 
			  if(res=="imageerror"){
				  document.getElementById('fcloseimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str2+".</font>";
				  document.getElementById('closename').value="";
			  }else if(res=="sizeerror"){
				  document.getElementById('fcloseimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str3+" .</font>";
				   document.getElementById('closename').value="";
			  }else{
				   document.getElementById('fcloseimage_notice').innerHTML="<font color='#009900'>"+push_obj.str4+"</font>";
				   document.getElementById('closename').value=res;
				   if(document.getElementById('fcloseimg')!=null){
					   chngpic(folder,image);
				   }
			  }
			}  
		}); 
			
	}else if(image=='hcloseimage'){
	      
			var fileInput = document.getElementById('hcloseimage');
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append('action', 'push_uplimage');
			formData.append('ftype', 'hcloseimage');
			formData.append('previmg', document.getElementById('closename').value);
			formData.append('file', file);
				 document.getElementById('hcloseimage_notice').innerHTML="<font color='#009900'>"+push_obj.str1+"...</font>";
			 jQuery.ajax({  
			url: document.getElementById('adm_url').value+"admin-ajax.php",  
			type: "POST",  
			data: formData,  
			processData: false,  
			contentType: false,  
			success: function (res) { 
			  if(res=="imageerror"){
				  document.getElementById('hcloseimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str2+".</font>";
				  document.getElementById('closename').value="";
			  }else if(res=="sizeerror"){
				  document.getElementById('hcloseimage_notice').innerHTML="<font color='#FF0000'>"+push_obj.str3+" .</font>";
				   document.getElementById('closename').value="";
			  }else{
				   document.getElementById('hcloseimage_notice').innerHTML="<font color='#009900'>"+push_obj.str4+"</font>";
				   document.getElementById('closename').value=res;
				   if(document.getElementById('hcloseimg')!=null){
					   chngpic(folder,image);
				   }
			  }
			}  
		}); 
			
	}  

}

function chngpic(folder,image){
     if(image=='firstimage'){
	     document.getElementById('firstimg').src=folder+'/'+document.getElementById('firstname').value;
		 document.getElementById('firstimage_notice').innerHTML+=". "+push_obj.str15+"";
	 }else if(image=='mainimage'){
	     document.getElementById('mainimg').src=folder+'/'+document.getElementById('mainname').value;
		  document.getElementById('mainimage_notice').innerHTML+=". "+push_obj.str15+"";
	 }else if(image=='closeimage'){
	     document.getElementById('closeimg').src=folder+'/'+document.getElementById('closename').value;
		  document.getElementById('closeimage_notice').innerHTML+=". "+push_obj.str15+"";
		 
	 }else if(image=='firstflashfile'){
	    swfobject.embedSWF(folder+'/'+document.getElementById('firstflashname').value, "firstflash", "250", "200", "9.0.0", "swfobject/expressInstall.swf");
		  document.getElementById('firstflashfile_notice').innerHTML+=". "+push_obj.str16+"";
		 
	 }else if(image=='mainflashfile'){
		 swfobject.embedSWF(folder+'/'+document.getElementById('mainflashname').value, "mainflash", "250", "200", "9.0.0", "swfobject/expressInstall.swf");
		  document.getElementById('mainflashfile_notice').innerHTML+=". "+push_obj.str16+"";
		 
	 }else if(image=='firstbackupimage'){
	     document.getElementById('firstbackupimg').src=folder+'/'+document.getElementById('firstname').value;
		 document.getElementById('firstbackupimage_notice').innerHTML+=". "+push_obj.str15+"";
	 }else if(image=='mainbackupimage'){
	     document.getElementById('mainbackupimg').src=folder+'/'+document.getElementById('mainname').value;
		  document.getElementById('mainbackupimage_notice').innerHTML+=". "+push_obj.str15+"";
	 }else if(image=='backimage'){
	     document.getElementById('backimg').src=folder+'/'+document.getElementById('backname').value;
		 document.getElementById('backimage_notice').innerHTML+=". "+push_obj.str15+"";
	 }else if(image=='fcloseimage'){
	     document.getElementById('fcloseimg').src=folder+'/'+document.getElementById('closename').value;
		  document.getElementById('fcloseimage_notice').innerHTML+=". "+push_obj.str15+"";
		 
	 }else if(image=='hcloseimage'){
	     document.getElementById('hcloseimg').src=folder+'/'+document.getElementById('closename').value;
		  document.getElementById('hcloseimage_notice').innerHTML+=". "+push_obj.str15+"";
		 
	 }
}

function fillEditBanner(imageoption,onceperday,autoopen,autoclose,bannertype,mainnewwindow,beforediv,firstonpage,showonpage,responsive){
	     
			getchecked('bannertype',bannertype);
			
			getchecked('responsive',responsive);
		
			
			if(bannertype=='Image'){
			getchecked('opt',imageoption);
			}
			
			getchecked('firstonpage',firstonpage);
			getchecked('showonpage',showonpage);
		  
			getchecked('beforediv',beforediv);
			
			getchecked('mainnewwindow',mainnewwindow);
			getchecked('onceperday',onceperday);
			getchecked('autoopen',autoopen);
			getchecked('autoclose',autoclose);
			
	
}
function changeOption(co){
	if(get_radio_value('bannertype')=='Image'){
			 document.getElementById('imageoption').value=co;
			
			   
				document.getElementById('main').style.display='block';
				 
				  document.getElementById('autoclose1').click();
				   document.getElementById('autoopen1').click();
		
	}
}

function getchecked(name,value){
	
	var values=value.split(',');
    for(var i=0; i<document.getElementsByName(name).length; i++){
	         current=document.getElementsByName(name).item(i);
		     for(var j=0; j<values.length; j++){
				  curr=values[j];
					 if(current.value==curr){
						 current.click();
						
					 }
			 }
	 
	 }


}

 function get_radio_value(id) {
            var inputs = document.getElementsByName(id);
            for (var i = 0; i < inputs.length; i++) {
              if (inputs[i].checked) {
                return inputs[i].value;
              }
            }
   }
   
   function startup(){
   
      document.getElementById('bannertype1').click();
		document.getElementById('slidedirection12').click();
		document.getElementById('flashclose2').click();
		document.getElementById('backup2').click();
		document.getElementById('useclosebutton1').click();
		document.getElementById('useopenbutton1').click();
		document.getElementById('bannerdisappear2').click();
		document.getElementById('pagescroll2').click();
		document.getElementById('onceperday2').click();
		document.getElementById('ourclose').click();
		document.getElementById('genclose1').click();
		document.getElementById('ouropen').click();
		document.getElementById('genopen2').click();
		document.getElementById('autoopen2').click();
		document.getElementById('autoclose2').click();
   }
   
function frmaction(action){
	jQuery('html,body').scrollTop(0);
	      var bannertype=get_radio_value('bannertype');
             // page=document.getElementById('page').value;
		   var valid=true;
		  var tfields="";
		  var nfields="";
		  
		   nfields='0';
 var option=document.getElementById('imageoption').value;
		  
		 
		  if(bannertype=='Image'){ 
				 if(option=="Option 4"){
					 
					 if(document.getElementById('mainname').value==''){
							document.getElementById('error_notice').innerHTML="<font color='#FF0000'>"+push_obj.str7+"</font>";
						   valid=false;
					 }else{
						   document.getElementById('error_notice').innerHTML="";
					 }
						 tfields="bannername|mainurl";
						
						  if(get_radio_value('firstonpage')=="No"){
							  
							tfields+="|divid";
						 }
						  
						   if(get_radio_value('autoopen')=="Yes"){
							tfields+="|autoopentime";
							 nfields="autoopentime";
						 }else if(get_radio_value('autoopen')=="No"){
							 document.getElementById('autoopen1').click(); 
							tfields+="|autoopentime";
							 nfields="autoopentime";
						 }
						  if(get_radio_value('autoclose')=="Yes"){
							tfields+="|autoclosetime";
							 nfields+="|autoclosetime";
						 }else if(get_radio_value('autoclose')=="No"){
							 document.getElementById('autoclose1').click(); 
							tfields+="|autoclosetime";
							 nfields+="|autoclosetime";
						 }
						 
						  if(!validate(tfields,'0',nfields)){
							 valid=false;
						 }
						 
						 
					 
				  }
		  }
      
	  if(valid==true){
		             if(action=='preview'){
                                               
						 return true;
                                         
					 }else{
						 
					  var formpostrequest=new ajaxRequest();
						formpostrequest.onreadystatechange=function(){
						 if (formpostrequest.readyState==4){
						  if (formpostrequest.status==200 || window.location.href.indexOf("http")==-1){
							  
							  if(formpostrequest.responseText=="nameerror"){
								  document.getElementById('error_notice').innerHTML="<font color='#FF0000'>"+push_obj.str11+".</font>";
							  }else{
								   document.getElementById('error_notice').innerHTML="";
							  document.getElementById('bannerid').value=formpostrequest.responseText;
							
							   document.location='admin.php?page=push_pushdown_top';
							  }
						  
						  }
						  else{
						   alert("An error has occured making the request")
						  }
						 }
						};
						
						var parameters="action=push_submit&bannerid="+document.getElementById("bannerid").value+"&bannername="+document.getElementById("bannername").value+"&imageoption="+option+"&mainbanner="+document.getElementById("mainname").value+"&mainurl="+document.getElementById("mainurl").value+"&autoopen="+get_radio_value('autoopen')+"&autoclose="+get_radio_value('autoclose')+"&autoopentime="+document.getElementById("autoopentime").value+"&autoclosetime="+document.getElementById("autoclosetime").value+"&onceperday="+get_radio_value('onceperday')+"&bannertype="+get_radio_value('bannertype')+"&bgcolor="+document.getElementById('bgcolor').value+"&bgimage="+document.getElementById('backname').value+"&mainnewwindow="+get_radio_value('mainnewwindow')+"&pagetitle="+document.getElementById('pagetitle').value+"&beforediv="+get_radio_value('beforediv')+"&divid="+document.getElementById('divid').value+"&firstonpage="+get_radio_value('firstonpage')+"&showonpage="+get_radio_value('showonpage')+"&abovecss="+document.getElementById('abovecss').value+"&belowcss="+document.getElementById('belowcss').value+"&responsive="+get_radio_value('responsive');
						formpostrequest.open("POST", document.getElementById('adm_url').value+"/admin-ajax.php", true);
						formpostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						formpostrequest.send(parameters);
						
					 }
				      
				 }else{
				     alert(push_obj.str17);
					 return false;
				 }
}

function validate(textfield,email,numberfield)

{

	var valid;	

	var textv=true;

	var tfield=textfield.split('|');

	var nfield=numberfield.split('|');

	

	var currentf;
      
	for(var i=0; i<tfield.length; i++){

		
       
				currentf=document.getElementById(tfield[i]);
		
			
		
			   valid=checkText(currentf);
		
			   if(valid==false){
		
				 textv=false;
		
				
		
				document.getElementById(tfield[i]+"_notice").innerHTML="<font color='#FF0000'>"+push_obj.str12+".</font>";
		
				 
		
			   }else{
		
			   
		
				document.getElementById(tfield[i]+"_notice").innerHTML="";
		
			   }
	

	}

	

	if(email!='0' && document.getElementById(email).value!=''){

		

	    valid=checkEmail(document.getElementById(email));

		if(valid==false){

		   document.getElementById(email+"_notice").innerHTML="<font color='#FF0000'>"+push_obj.str13+"</font>";

			

		   textv=false;

		}else{

		  

			document.getElementById(email+"_notice").innerHTML="";

		}

	}

	if(numberfield!='0'){

		
for(var i=0; i<nfield.length; i++){

		
   
		currentf=document.getElementById(nfield[i]);

	
         
	   valid=checkNumber(currentf);

	   if(valid==false){

		 textv=false;

		if(document.getElementById(nfield[i]+"_notice").innerHTML==""){

		document.getElementById(nfield[i]+"_notice").innerHTML="<font color='#FF0000'>"+push_obj.str14+".</font>";
		}
	     

	   }else{

	   
        if(document.getElementById(nfield[i]+"_notice").innerHTML==""){
		document.getElementById(nfield[i]+"_notice").innerHTML="";
		}

	   }
  

	}

	}


	

	return textv;

		

		

		



}

function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] //activeX versions to check for in IE
 if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i])
   }
   catch(e){
    //suppress error
   }
  }
 }
 else if (window.XMLHttpRequest) // if Mozilla, Safari etc
  return new XMLHttpRequest()
 else
  return false
}

function checkNumber(field){

	

     if(isNaN(field.value)){


	   return false;

	 }else

	    return true;

}

function checkLimit(field,name,low,high){

	

    if(field.value<low || field.value>high){

	    alert("Please enter "+name+" between "+low+" and "+high);

		return false;

	}else

	    return true;

}



function checkText(field){

	

     if(field.value==''){

	   

		

		return false;

	 }else

	    return true;

}



function checkEmail(email){

     if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)==false){

		  

		   return false;

			

		}else

		   return true;

}

function GetXmlHttpObject()

{

  if (window.XMLHttpRequest)

  {
    

    // code for IE7+, Firefox, Chrome, Opera, Safari

    return new XMLHttpRequest();

  }

  if (window.ActiveXObject)

  {

    // code for IE6, IE5

    return new ActiveXObject("Microsoft.XMLHTTP");

  }

  return null;

}


function stateChanged()

{

  if (xmlhttp.readyState==4)

  {
                 if (navigator  &&  navigator.userAgent.match( /MSIE/i )){  
          setTBodyInnerHTML(document.getElementById(divId), xmlhttp.responseText);
             }else{   
            document.getElementById(divId).innerHTML=xmlhttp.responseText;   
	           }
                   //document.getElementById(divId).innerText=xmlhttp.responseText;


   

  }

}
