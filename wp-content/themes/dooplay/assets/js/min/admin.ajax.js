!function(n){var o={};Doc=n(document),Ajx=dooAj.url,n(function(){o.SimpleClicks(),o.LicenseApiRest(),o.FeaturedTitles(),o.UploadBackdrop(),o.AdTabsManage(),o.SaveAdOptions(),o.LinkPost(),o.LinkDelete(),o.LinkEditor(),o.LinkReload(),o.LinkSave(),o.UpdateOptions(),o.UpdateDatabase(),o.DatabaseTool()}),o.SimpleClicks=function(){Doc.on("click",".requestscontrol",function(){var o=n(this).data("post");n("#request_post_"+o).html(dooAj.loading)}),Doc.on("click","#doolinks_response > tr",function(){n(this).toggleClass("active")}),Doc.on("click","#dooplay_anchor_showform",function(){return n(".dform").fadeIn(500),n(".dpre").hide(),!1}),Doc.on("click","#dooplay_anchor_hideform",function(){return n(".dpre").fadeIn(500),n(".dform").hide(),!1}),Doc.on("click","#doolinkeditor_cancel",function(){var o=n(this).data("id");return n(".managelinks").show(),n("#dooeditorlink-"+o).remove(),!1}),Doc.on("click",".doo-nav-tab",function(){var o=n(this).attr("data-tab");return n(".doo-nav-tab").removeClass("nav-tab-active"),n(".dt_boxg").removeClass("current"),n(this).addClass("nav-tab-active"),n("#"+o).addClass("current"),!1}),Doc.on("submit","#post",function(){n("#dooplay_lfield_urls").val()&&1==confirm(dooAj.confirmpublink)&&n("#dooplay_anchor_postlinks").trigger("click")})},o.LicenseApiRest=function(){Doc.on("click","#api_doothemes",function(){n(".apivalue").html(dooAj.loading);var o=dooAj.doothemes_server;return b=dooAj.doothemes_item,c=dooAj.doothemes_license,d=dooAj.domain,n.getJSON(o+"/?edd_action=check_license&license="+c,function(o){n.each(o,function(o,e){n("#"+o).html(e),"license"==o&&("valid"==e?n("#license").html('<span class="valid_dt_key_info">ON</span> <code>'+c+"</code>"):n("#license").html('<span class="invalid_dt_key_info">OFF</span> <code>'+c+"</code>"))})}),!1})},o.FeaturedTitles=function(){Doc.on("click",".add-to-featured",function(){var e=n(this).data("postid");return nonce=n(this).data("nonce"),n("#feature-add-"+e).html(dooAj.loading),n.ajax({url:Ajx,type:"post",data:{postid:e,nonce:nonce,action:"dt_add_featured"},error:function(o){console.log(o)},success:function(o){n("#feature-add-"+e).html(dooAj.add_featu),n("#feature-add-"+e).hide(),n("#feature-del-"+e).show()}}),!1}),Doc.on("click",".del-of-featured",function(){var e=n(this).data("postid"),o=n(this).data("nonce");return n("#feature-del-"+e).html(dooAj.loading),n.ajax({url:Ajx,type:"post",data:{postid:e,nonce:o,action:"dt_remove_featured"},error:function(o){console.log(o)},success:function(o){n("#feature-del-"+e).html(dooAj.rem_featu),n("#feature-add-"+e).show(),n("#feature-del-"+e).hide()}}),!1})},o.UploadBackdrop=function(){Doc.on("click",".import-upload-image",function(){var o=n(this).data("prelink");return nonce=n(this).data("nonce"),field=n(this).data("field"),postid=n(this).data("postid"),image=n("#"+field).get(0).value,urlimage=o+image,image&&(n(".import-upload-image").hide(),n("#"+field).val(dooAj.loading),n("#"+field).prop("disabled",!0),n.ajax({url:Ajx,type:"post",data:{url:urlimage,nonce:nonce,field:field,postid:postid,action:"dt_upload_ajax_image"},error:function(o){console.log(o)},success:function(o){n("#"+field).prop("disabled",!1),n("#"+field).val(o)}})),!1})},o.AdTabsManage=function(){1<n("#dooadmenu > li.nav-tab").length&&Doc.on("click","#dooadmenu > li.nav-tab",function(){var o=n(this).data("tab");return 0!=o&&(n("#dooadmenu > li.nav-tab").removeClass("nav-tab-active"),n(".tab-content").removeClass("on"),n(this).addClass("nav-tab-active"),n("#dooad-"+o).addClass("on")),!1})},o.SaveAdOptions=function(){Doc.on("submit","#dooadmanage",function(){var e="#dooadsavebutton";return that=n(this),text=n(e).data("text"),n(e).prop("disabled",!0),n(e).val(dooAj.loading),n("#ad-manage-codes").addClass("hidden"),n.ajax({url:Ajx,type:"post",dataType:"json",data:that.serialize(),error:function(o){console.log(o)},success:function(o){n("#ad-manage-codes").removeClass("hidden"),n(e).prop("disabled",!1),n(e).val(text)}}),!1})},o.LinkPost=function(){Doc.on("click","#dooplay_anchor_postlinks",function(){return n("#dooplay_lfield_urls").val()?(n("#doolinks_response").addClass("onload"),n("#publish").hide(),n.ajax({url:Ajx,type:"post",data:{urls:n("#dooplay_lfield_urls").val(),type:n("#dooplay_lfield_type").val(),quality:n("#dooplay_lfield_qual").val(),language:n("#dooplay_lfield_lang").val(),size:n("#dooplay_lfield_size").val(),postid:n("#post_ID").val(),action:"doosave_links"},error:function(o){console.log(o)},success:function(o){n("#publish").show(),n("#doolinks_response").removeClass("onload"),n("#doolinks_response").html(o),n("#dooplay_lfield_urls").val(""),n("#dooplay_lfield_size").val("")}})):alert(dooAj.nolink),!1})},o.LinkDelete=function(){Doc.on("click",".doodelete_links",function(){var e=n(this).data("id");return answer=confirm(dooAj.deletelink),answer&&n.ajax({url:Ajx,type:"post",data:{id:e,action:"doodelt_links"},error:function(o){console.log(o)},success:function(o){n("#link-"+e).remove(),n("#dooeditorlink-"+e).remove()}}),!1})},o.LinkEditor=function(){Doc.on("click",".dooedit_links",function(){var e=n(this).data("id");return n(".doo_link_editor").remove(),n(".managelinks").show(),n("#link-"+e).addClass("onload"),n("#link-"+e).removeClass("fadein"),n("#link-"+e+" > td > .managelinks").hide(),n.ajax({url:Ajx,type:"post",data:{id:e,action:"dooformeditor_links"},error:function(o){console.log(o)},success:function(o){n("#link-"+e).removeClass("onload"),n("#link-"+e).after(o),n("#doolinkeditor_url").focus(),n("#link-"+e+" > .managelinks").hide()}}),!1})},o.LinkReload=function(){Doc.on("click","#dooplay_anchor_reloadllist",function(){var o=n(this).data("id");return n("#doolinks_response").addClass("onload"),n.ajax({url:Ajx,type:"post",data:{id:o,action:"dooreload_links"},error:function(o){console.log(o)},success:function(o){n("#doolinks_response").removeClass("onload"),n("#doolinks_response").html(o)}}),!1})},o.LinkSave=function(){Doc.on("click","#doolinkeditor_save",function(){var e=n(this).data("id");return n.ajax({url:Ajx,type:"post",data:{id:e,url:n("#doolinkeditor_url").val(),lang:n("#doolinkeditor_lang").val(),type:n("#doolinkeditor_type").val(),quality:n("#doolinkeditor_quality").val(),size:n("#doolinkeditor_size").val(),action:"doosaveformeditor_links"},error:function(o){console.log(o)},success:function(o){n("#link-"+e).addClass("fadein"),n("#link-"+e).html(o),n(".doo_link_editor").remove()}}),!1})},o.UpdateOptions=function(){Doc.on("click",".dooplay_update_database",function(){return n("#cfg_dts").html(dooAj.updb),n.ajax({url:Ajx,type:"post",data:{action:"update_dbdooplay"},error:function(o){console.log(o)},success:function(o){location.reload()}}),!1})},o.UpdateDatabase=function(){Doc.on("submit","#doolinkmod_form",function(){var o=n(this);return n("#doolinkmod_submit").prop("disabled",!0),n.ajax({url:Ajx,type:"post",dataType:"json",data:o.serialize(),error:function(o){console.log(o)},success:function(o){var e;n("#doolinkmod_submit").prop("disabled",!1),n("#doolinkmod > .response").show(),n(".doo-progress > div").animate({width:o.percentage+"%"},150,function(){}),o.step?(e=parseFloat(o.step)+parseFloat(1),n("#doolinkmod_step").val(e),n("#doolinkmod_submit").trigger("click")):o.next?(n("#doolinkmod_run").val(o.next),n("#doolinkmod_submit").trigger("click")):(n("#doolinkmod_form").remove(),n("#doolinkmod").removeClass("required"),n("#doolinkmod > .response").html('<div class="notice fadein">'+dooAj.completed+"</div>"))}}),!1})},o.DatabaseTool=function(){Doc.on("click",".doodatabasetool",function(){var e=n(this),a=e.data("run"),o=n("#doolinkmod_nonce").val();return confirm(dooAj.confirmdbtool)&&(n(e).addClass("disabled"),n("#doodatabasetool_"+a).html(dooAj.loading),n.ajax({url:Ajx,type:"post",dataType:"json",data:{run:a,noc:o,action:"dooplaydbtool"},error:function(o){console.log(o)},success:function(o){n(e).removeClass("disabled"),1==o.response&&(n("#doodatabasetool_"+a).html(o.message),1==o.remove&&n("#doobox_"+a).remove())}})),!1})}}(jQuery);
