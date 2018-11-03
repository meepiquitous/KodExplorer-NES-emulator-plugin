var nesromurl="";

kodReady.push(function(){  
 	kodApp.add({
		name:"NESEmu",
		title:LNG['Plugin.default.NESEmu'],
		icon:'{{pluginHost}}static/NES_Avatar.png',
		ext:"{{config.fileExt}}",
		sort:"{{config.fileSort}}",  
    callback:function(path,ext){
      var url = '{{pluginApi}}&path='+core.pathCommon(path);
			if('window' == "{{config.openWith}}" && !core.isFileView() ){
				window.open(url);      
			}else{
				core.openDialog(url,core.icon('{{pluginHost}}static/NES_Avatar.png'),htmlEncode(core.pathThis(path)));
			}
             
       /*$.dialog.open("{{pluginApi}}",{
		      title:"NES Emulator",
		      ico:core.icon('{{pluginHost}}static/NES_Avatar.png'),
          disableTab:false,
          width:'256px',
		      height:'244px',
          resize:true,
          fixed:false,
          padding:0,
		      simple:false
	     }); */ 
       
       //set global variable rom url
       window.parent.nesromurl=core.path2url(path);
       
    },
	});
});