(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(12),i=s.n(a),r=(s(51),s(52),s(53),"https://k9lvn.github.io/spotify_clone/"),l="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("bd28a5b8d6744af2b8c5b8b4e7b2a0f0","&redirect_uri=").concat(r,"&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state","streaming","user-read-email","user-read-private","user-library-read","user-library-modify"].join("%20"),"&response_type=token&show_dialog=true"),o=s(1);var j=function(){return console.log(r),Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("img",{src:"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png",alt:"",className:"logo"}),Object(o.jsx)("a",{href:l,children:"LOGIN WITH SPOTIFY"})]})},d=(s(55),s(56),s(13)),u=s.n(d),b=s(83),O=s(44),h=s(4),m={token:"",user:null,playlists:null,playing:null,firstPlaylist:null,lastPlayedTrack:null,premium:!1},p=function(e,t){switch(console.log("reducer",t),t.type){case"SET_USER":return Object(h.a)(Object(h.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(h.a)(Object(h.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(h.a)(Object(h.a)({},e),{},{playlists:t.playlists});case"SET_FIRST_PLAYLIST":return Object(h.a)(Object(h.a)({},e),{},{firstPlaylist:t.firstPlaylist});case"SET_LAST_PLAYED_TRACK":return Object(h.a)(Object(h.a)({},e),{},{lastPlayedTrack:t.lastPlayedTrack});case"SET_PREMIUM":return Object(h.a)(Object(h.a)({},e),{},{lastPlayedTrack:t.premium});default:return console.log("nothing"),e}},f=p,x=Object(c.createContext)({}),y=function(e){var t=Object(c.useReducer)(p,m),s=Object(O.a)(t,2),n={state:s[0],dispatch:s[1]};return Object(o.jsx)(x.Provider,{value:n,children:e.children})},_=function(){return Object(c.useContext)(x)},v=null;var g=function(){var e,t=_(),s=t.state,c=(t.dispatch,s.user);return Object(o.jsxs)("div",{className:"header",ref:function(e){v=e},children:[Object(o.jsxs)("div",{className:"header__left",children:[Object(o.jsx)(u.a,{}),Object(o.jsx)("input",{type:"text",placeholder:"Search"})]}),Object(o.jsx)("div",{className:"header__right",children:c&&Object(o.jsxs)(o.Fragment,{children:[c.images&&Object(o.jsx)(b.a,{src:null===c||void 0===c||null===(e=c.images[0])||void 0===e?void 0:e.url,alt:null===c||void 0===c?void 0:c.display_name}),Object(o.jsx)("h4",{children:null===c||void 0===c?void 0:c.display_name})]})})]})},T=s(29),S=s.n(T),P=s(30),k=s.n(P),N=s(31),E=s.n(N);s(62);var I=function(e){var t,s,c,n=e.track,a=_(),i=(a.state,a.dispatch);return n&&Object(o.jsxs)("div",{className:"songRow",onClick:function(){i({type:"SET_LAST_PLAYED_TRACK",lastPlayedTrack:n})},children:[Object(o.jsx)("img",{src:null===(t=n.album)||void 0===t||null===(s=t.images[0])||void 0===s?void 0:s.url,alt:n.name,className:"songRow__album"}),Object(o.jsxs)("div",{className:"songRow__info",children:[Object(o.jsx)("h1",{children:n.name}),Object(o.jsxs)("p",{children:[n.artists.map((function(e){return e.name})).join(", ")," -"," ",null===(c=n.album)||void 0===c?void 0:c.name]})]})]})};var L=function(){var e,t=_(),s=t.state,n=(t.dispatch,s.firstPlaylist);return Object(c.useEffect)((function(){v&&v.scrollIntoView()}),[n]),Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)(g,{}),n&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"body__info",children:[Object(o.jsx)("img",{src:null===(e=n.images[0])||void 0===e?void 0:e.url,alt:"discoverweekly"}),Object(o.jsxs)("div",{className:"body__infoText",children:[Object(o.jsx)("strong",{children:"PLAYLIST"}),Object(o.jsx)("h2",{children:n.name}),Object(o.jsx)("p",{children:n.description})]})]}),Object(o.jsxs)("div",{className:"body__songs",children:[Object(o.jsxs)("div",{className:"body__icons",children:[Object(o.jsx)(S.a,{className:"body__shuffle"}),Object(o.jsx)(k.a,{}),Object(o.jsx)(E.a,{})]}),n.tracks.items.map((function(e){return Object(o.jsx)(I,{track:e.track},e.track.id)}))]})]})]})},w=(s(63),s(43));var A=function(){var e=_(),t=e.state,s=(e.dispatch,t.lastPlayedTrack);return Object(o.jsxs)("div",{className:"footer",children:[s&&Object(o.jsxs)("div",{className:"footer__left",children:[Object(o.jsx)("img",{src:s.album.images[0].url,alt:"",className:"footer__albumLogo"}),Object(o.jsxs)("div",{className:"footer__songInfo",children:[Object(o.jsx)("h4",{children:s.name}),Object(o.jsx)("p",{children:s.artists.map((function(e){return e.name})).join(", ")})]})]}),Object(o.jsx)("div",{className:"footer__center",children:Object(o.jsx)("div",{className:"footer__centerIcons",children:t.premium?Object(o.jsx)(w.a,{token:t.token,styles:{bgColor:"#282828",color:"white"}}):Object(o.jsx)("p",{style:{textAlign:"center",minWidth:"200px"},children:"Can't play songs because you don't have premium :c"})})}),Object(o.jsx)("div",{className:"footer__right"})]})};s(65),s(66),s(67);var R=function(e){var t=e.title,s=e.Icon,c=e.onClickHandler,n=e.playlistID;return c?Object(o.jsxs)("div",{className:"sidebarOption",onClick:function(e){return c(n)},children:[s&&Object(o.jsx)(s,{className:"sidebarOption__icon"}),s?Object(o.jsx)("h4",{children:t}):Object(o.jsx)("p",{children:t})]}):Object(o.jsxs)("div",{className:"sidebarOption",children:[s&&Object(o.jsx)(s,{className:"sidebarOption__icon"}),s?Object(o.jsx)("h4",{children:t}):Object(o.jsx)("p",{children:t})]})},C=s(40),Y=s.n(C),F=s(41),M=s.n(F);var U=function(){var e,t=_(),s=t.state,c=t.dispatch,n=s.playlists,a=function(e){H.getPlaylist(e).then((function(e){c({type:"SET_FIRST_PLAYLIST",firstPlaylist:e})}))};return Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsx)("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:"",className:"sidebar__logo"}),Object(o.jsx)(R,{title:"Home",Icon:Y.a}),Object(o.jsx)(R,{title:"Search",Icon:u.a}),Object(o.jsx)(R,{title:"Your Library",Icon:M.a}),Object(o.jsx)("br",{}),Object(o.jsx)("strong",{className:"sidebar__playlistTitle",children:"PLAYLISTS"}),Object(o.jsx)("hr",{}),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return Object(o.jsx)(R,{title:e.name,playlistID:e.id,onClickHandler:a},e.id)}))]})};var D=function(e){return Object(o.jsxs)("div",{className:"player",children:[Object(o.jsxs)("div",{className:"player__body",children:[Object(o.jsx)(U,{}),Object(o.jsx)(L,{})]}),Object(o.jsx)(A,{})]})},K=s(42),H=new(s.n(K).a);var W=function(){var e=_(),t=e.state,s=e.dispatch,n=t.token;return Object(c.useEffect)((function(){var e=function(){var e=window.location.hash.substring(1);return new URLSearchParams(e).get("access_token")}();window.location.hash="",e&&(H.setAccessToken(e),s({type:"SET_TOKEN",token:e}),H.getMe().then((function(e){s({type:"SET_USER",user:e}),"premium"===e.product?s({type:"SET_PREMIUM",premium:!0}):s({type:"SET_PREMIUM",premium:!1})})),H.getUserPlaylists().then((function(e){s({type:"SET_PLAYLISTS",playlists:e});var t=e.items[0].id;H.getPlaylist(t).then((function(e){s({type:"SET_FIRST_PLAYLIST",firstPlaylist:e})}))})),H.getMyRecentlyPlayedTracks().then((function(e){var t=e.items[0].track;s({type:"SET_LAST_PLAYED_TRACK",lastPlayedTrack:t})})))}),[]),Object(o.jsx)("div",{className:"App",children:n?Object(o.jsx)(D,{spotifyObj:H}):Object(o.jsx)(j,{})})},B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,84)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(y,{initialState:m,reducer:f,children:Object(o.jsx)(W,{})})}),document.getElementById("root")),B()}},[[69,1,2]]]);
//# sourceMappingURL=main.1d57029c.chunk.js.map