(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(15),r=t.n(s),c=t(41),o=t(42),m=t(43),i=t(50),d=t(44),u=t(51),g=t(18),p=t.n(g),h=(t(14),t(8)),f=t.n(h),E=t(45),y=t.n(E),v=function(e){return n.a.createElement("div",{className:"resultsContainer"},n.a.createElement(f.a,null,n.a.createElement(y.a,{responsive:!0,className:"dataTable"},n.a.createElement("tr",{className:"mainRow"},n.a.createElement("th",null,"Points"),n.a.createElement("th",null,"Rebounds"),n.a.createElement("th",null,"Assists")),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"subRow"},n.a.createElement("td",null," ",e.points),n.a.createElement("td",null,"  ",e.rebounds),n.a.createElement("td",null," ",e.assists))),n.a.createElement("tr",{className:"mainRow"},n.a.createElement("th",null,"Steals"),n.a.createElement("th",null,"Blocks"),n.a.createElement("th",null,"Turn Overs")),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"subRow"},n.a.createElement("td",null," ",e.steals),n.a.createElement("td",null,"  ",e.blocks),n.a.createElement("td",null," ",e.turnovers))),n.a.createElement("tr",{className:"mainRow"},n.a.createElement("th",null,"Freethrow Attempts"),n.a.createElement("th",null,"Freethrow Made"),n.a.createElement("th",null,"Freethrow %")),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"subRow"},n.a.createElement("td",null," ",e.freethrowAttempt),n.a.createElement("td",null," ",e.freethrowMade),n.a.createElement("td",null," ",e.freethrowPrcnt))),n.a.createElement("tr",{className:"mainRow"},n.a.createElement("th",null,"Fieldgoals Attempts"),n.a.createElement("th",null,"Fieldgoals Made"),n.a.createElement("th",null,"Fieldgoal %")),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"subRow"},n.a.createElement("td",null," ",e.fgAttempts),n.a.createElement("td",null," ",e.fgMade),n.a.createElement("td",null," ",e.fgPrcnt))),n.a.createElement("tr",{className:"mainRow"},n.a.createElement("th",null," 3-point Attempts"),n.a.createElement("th",null,"3-pointers Mader"),n.a.createElement("th",null,"3-point %")),n.a.createElement("tbody",null,n.a.createElement("tr",{className:"subRow"},n.a.createElement("td",null," ",e.fg3attempts),n.a.createElement("td",null," ",e.fg3made),n.a.createElement("td",null," ",e.fg3prcnt))))),n.a.createElement("div",null,e.season,e.averageMins,e.gamesPlayed))},b=t(16),w=t.n(b),N=t(13),P=t.n(N),A=function(e){return n.a.createElement("div",{className:"imageResults"},n.a.createElement(f.a,{className:"justify-content-md-center"},n.a.createElement(P.a,{md:"auto"},n.a.createElement("h2",{className:"playerName"},e.name),n.a.createElement("div",null,n.a.createElement(w.a,{src:e.playerImage,className:"image",fluid:!0,style:{}})),n.a.createElement("h2",{className:"playerTeam"},e.team)),n.a.createElement("div",{className:"basic",style:{textAlign:"center"}},n.a.createElement("div",{className:"basicInfo"}))))},S=t(49),M=t.n(S),x=t(21),k=t.n(x),R=t(22),C=t.n(R),I=t(48),j=t.n(I),_=t(46),B=t.n(_),F=t(47),O=t.n(F),T=function(e){function a(){var e,t;Object(o.a)(this,a);for(var l=arguments.length,n=new Array(l),s=0;s<l;s++)n[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(n)))).state={searchPlayer:"",imageCard:"",player:"",playerPosition:"",playerHeight:"",playerTeam:"",season:"",mins:"",gamesPlayed:"",points:"",rebounds:"",assists:"",blocks:"",steals:"",turnovers:"",ftA:"",ftM:"",ftPcnt:"",fgA:"",fgM:"",fgPcnt:"",fg3A:"",fg3M:"",fg3Pcnt:"",displayStats:!1,displayImage:!1,displayBasic:!1,displayWelcome:!0},t.handleChange=function(e){var a=e.target.value,l=e.target.name;t.setState(Object(c.a)({},l,a))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state.searchPlayer),t.setState({displayStats:!0,displayImage:!0});var a=t.state.searchPlayer,l=" https://www.balldontlie.io/api/v1/players?search="+a;p.a.get(l).then(function(e){console.log(e);var a=e.data.data[0].id,l=e.data.data[0].position,n=e.data.data[0].first_name+" "+e.data.data[0].last_name,s=e.data.data[0].height_feet+" "+e.data.data[0].height_inches,r=e.data.data[0].team.full_name;console.log("player name: ".concat(n,", position: ").concat(l,", player height: ").concat(s,", player team: ").concat(r));var c=" https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]="+a;p.a.get(c).then(function(e){console.log(e.data.data[0]);var a=e.data.data[0].season,l=e.data.data[0].games_played,n=e.data.data[0].min;console.log("season: ".concat(a,", games played: ").concat(l,", average minutes: ").concat(n));var s=e.data.data[0].pts,r=e.data.data[0].reb,c=e.data.data[0].ast;console.log("average points: ".concat(s,", average rebounds: ").concat(r,", average assists: ").concat(c));var o=e.data.data[0].stl,m=e.data.data[0].blk,i=e.data.data[0].turnover;console.log("average steals: ".concat(o,", average blocks: ").concat(m,", average turnovers: ").concat(i));var d=e.data.data[0].fta,u=e.data.data[0].ftm,g=e.data.data[0].ft_pct;console.log("freethrow attempts: ".concat(d,", freethrows made: ").concat(u,", freethrow average: ").concat(g," "));var p=e.data.data[0].fga,h=e.data.data[0].fgm,f=e.data.data[0].fg_pct;console.log("feildgoal attempts: ".concat(p,", feildgoals made: ").concat(h,", fieldgoal average: ").concat(f," "));var E=e.data.data[0].fg3a,y=e.data.data[0].fg3m,v=e.data.data[0].fg3_pct;console.log("3 point attempts: ".concat(E,", 3 pointers made: ").concat(y,", 3 pointer average: ").concat(v)),t.setState({season:a,mins:n,gamesPlayed:l,points:s,rebounds:r,assists:c,blocks:m,steals:o,turnovers:i,ftA:d,ftM:u,ftPcnt:g,fgA:p,fgM:h,fgPcnt:f,fg3A:E,fg3M:y,fg3Pcnt:v})}),t.setState({player:n,playerPosition:l,playerHeight:s,playerTeam:r})});var n="https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q="+a+"&safeSearch=false";p.a.get(n,{headers:{"X-RapidAPI-Host":"contextualwebsearch-websearch-v1.p.rapidapi.com","X-RapidAPI-Key":"vvGe6mgKVamsh6lwgjlpLJnxM7oKp1qiE7OjsnFW2o2Lpl9caf"}}).then(function(e){console.log(e),console.log(e.data.value[0].url);var a=e.data.value[0].url;t.setState({imageCard:a,displayWelcome:!1})})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(k.a,{expand:"lg",style:{backgroundColor:"",marginTop:"0px"}},n.a.createElement(k.a.Brand,{style:{margin:"0px"}},n.a.createElement(w.a,{fluid:!0,src:B.a,alt:"NBA Stats",className:"logo",style:{margin:"0px",backgroundColor:"",height:"130px"}})),n.a.createElement(C.a,{inline:!0,onSubmit:this.handleSubmit,style:{marginBottom:"10px"}},n.a.createElement(C.a.Control,{placeholder:"Player Name",type:"text",name:"searchPlayer",className:"playForm",value:this.state.searchPlayer,onChange:this.handleChange}),n.a.createElement(j.a,{type:"submit",value:"Submit",className:"sub"},"Submit")))),n.a.createElement(M.a,{className:"headerBg"},n.a.createElement(f.a,{className:"justify-content-md-center"},n.a.createElement("div",null,this.state.displayWelcome?n.a.createElement("div",null,n.a.createElement("img",{src:O.a,style:{height:"300px",width:"300px"}}),n.a.createElement("h1",null,"Weclome to NBA Stats")):null),n.a.createElement("div",null,this.state.displayImage?n.a.createElement(A,{playerImage:this.state.imageCard,name:this.state.player,height:this.state.playerHeight,position:this.state.playerPosition,team:this.state.playerTeam}):null),n.a.createElement("div",{className:"data"},this.state.displayStats?n.a.createElement(v,{points:this.state.points,rebounds:this.state.rebounds,assists:this.state.assists,steals:this.state.steals,blocks:this.state.blocks,turnovers:this.state.turnovers,freethrowAttempt:this.state.ftA,freethrowMade:this.state.ftM,freethrowPrcnt:this.state.ftPcnt,fgAttempts:this.state.fgA,fgMade:this.state.fgM,fgPcnt:this.state.fgPrcnt,fg3attempts:this.state.fg3A,fg3made:this.state.fg3M,fg3prcnt:this.state.fg3Pcnt}):null)),n.a.createElement(f.a,{className:"justify-content-md-center"},n.a.createElement("footer",{className:"footer"}," Ian kimble \xa9 2019"))))}}]),a}(n.a.Component),W=function(){return n.a.createElement("div",{style:{textAlign:"center"},className:"mainBg"},n.a.createElement(T,null))};r.a.render(n.a.createElement(W,null),document.getElementById("root"))},14:function(e,a,t){},46:function(e,a,t){e.exports=t.p+"static/media/nbasl.760515c3.png"},47:function(e,a,t){e.exports=t.p+"static/media/landing.a95a748c.png"},52:function(e,a,t){e.exports=t(100)}},[[52,1,2]]]);
//# sourceMappingURL=main.497c842b.chunk.js.map