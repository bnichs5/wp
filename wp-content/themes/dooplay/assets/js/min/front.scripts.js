var js={};!function(a){a(document).on("click",".se-q",function(){var e=a(this).parents(".se-c"),s=e.find(".se-a"),o=e.find(".se-t");s.slideToggle(200),o.hasClass("se-o")?o.removeClass("se-o"):o.addClass("se-o")}),a(document).on("click","#top-page",function(){return a("html, body").animate({scrollTop:0},"slow"),!1}),a(document).on("click","#discoverclic",function(){a(this).addClass("hidde"),a("#closediscoverclic").removeClass("hidde"),a("#discover").addClass("show"),a("#requests").addClass("hidde"),a(".requests_menu").addClass("hidde"),a(".requests_menu_filter").removeClass("hidde")}),a(document).on("click","#closediscoverclic",function(){a(this).addClass("hidde"),a("#discoverclic").removeClass("hidde"),a("#discover").removeClass("show"),a("#requests").removeClass("hidde"),a(".requests_menu_filter").addClass("hidde"),a(".requests_menu").removeClass("hidde")}),a(document).on("click",".filtermenu a",function(){var e=a(this).attr("data-type");return a(".filtermenu a").removeClass("active"),a(this).addClass("active"),a("#type").val(e),!1}),a(document).on("click",".rmenu a",function(){var e=a(this).attr("data-tab");return a(".rmenu a").removeClass("active"),a(".tabox").removeClass("current"),a(this).addClass("active"),a("#"+e).addClass("current"),!1}),a(document).on("click",".clicklogin",function(){a(".login_box ").show()}),a(document).on("click","#c_loginbox",function(){a(".login_box ").hide()}),a(document).on("click",".nav-resp",function(){a("#arch-menu").toggleClass("sidblock"),a(".nav-resp").toggleClass("active")}),a(document).on("click",".nav-advc",function(){a("#advc-menu").toggleClass("advcblock"),a(".nav-advc").toggleClass("dactive")}),a(document).on("click",".report-video",function(){a("#report-video").toggleClass("report-video-active"),a(".report-video").toggleClass("report-video-dactive")}),a(document).on("click",".adduser",function(){a("#register_form").toggleClass("advcblock"),a(".form_fondo").toggleClass("advcblock"),a(".adduser").toggleClass("dellink")}),a(document).on("click",".search-resp",function(){a("#form-search-resp").toggleClass("formblock"),a(".search-resp").toggleClass("active")}),a(document).on("click",".wide",function(){a("#playex").toggleClass("fullplayer"),a(".sidebar").toggleClass("fullsidebar"),a(".icons-enlarge2").toggleClass("icons-shrink2")}),a(document).on("click",".sources",function(){a(".sourceslist").toggleClass("sourcesfix"),a(".listsormenu").toggleClass("icon-close2")}),a(document).keyup(function(e){27==e.keyCode&&(a(".login_box").hide(100),a("#result_edit_link").hide(100),a("#report-video").removeClass("report-video-active"))});a.each(["#tvload","#movload","#featload","#epiload","#seaload","#slallload","#sltvload","#slmovload",".genreload"],function(e,s){1<=a(s).length&&(a(".content").ready(function(){a(s).css("display","none")}),a(".content").load(function(){a(s).css("display","none")}))});for(var e=0,s=a(".items .item"),o=0;o<=s.length;o++)3<e?(a(".items .item:nth-child("+o+") .dtinfo").addClass("right"),e<5?e++:(e--,e--,e--,e--)):(a(".items .item:nth-child("+o+") .dtinfo").addClass("left"),e++);a.fn.exists=function(){return 0<e(this).length},js.model={events:{},extend:function(e){var o=a.extend({},this,e);return a.each(o.events,function(e,s){o._add_event(e,s)}),o},_add_event:function(e,s){var o=this,t=e,i="",n=document;0<e.indexOf(" ")&&(t=e.substr(0,e.indexOf(" ")),i=e.substr(e.indexOf(" ")+1)),"resize"!=t&&"scroll"!=t||(n=window),a(n).on(t,i,function(e){e.$el=a(this),"function"==typeof o.event&&(e=o.event(e)),o[s].apply(o,[e])})}},js.header=js.model.extend({$header:null,$sub_header:null,active:0,hover:0,show:0,y:0,opacity:1,direction:"down",events:{ready:"ready",scroll:"scroll","mouseenter #header":"mouseenter","mouseleave #header":"mouseleave"},ready:function(){this.$header=a("#header"),this.$sub_header=a("#sub-header"),this.active=1},mouseenter:function(){var e=a(window).scrollTop();this.hover=1,this.opacity=1,this.show=e,this.$header.stop().animate({opacity:1},250)},mouseleave:function(){this.hover=0},scroll:function(){var e,s,o,t,i,n;this.active&&(o=(s=(e=a(window).scrollTop())>=this.y?"down":"up")!==this.direction,this.y,t=this.$sub_header.outerHeight(),clearTimeout(this.t),e<70&&this.$header.removeClass("-white"),o&&(0==this.opacity&&"up"==s?(this.show=e)<t?this.show=0:this.show-=70:1==this.opacity&&"down"==s&&(this.show=e),this.show=Math.max(0,this.show)),this.$header.hasClass("-open")&&(this.show=e),this.hover&&(this.show=e),i=e-this.show,i=Math.max(0,i),n=(70-(i=Math.min(i,70)))/70,this.$header.css("opacity",n),t<e?this.$header.addClass("-white"):0==n&&this.$header.removeClass("-white"),this.y=e,this.direction=s,this.opacity=n)}})}(jQuery);
