(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[5],{106:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mobile";return{width:"100%",slidesToShow:"time"===e?"tablet"===t?8:3:1,slidesToScroll:"time"===e?"tablet"===t?8:3:1,initialSlideHeight:"time"===e?100:200,slideWidth:"time"===e?"tablet"===t?1:.95:1,speed:1e3,easing:"easeSinInOut",defaultControlsConfig:{prevButtonStyle:{display:"none"},nextButtonStyle:{display:"none"},pagingDotsStyle:{fill:"#A1A6B4",display:"flex",position:"relative",top:"day"===e?"25px":"35px",margin:"10px 5px"}}}}},107:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a(170),r=a(89),c=function(e){return(!Object(n.a)(e.photos)||!Object(r.a)(e.photos))&&e.photos.length>0},l=function(e){var t=(c(e)?e.photos[0]:{mobile:"",web:""}).image,a=c(e)?e.photos[0].attribution:{photographer:"",site:"",source:""};return{image:t,photographer:a.photographer,site:a.site,source:a.source}}},112:function(e,t,a){"use strict";var n=a(92),r=a.n(n),c=a(110),l=a(100),s=a.n(l),o=a(101),m=a.n(o),i=a(170),u=a(89),d=a(93),f=a(8);m()(s.a,{retryDelay:m.a.exponentialDelay});var b=function(e){return"".concat("https://cors-anywhere.herokuapp.com","/https://api.darksky.net/forecast/").concat("4e27157cf1858c6667c07568e8e21a56","/").concat(e,"?extend=hourly&exclude=minutely,flags")};t.a=function(e){var t,a,n;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(t=e.latlong,a={},n={},Object(i.a)(t)||Object(u.a)(t)){l.next=6;break}return l.next=6,r.a.awrap(s.a.get(b(t)).then((function(e){var t=e.data;if(!Object(u.a)(t)&&!Object(i.a)(t)){var r=t.timezone;a=Object(c.a)({timezone:r},t.currently);var l={};t.hourly.data.forEach((function(e){var t=Object(d.a)(e.time,r,"MM/DD/YYYY");Object.keys(l).includes(t)?l[t].push(Object(c.a)({timezone:r},e)):l[t]=[Object(c.a)({timezone:r},e)]}));var s={};t.daily.data.forEach((function(e){var t=Object(d.a)(e.time,r,"MM/DD/YYYY");s[t]=Object(c.a)({timezone:r},e)})),n={timeFrames:l,days:s}}})).catch((function(e){return f.a(e)})));case 6:return l.abrupt("return",{weatherCurrent:a,weatherForecast:n});case 7:case"end":return l.stop()}}))}},113:function(e,t,a){"use strict";var n=a(18);t.a=function(e,t){switch(e){case"favorites":Object(n.a)({category:"Favorites",action:"Select Favorite",label:t});break;case"explore-life":Object(n.a)({category:"Explore Life",action:"Click on Explore Life",label:t});break;case"powered-by":Object(n.a)({category:"Powered By",action:"Click on Powered By",label:t})}}},115:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(116),l=a(47),s=a(99),o=a(13),m=a(107),i=a(170),u=a(89),d=a(30),f=a.n(d),b=a(18),p=a(28),x=function(e){var t=e.address,a=e.latlong,d=e.urbanArea,x=e.weatherCurrent,h=Object(n.useContext)(s.a).updateFavorites,E=Object(n.useState)(""),g=Object(l.a)(E,2),y=g[0],v=g[1],j=Object(n.useState)(""),w=Object(l.a)(j,2),O=w[0],N=w[1],k=Object(n.useContext)(o.a).colorTheme,C=Object(m.a)(d),S=C.image,F=C.photographer,z=C.site,T=C.source,I=function(e,t){Object(b.a)({category:"Favorite City",action:"".concat(e," city"),label:t})},M=Object(n.useRef)(),A=function(){return!!localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.address.cityName===t.cityName})).length>0},Y=function(e){v(Object(i.a)(e)?"":e.format("MMMM Do, YYYY")),N(Object(i.a)(e)?"":e.format("dddd h:mm A")),M.current=e||null};return Object(n.useEffect)((function(){Y(f()(1e3*x.time).tz(x.timezone));var e=setInterval((function(){if(x.time){var e=f.a.tz(M.current,x.timezone).add(1,"s");Y(e)}}),1e3);return function(){clearInterval(e)}}),[x]),r.a.createElement("div",{className:"relative"},r.a.createElement("div",null,Object(m.b)(d)?r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:S.mobile,alt:"city",className:"block sm:hidden h-40 w-full object-cover object-center rounded-t-2xl"}),r.a.createElement("img",{src:S.web,alt:"city",className:"hidden sm:block sm:h-32 md:h-24 xl:h-32 w-full object-cover object-center rounded-t-2xl"})):null),r.a.createElement("div",{className:"".concat(Object(m.b)(d)?"absolute top-0 left-0 right-0 bottom-0 text-light":"text-".concat(k)),style:Object(m.b)(d)?{background:"rgba(0,0,0,0.55)",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"}:null},r.a.createElement("div",{className:"flex justify-between items-start"},r.a.createElement("div",{className:"pt-4 px-4"},r.a.createElement("p",{className:"font-bold ".concat(Object(m.b)(d)?"sm:text-2xl":"")},t.cityName),r.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row ".concat(Object(m.b)(d)?"font-medium":"font-light")},Object(u.a)(y)||Object(u.a)(O)?null:r.a.createElement(n.Fragment,null,r.a.createElement("p",null,y,r.a.createElement("span",{className:"invisible md:visible"},"\xa0|\xa0")),r.a.createElement("p",null,O)))),r.a.createElement("div",{className:"mt-6 mr-4 cursor-pointer text-xl",title:A()?"Remove this city from favorites":"Favorite this city",onClick:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites")),n=e.filter((function(e){return e.address.cityName===t.cityName}));if(n.length){var r=e.findIndex((function(e){return e.address.cityName===n[0].address.cityName}));if(-1!==r){var l=Object(c.a)(e);l.splice(r,1),localStorage.setItem("favorites",JSON.stringify(l)),I("remove",t.cityName),h({favorites:l})}}else{var s=[].concat(Object(c.a)(e),[{address:t,latlong:a,urbanArea:d}]);localStorage.setItem("favorites",JSON.stringify(s)),I("add",t.cityName),h({favorites:s})}}else localStorage.setItem("favorites",JSON.stringify([{address:t,latlong:a,urbanArea:d}])),I("add",t.cityName),h({favorites:[{address:t,latlong:a,urbanArea:d}]})}},A()?r.a.createElement(p.a,null):r.a.createElement(p.d,null))),r.a.createElement("div",{className:"hidden md:block text-right bottom-0 right-0 xl:mt-8 px-2"},F&&z?r.a.createElement("p",{className:"font-light",style:{fontSize:"0.5rem"}},"Photo by\xa0",r.a.createElement("span",{className:"font-medium"},F),"\xa0on\xa0",r.a.createElement("a",{className:"link z-0 font-medium hover:no-underline hover:font-medium hover:text-light",href:T,target:"_blank",rel:"noreferrer noopener",onClick:function(){Object(b.a)({category:"City Image",action:"Click on Image Source",label:"Image source"})}},z)):null)))},h=a(94),E=function(e){return e>=0&&e<=45?"up":e>=46&&e<=90?"up-right":e>=91&&e<=135?"right":e>=136&&e<=180?"down-right":e>=181&&e<=225?"down":e>=226&&e<=270?"down-left":e>=271&&e<=315?"left":"up-left"},g=a(96),y=a(95),v=a(111),j=a(97),w=function(e){var t=e.weatherCurrent,a=Object(n.useContext)(h.a),c=a.weatherUnit,l=a.updateWeatherUnit,s=function(e){Object(b.a)({category:"Weather Unit",action:"Set Unit",label:e}),l(e)},o=function(e){return"F"===c?Math.round(t["".concat(e)]):Object(y.a)(t["".concat(e)])};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row justify-between mt-5 mb-5 px-4"},r.a.createElement("div",{className:"flex-col sm:w-full lg:w-1/2"},r.a.createElement("div",{className:"flex flex-row justify-between  sm:justify-start"},r.a.createElement("div",null,Object(g.a)(t).startsWith("wi")?r.a.createElement("p",{className:"text-5xl ml-6 mr-2",title:t.summary},r.a.createElement(j.a,{type:Object(g.a)(t)})):r.a.createElement("img",{src:"./weather/".concat(Object(g.a)(t),".svg"),alt:"icon",title:t.summary,className:"-mt-2 w-24 h-24 object-contain"})),r.a.createElement("div",{className:"flex justify-start items-center pr-6 sm:ml-3"},r.a.createElement("div",null,r.a.createElement("span",{className:"text-5xl font-bold"},o("temperature"))),r.a.createElement("div",{className:"-mt-8 mx-2 text-sm"},r.a.createElement("sup",null,"o"),r.a.createElement("span",{className:"cursor-pointer ".concat("F"===c?"font-bold underline":"font-light"),onClick:function(){return s("F")}},"F"),r.a.createElement("span",{className:"mx-1"},"|"),r.a.createElement("sup",null,"o"),r.a.createElement("span",{className:"cursor-pointer ".concat("C"===c?"font-bold underline":"font-light"),onClick:function(){return s("C")}},"C")))),r.a.createElement("p",{className:"hidden sm:flex font-medium ml-6 capitalize"},t.summary)),r.a.createElement("div",{className:"flex flex-row justify-between sm:flex-col sm:mt-1 sm:w-full lg:w-1/2"},r.a.createElement("p",{className:"sm:hidden font-medium ml-6 capitalize text-xl"},t.summary),r.a.createElement("div",{className:"text-sm sm:text-lg"},r.a.createElement("div",{className:"flex flex-row"},r.a.createElement("p",{className:"font-light"},"Humidity:"),"\xa0",r.a.createElement("p",{className:"mx-1"},Math.round(t.humidity)),r.a.createElement("p",{className:"text-sm mt-1"},r.a.createElement(v.a,null))),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Wind:"),"\xa0",function(){return"F"===c?"".concat(Math.round(t.windSpeed)," mph"):"".concat((e=t.windSpeed,Math.round(1.6*e))," kmph");var e}()," "),r.a.createElement("p",{className:"text-3xl"},r.a.createElement(j.a,{type:E(t.windBearing)}))),r.a.createElement("p",null,r.a.createElement("span",{className:"font-light"},"Feels like:"),"\xa0",o("apparentTemperature"),r.a.createElement("sup",null,"o"))))))},O=a(46),N=a(102);t.a=function(e){var t=e.weatherCurrent,a=e.address,c=e.latlong,l=e.urbanArea;return r.a.createElement(N.a,null,r.a.createElement(n.Fragment,null,a&&t?r.a.createElement("div",null,r.a.createElement(x,{address:a,latlong:c,urbanArea:l,weatherCurrent:t}),r.a.createElement(w,{weatherCurrent:t})):r.a.createElement(O.a,null)))}},117:function(e,t,a){"use strict";var n=a(92),r=a.n(n),c=a(47),l=a(1),s=a.n(l),o=a(170),m=a(89),i=a(114),u=a(94),d=a(13),f=a(95),b=a(96),p=a(93),x=a(97),h=function(e){var t=e.day,a=e.index,n=e.selectedIndex,r=Object(l.useContext)(u.a).weatherUnit,c=Object(l.useContext)(d.a),o=c.theme,m=c.colorTheme,i=function(e){return"F"===r?Math.round(t["temperature".concat(e)]):Object(f.a)(t["temperature".concat(e)])};return s.a.createElement("div",{className:"sm:border-t sm:border-r sm:border-b-0 sm:border-l-0 sm:border-".concat(m," sm:hover:bg-").concat(m," sm:hover:text-").concat(o," items-center text-center sm:flex-1 sm:py-1 sm:pb-3 cursor-pointer ").concat(a===n?"bg-".concat(m," text-").concat(o):""," transition-all duration-1000 ease-in-out"),onClick:function(){e.selectedDay({day:t})}},s.a.createElement("div",{className:"flex flex-row flex-no-wrap sm:flex-col sm:flex-wrap justify-around items-center px-2"},s.a.createElement("p",{className:"flex w-1/6 sm:w-full sm:justify-center text-base font-light sm:font-medium"},Object(p.a)(t.time,t.timezone,"ddd")),s.a.createElement("div",{className:"flex w-1/6 sm:w-full"},Object(b.a)(t).startsWith("wi")?s.a.createElement("p",{className:"my-1 sm:mt-1 sm:mb-3 mx-auto text-3xl",title:t.summary},s.a.createElement(x.a,{type:Object(b.a)(t)})):s.a.createElement("img",{src:"./weather/".concat(Object(b.a)(t),".svg"),alt:"icon",title:t.summary,className:"sm:-mt-3 sm:-mb-1 mx-auto w-12 h-12 sm:w-16 sm:h-16 object-contain"})),s.a.createElement("div",{className:"flex flex-row justify-center items-center font-light w-1/4 sm:w-full mt-1 sm:mt-0"},s.a.createElement("p",{className:"mx-2 text-xs sm:text-sm"},i("High"),s.a.createElement("sup",null,"o")),s.a.createElement("p",{className:"mx-2 text-xs"},i("Low"),s.a.createElement("sup",null,"o"))),s.a.createElement("div",{className:"".concat("flex"," flex-row justify-around sm:justify-center sm:flex sm:flex-col w-5/12 sm:w-full font-light mt-1")},s.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm"},s.a.createElement("p",{className:"text-xl text-sun mr-2",title:"sunrise"},s.a.createElement(x.a,{type:"sunrise"})),s.a.createElement("p",null,Object(p.a)(t.sunriseTime,t.timezone,"h:mm"))),s.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm"},s.a.createElement("p",{className:"text-xl text-sun mr-1",title:"sunset"},s.a.createElement(x.a,{type:"sunset"})),s.a.createElement("p",null,Object(p.a)(t.sunsetTime,t.timezone,"HH:mm"))))))},E=function(e){var t=e.Timeframe,a=Object(l.useContext)(u.a).weatherUnit,n=Object(l.useContext)(d.a).theme,r=function(e){return"F"===a?Math.round(t["".concat(e)]):Object(f.a)(t["".concat(e)])};return s.a.createElement("div",{className:"border-none flex flex-col justify-start items-center mx-3 mb-3 pt-2 w-full font-light text-".concat("light"===n?"dark":"light")},s.a.createElement("div",null,Object(b.a)(t).startsWith("wi")?s.a.createElement("p",{className:"text-5xl mt-4",title:t.summary},s.a.createElement(x.a,{type:Object(b.a)(t)})):s.a.createElement("img",{src:"./weather/".concat(Object(b.a)(t),".svg"),alt:"icon",title:t.summary,className:"w-16 h-16 object-contain"})),s.a.createElement("p",{className:"text-lg"},r("temperature"),s.a.createElement("sup",null,"o")),s.a.createElement("p",{className:"text-sm"},r("apparentTemperature"),s.a.createElement("sup",null,"o")),s.a.createElement("p",{className:"text-sm font-medium"},Object(p.a)(t.time,t.timezone,"h:mm A")))},g=a(46),y=a(106),v=a(98),j=a(102);t.a=function(e){var t=e.cityName,a=e.weatherCurrent,n=e.weatherForecast,u=Object(l.useState)(""),d=Object(c.a)(u,2),f=d[0],b=d[1],x=a.time,w=a.timezone;return Object(l.useEffect)((function(){!function(){var e;r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:Object(o.a)(a.time)||(e=Object(p.a)(x,w,"MM/DD/YYYY"),Object(m.a)(n)||Object(o.a)(n)||b(n.days[e]?e:""));case 1:case"end":return t.stop()}}))}()}),[n]),s.a.createElement(j.a,null,s.a.createElement(l.Fragment,null,Object(m.a)(n.days)||Object(m.a)(f)?s.a.createElement("div",{className:"mb-3"},Object(m.a)(n.days)?s.a.createElement(v.a,{errorMessage:"No forecast data available for this city!",showCloseBtn:!1}):s.a.createElement(g.a,{loaderText:"Fetching 7 days weather forecast for ".concat(t)})):s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:"sm:hidden pb-3"},n.timeFrames[f]?s.a.createElement(i.a,Object(y.a)("time"),n.timeFrames[f].map((function(e,t){return s.a.createElement(E,{Timeframe:e,key:t})}))):s.a.createElement(v.a,{errorMessage:"No hourly forecast available for ".concat(f)})),s.a.createElement("div",{className:"hidden sm:flex py-3 sm:mb-3"},n.timeFrames[f]?s.a.createElement(i.a,Object(y.a)("time","tablet"),n.timeFrames[f].map((function(e,t){return s.a.createElement(E,{Timeframe:e,key:t})}))):s.a.createElement(v.a,{errorMessage:"No hourly forecast available for ".concat(f)})),s.a.createElement("div",{className:"flex flex-col mt-4 sm:mt-0 sm:flex-row w-full rounded"},Object.keys(n.days).map((function(e,t){return s.a.createElement(h,{day:n.days[e],key:t,index:e,selectedIndex:f,selectedDay:function(){return function(e){b(e)}(e)}})}))))))}},175:function(e,t,a){"use strict";a.r(t);var n=a(92),r=a.n(n),c=a(110),l=a(47),s=a(1),o=a.n(s),m=a(99),i=a(115),u=a(117),d=a(112),f=a(89),b=a(170),p=a(173),x=a(114),h=a(106),E=a(13),g=a(107),y={background:"rgba(0,0,0,0.55)",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"},v=function(e){var t,a=e.favorite,n=e.favoriteSelected,r=e.index,c=e.selectedIndex,l=Object(s.useContext)(E.a),m=l.theme,i=l.colorTheme;return o.a.createElement("div",{className:"relative w-full h-16"},Object(g.b)(a.urbanArea)?o.a.createElement(s.Fragment,null,o.a.createElement("img",{src:(t=a.urbanArea,Object(g.a)(t).image).web,alt:"city",className:"h-full w-full object-cover object-center rounded-2xl"})):null,o.a.createElement("div",{className:"".concat(Object(g.b)(a.urbanArea)?"absolute top-0 left-0 right-0 bottom-0 text-light ".concat(r===c?"sm:shadow-outline":"sm:outline-none"):"h-16 text-".concat(i," bg-").concat(m," hover:bg-").concat(i," hover:text-").concat(m," border ").concat(r===c?"sm:border-teal-600":"sm:border-".concat(i))," pt-5 lg:pt-1/2 font-semibold rounded-2xl cursor-pointer text-center justify-center"),style:Object(g.b)(a.urbanArea)?y:null,onClick:n},a.address.cityName.split(", ")[0]))},j=a(46),w=a(98),O=a(8),N=a(113);t.default=function(){var e=Object(s.useContext)(m.a).favorites,t=Object(s.useContext)(E.a),a=t.theme,n=t.colorTheme,g=Object(s.useState)({}),y=Object(l.a)(g,2),k=y[0],C=y[1],S=Object(s.useState)({}),F=Object(l.a)(S,2),z=F[0],T=F[1],I=Object(s.useState)(!1),M=Object(l.a)(I,2),A=M[0],Y=M[1],D=Object(s.useState)(null),R=Object(l.a)(D,2),B=R[0],J=R[1],W=Object(s.useRef)(null),H=Object(s.useRef)(0),U=function(){return!Object(f.a)(k)&&!Object(b.a)(k)&&(!Object(f.a)(k.address.cityName)&&!Object(b.a)(k.address.cityName))},L=function(t){e[t]&&(Object(N.a)("favorites",e[t].address.cityName),C(Object(c.a)({},e[t]))),J(t)},P=function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(b.a)(k)||!Object.keys(k).length){e.next=4;break}return Y(!0),e.next=4,r.a.awrap(Object(d.a)(k).then((function(e){Object(f.a)(e)||Object(b.a)(e)||(T((function(t){return Object(c.a)({},t,{},e)})),_())})).catch((function(e){return O.a(e)})).finally((function(){return Y(!1)})));case 4:case"end":return e.stop()}}))},_=function(){var e;e=W,window.scrollTo(0,e.current.offsetTop)};return Object(s.useEffect)((function(){P(),Object(f.a)(k)||Object(b.a)(k)||(Object(b.a)(Object(p.a)(e,(function(e){return e.address.cityName===k.address.cityName})))?L(B):e.length>H.current&&L(e.length-1)),H.current=e.length;var t=setInterval((function(){P()}),36e5);return function(){clearInterval(t)}}),[k,e]),o.a.createElement(s.Fragment,null,e.length>0?o.a.createElement("div",{className:"bg-".concat(a," pt-10 pb-24 mb-0")},o.a.createElement("p",{className:"text-center font-bold text-2xl text-".concat(n)},"Favorites"),o.a.createElement("div",{className:"sm:hidden px-5 py-5"},o.a.createElement(x.a,Object.assign({},Object(h.a)("favorite"),{slideIndex:B,afterSlide:function(e){return L(e)}}),e.map((function(e,t){return o.a.createElement(v,{key:e.latlong,favorite:e,index:t,selectedIndex:B,favoriteSelected:function(){return L(t)}})})))),o.a.createElement("div",{className:"hidden sm:flex justify-center items-center"},o.a.createElement("div",{className:"sm:w-5/6 xl:max-w-6xl px-5 py-5"},o.a.createElement("div",{className:"flex sm:flex-row flex-wrap justify-center"},e.map((function(e,t){return o.a.createElement("div",{className:"m-2 sm:w-1/2 md:w-1/4",key:e.latlong},o.a.createElement(v,{key:e.latlong,favorite:e,index:t,selectedIndex:B,favoriteSelected:function(){return L(t)}}))}))))),o.a.createElement("div",{ref:W},Object(f.a)(z.weatherCurrent)||Object(b.a)(z.weatherCurrent)?o.a.createElement(s.Fragment,null,A?o.a.createElement(j.a,{loaderText:"Fetching weather forecast ".concat(U()?"for ".concat(k.address.cityName):""," \ud83d\ude0e")}):o.a.createElement("div",null,U()?o.a.createElement("div",{className:"flex justify-center"},o.a.createElement("div",{className:"sm:w-full lg:w-2/3 xl:w-1/2"},o.a.createElement(w.a,{errorMessage:"Something went wrong. Failed to fetch weather forecast ".concat(U()?"for ".concat(k.address.cityName):"","! \ud83d\ude22")}))):null)):o.a.createElement(s.Fragment,null,o.a.createElement("div",{className:"flex justify-center px-5 pt-10"},o.a.createElement("div",{className:"sm:w-full lg:w-5/6 xl:max-w-6xl border border-".concat(n," bg-{theme} text-").concat(n," rounded-t-2xl shadow-lg")},o.a.createElement(i.a,{weatherCurrent:z.weatherCurrent,address:k.address,latlong:k.latlong,urbanArea:k.urbanArea}),o.a.createElement(u.a,{cityName:k.address.cityName,weatherCurrent:z.weatherCurrent,weatherForecast:z.weatherForecast}))),o.a.createElement("p",{className:"mx-auto text-center pt-2 pb-10 text-xs font-light text-".concat(n," bg-").concat(a)},"Powered by\xa0",o.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(a),onClick:function(){return Object(N.a)("powered-by","Dark Sky")}},"Dark Sky")),o.a.createElement("div",{className:"bg-".concat(a)},k.urbanArea.slug?o.a.createElement("div",{className:"mx-auto text-center pb-5"},o.a.createElement("p",null,o.a.createElement("a",{href:"https://teleport.org/cities/".concat(k.urbanArea.slug),target:"_blank",rel:"noreferrer noopener",className:"hover:no-underline",onClick:function(){return Object(N.a)("explore-life",k.urbanArea.name)}},o.a.createElement("button",{className:"bg-".concat(n," text-").concat(a," font-semibold py-3 px-6 rounded-full capitalize")},"Explore life in ",k.urbanArea.name))),o.a.createElement("p",{className:"py-1 text-xs font-light text-".concat(n)},"Powered by\xa0",o.a.createElement("a",{href:"https://teleport.org/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(a),onClick:function(){return Object(N.a)("powered-by","Teleport")}},"Teleport"))):null)))):null)}},93:function(e,t,a){"use strict";var n=a(30),r=a.n(n);t.a=function(e,t,a){return r.a.tz(1e3*e,t).format(a)}},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return Math.round(5*(e-32)/9)}},96:function(e,t,a){"use strict";var n=a(30),r=a.n(n);t.a=function(e){var t=e.icon,a=e.timezone,n=r()().tz(a).format("H"),c=n>=6&&n<18?"day":"night";if(t)switch(t){case"clear-day":return"day";case"clear-night":return"night";case"rain":return"".concat(c,"-rain");case"snow":return"".concat(c,"-snow");case"sleet":return"sleet";case"wind":return"wi-".concat(c,"-windy");case"fog":return"wi-".concat(c,"-fog");case"cloudy":return"cloudy";case"partly-cloudy-day":return"day-cloudy";case"partly-cloudy-night":return"night-cloudy";case"hail":return"hail";case"thunderstorm":return"thunder";case"tornado":return"wi-tornado";default:return"wi-na"}return"wi-na"}},97:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(130);t.a=function(e){var t=e.type;return{"wi-day-fog":r.a.createElement(c.b,null),"wi-night-fog":r.a.createElement(c.m,null),"wi-day-windy":r.a.createElement(c.a,null),"wi-night-windy":r.a.createElement(c.l,null),"wi-tornado":r.a.createElement(c.p,null),"wi-na":r.a.createElement(c.k,null),up:r.a.createElement(c.h,null),"up-right":r.a.createElement(c.j,null),right:r.a.createElement(c.g,null),"down-right":r.a.createElement(c.e,null),down:r.a.createElement(c.c,null),"down-left":r.a.createElement(c.d,null),left:r.a.createElement(c.f,null),"up-left":r.a.createElement(c.i,null),sunrise:r.a.createElement(c.n,null),sunset:r.a.createElement(c.o,null)}[t]||r.a.createElement(c.k,null)}}}]);
//# sourceMappingURL=5.606e1a6e.chunk.js.map