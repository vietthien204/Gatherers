(function(){var o,l,p,q,r,m,e;o=[{name:"Pioneer Food Market",address:"77 Congress Street, Troy, New York 12180",website:"http://www.troyfoodcoop.com",latitude:42.728752,longitude:-73.69043}];e=window.store_locations||o;q=function(){return navigator.geolocation.getCurrentPosition(function(a){a=a!=null?a.coords:void 0;if((a!=null?a.latitude:void 0)!=null&&a.longitude!=null)return p(a)})};r=function(){var a,c,b;b=[];for(a=0;a<=4;a++){c=Math.floor(Math.random()*e.length);b.push({store:e[c]});e=e.slice(0,
c).concat(e.slice(c+1,e.length))}return m(b)};p=function(a){var c,b,d,g,h,f,i,j,n,k,s;d=[];k=0;for(s=e.length;k<s;k++){i=e[k];j=Math.abs(a.latitude)*Math.PI/180;n=Math.abs(a.longitude)*Math.PI/180;g=Math.abs(i.latitude)*Math.PI/180;h=Math.abs(i.longitude)*Math.PI/180;c=Math.acos;b=Math.cos;f=Math.sin;c=c(b(j)*b(n)*b(g)*b(h)+b(j)*f(n)*b(g)*f(h)+f(j)*f(g))*3959;d.push({delta:c,store:i})}d.sort(function(t,u){return t.delta-u.delta});return m(d)};l=function(a){var c,b;b=a.store;c=b.name;if(b.website)c=
"<a href='"+b.website+"'>"+c+"</a>";b=b.address?escape(""+b.name+" "+b.address):escape(""+b.latitude+", "+b.longitude);if(a.delta!=null){a.delta=a.delta<1?a.delta.toFixed(1):a.delta.toFixed(0);a=""+a.delta+" mi"}else a="map";return""+c+(" (<a href='http://maps.google.com/?q="+b+"'>"+a+"</a>)")};m=function(a){var c,b,d,g,h,f;if(a.length>0){b=a.length>1?", and <span>other fine establishments</span>":"";g="Available at "+l(a[0])+b+".";b="";d=5;if(a.length<d)d=a.length;f=a.slice(1,d);d=0;for(h=f.length;d<
h;d++){a=f[d];b+="<li>"+l(a)+"</li>"}$("div#store p").html(g);c=$("div#store ul");c.html(b);return $("div#store p span").click(function(){return c.slideToggle(200)})}};window.storeInit=function(){if(navigator.geolocation!=null){$("div#store p").html("<span>Find stores near you</span>.");return $("div#store p span").click(q)}else return r()}}).call(this);
