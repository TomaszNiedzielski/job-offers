(this.webpackJsonpjobs=this.webpackJsonpjobs||[]).push([[0],{194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),o=(a(80),a(3)),c=a(4),s=a(6),p=a(5),m=(a(81),a(16)),d=a(15),u=a(36),f=a.n(u),g=a(37),h=a.n(g),A=a(38),E=a.n(A),b=function(e){var t=Object(d.c)((function(e){return e}));return r.a.createElement("div",{className:"offers-list"},t.length>0?t.map((function(e){var t=e.company,a=e.salary,n=(e.description,e.title);return r.a.createElement(m.b,{key:e.id,to:"/offers/?id="+e.id,className:"offer-item__link"},r.a.createElement("div",{className:"offer-item"},r.a.createElement("img",{className:"offer-item__company-logo",src:t.logo,alt:"company logo"}),r.a.createElement("div",{className:"offer-item__content"},r.a.createElement("div",{className:"offer-item__title"},n),r.a.createElement("div",{className:"offer-item__details"},r.a.createElement("div",null,r.a.createElement("div",{className:"offer-item__details__row"},r.a.createElement("img",{src:f.a}),"\xa0",r.a.createElement("span",null,t.name)),r.a.createElement("div",{className:"offer-item__details__row"},r.a.createElement("img",{src:h.a}),"\xa0",r.a.createElement("span",null,t.location))),r.a.createElement("div",{className:"offer-item__details__row"},r.a.createElement("img",{src:E.a}),"\xa0",r.a.createElement("span",null,a.from+" PLN"),r.a.createElement("span",null," - "+a.to+" PLN"))))))})):"No offers yet.")},y=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(b,null))}}]),a}(r.a.Component),v=a(74),w=(a(87),"linear-gradient(90deg, rgba(254,140,0,1) 0%, rgba(248,54,0,1) 77%)"),S=(r.a.Component,{container:{background:w,height:"200px",width:"100%",position:"absolute",top:"58px",zIndex:-1,left:0}}),O=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.salary,n=e.company;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"offer-details-header"},r.a.createElement("div",{className:"offer-details-header__icon-wrapper"},r.a.createElement("img",{className:"offer-details-header__icon",src:n.logo,alt:"company icon"})),r.a.createElement("div",{className:"offer-details-header__right-column"},r.a.createElement("div",{className:"offer-details-header__title"},t),r.a.createElement("div",{className:"offer-details-header__content"},r.a.createElement("div",{className:"offer-details-header__content-row"},r.a.createElement("img",{src:f.a}),"\xa0",n.name),r.a.createElement("div",{className:"offer-details-header__content-row"},r.a.createElement("img",{src:h.a}),"\xa0",n.location),r.a.createElement("div",{className:"offer-details-header__content-row"},r.a.createElement("img",{src:E.a}),"\xa0",a.from+" PLN - "+a.to+" PLN")))))}}]),a}(r.a.Component),C=a(14),x=(a(88),function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.placeholder,l=t.error;return r.a.createElement("div",{style:j.wrapper},r.a.createElement("div",{style:j.inputField},r.a.createElement("div",{style:j.inputLabel},a),r.a.createElement("input",{type:"text",style:j.input,placeholder:n,onChange:function(t){return e.props.handleChange(t.target.value)},value:this.props.value?this.props.value:""})),l&&r.a.createElement("div",{style:j.error},"To pole nie mo\u017ce by\u0107 puste."))}}]),a}(r.a.Component)),j={wrapper:{margin:"20px 0px",width:"100%"},inputField:{position:"relative",width:"100%",display:"flex",justifyContent:"center"},inputLabel:{position:"absolute",fontSize:"12px",top:"-8px",left:"45px",background:"white",padding:"0px 6px",color:"gray"},input:{border:"1px solid #ccc",borderRadius:"50px",width:"100%",outline:"none",fontSize:"17px",padding:"13px"},error:{color:"red",fontSize:"14px"}},N=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{onClick:function(){return e.props.handleOnClick()},style:k.button},this.props.title)}}]),a}(r.a.Component),k={button:{padding:"10px 30px",borderRadius:"20px",border:"none",fontSize:"18px",fontWeight:"bold",color:"white",background:w}},B=a(39),I=a.n(B),F=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={cv:null},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.cv;return r.a.createElement(I.a,{fileTypes:[".pdf"],base64:!0,handleFiles:function(t){return e.setState({cv:t.fileList[0].name})}},r.a.createElement("div",{className:"input-field"},r.a.createElement("div",{className:"input-label"},"CV"),r.a.createElement("label",{className:"file-input-label"},r.a.createElement("div",null,t||r.a.createElement("span",{style:{color:"#ccc"}},"only .pdf file")))))}}]),a}(r.a.Component),D=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).apply=n.apply.bind(Object(C.a)(n)),n.state={name:null,email:null,cv:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email;t.cv;return r.a.createElement("div",{className:"apply-form"},r.a.createElement("div",{className:"apply-form__content"},r.a.createElement("h1",{style:{textAlign:"center"}},"Apply for this job"),r.a.createElement(x,{value:a,title:"first & last name",handleChange:function(t){return e.setState({name:t})}}),r.a.createElement(x,{value:n,title:"Email",handleChange:function(t){return e.setState({email:t})}}),r.a.createElement(F,null),r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end",alignSelf:"center",marginBottom:"30px"}},r.a.createElement(N,{title:"Apply",handleOnClick:this.apply}))))}},{key:"apply",value:function(){var e=this.state;e.name,e.email;this.setState({name:null,email:null})}}]),a}(r.a.Component),U=function(e){var t=Object(n.useState)(),a=Object(v.a)(t,2),l=a[0],i=a[1],o=Object(d.c)((function(e){return e.find((function(e){return e.id===l}))}));if(Object(n.useEffect)((function(){var e=window.location.href,t=(e=e.split("="))[e.length-1];i(t)}),[]),o){var c=o.title,s=o.salary,p=o.company,m=o.description;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column"}},r.a.createElement(O,{title:c,salary:s,company:p}),r.a.createElement("article",{style:{width:"80%",marginLeft:"auto",marginRight:"auto"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}})),r.a.createElement(D,null)))}return null},z=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleFiles=function(e){n.setState({img:e.base64}),n.props.handleChange(e.base64)},n.handleFiles=n.handleFiles.bind(Object(C.a)(n)),n.state={img:null},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.img;return r.a.createElement(I.a,{base64:!0,handleFiles:this.handleFiles},r.a.createElement("div",{style:L.container},e?r.a.createElement("img",{src:this.state.img,alt:"image",style:L.img}):r.a.createElement("span",null,"Upload logo")))}}]),a}(r.a.Component),L={container:{width:"200px",height:"200px",border:"1px solid #ccc",display:"flex",justifyContent:"center",alignItems:"center",color:"#ccc",fontSize:"20px",fontWeight:"bold",cursor:"pointer"},img:{width:"100%",height:"100%",objectFit:"contain"}},_=a(73),R=a.n(_),W=(a(193),function(e){return{type:"ADD_OFFER",payload:e}}),Y=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(C.a)(n)),n.isDataCorrect=n.isDataCorrect.bind(Object(C.a)(n)),n.state={companyName:null,companyWebsite:null,title:null,salaryFrom:null,salaryTo:null,location:null,logo:null,description:null,companyNameError:!1,companyWebsiteError:!1,titleError:!1,salaryFromError:!1,salaryToError:!1,locationError:!1,logoError:!1,descriptionError:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.companyName,n=t.companyWebsite,l=t.title,i=t.salaryFrom,o=t.salaryTo,c=t.location,s=(t.logo,t.description,t.companyNameError),p=t.companyWebsiteError,m=t.titleError,d=t.salaryFromError,u=t.salaryToError,f=t.locationError,g=t.logoError,h=t.descriptionError;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{background:"white",display:"flex",flexDirection:"column",padding:"20px",justifyContent:"center",alignItems:"center",borderRadius:"20px",border:"1px solid #ccc",marginBottom:"200px",marginTop:"50px"}},r.a.createElement(z,{handleChange:function(t){return e.setState({logo:t})}}),g&&r.a.createElement("div",{style:{color:"red",fontSize:"14px"}},"To pole nie mo\u017ce by\u0107 puste."),r.a.createElement(x,{title:"Company name *",placeholder:"np. Medical Center",handleChange:function(t){return e.setState({companyName:t})},value:a,error:s}),r.a.createElement(x,{title:"Company website *",placeholder:"np. www.medicalcenter.com",handleChange:function(t){return e.setState({companyWebsite:t})},value:n,error:p}),r.a.createElement(x,{title:"Title *",placeholder:"np. Internist urologist",handleChange:function(t){return e.setState({title:t})},value:l,error:m}),r.a.createElement("div",{style:T.inputsWrapper},r.a.createElement("div",{style:T.salaryInput},r.a.createElement(x,{title:"Salary from (PLN) *",placeholder:"np. 10000",handleChange:function(t){return e.setState({salaryFrom:t})},value:i,error:d})),r.a.createElement("div",{style:T.salaryInput},r.a.createElement(x,{title:"Salary to (PLN) *",placeholder:"np. 12000",handleChange:function(t){return e.setState({salaryTo:t})},value:o,error:u}))),r.a.createElement(x,{title:"Location *",placeholder:"np. Warsaw, Poland",handleChange:function(t){return e.setState({location:t})},value:c,error:f}),r.a.createElement("h3",null,"Description *"),r.a.createElement(R.a,{theme:"snow",value:this.state.description,onChange:function(t){return e.setState({description:t})},style:T.textEditor}),h&&r.a.createElement("div",{style:{color:"red",fontSize:"14px"}},"To pole nie mo\u017ce by\u0107 puste."),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(N,{title:"Add Offer",handleOnClick:this.handleSubmit}))))}},{key:"handleSubmit",value:function(){var e=this.state,t=e.companyName,a=e.companyWebsite,n=e.title,r=e.salaryFrom,l=e.salaryTo,i=e.location,o=e.logo,c=e.description;if(!1!==this.isDataCorrect()){var s={id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),title:n,description:c,company:{name:t,website:a,location:i,logo:o},salary:{from:r,to:l}};this.props.addOffer(s),window.location.href="/job-offers"}}},{key:"isDataCorrect",value:function(){var e,t=this.state,a=t.companyName,n=t.companyWebsite,r=t.title,l=t.salaryFrom,i=t.salaryTo,o=t.location,c=t.logo,s=t.description;return a?this.setState({companyNameError:!1}):(this.setState({companyNameError:!0}),e=!0),n?this.setState({companyWebsiteError:!1}):(this.setState({companyWebsiteError:!0}),e=!0),r?this.setState({titleError:!1}):(this.setState({titleError:!0}),e=!0),l?this.setState({salaryFromError:!1}):(this.setState({salaryFromError:!0}),e=!0),i?this.setState({salaryToError:!1}):(this.setState({salaryToError:!0}),e=!0),o?this.setState({locationError:!1}):(this.setState({locationError:!0}),e=!0),c?this.setState({logoError:!1}):(this.setState({logoError:!0}),e=!0),s?this.setState({descriptionError:!1}):(this.setState({descriptionError:!0}),e=!0),!0!==e}}]),a}(r.a.Component),T={inputsWrapper:{display:"flex",width:"100%",justifyContent:"space-between",flexWrap:"wrap",alignItems:"center"},textEditor:{width:"100%"},salaryInput:{width:"47%",minWidth:"180px",margin:"0px auto"}},V=Object(d.b)((function(){return{}}),{addOffer:W})(Y),K=(a(194),function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement(m.b,{to:"/",className:"navbar__title"},"Job Offers"),r.a.createElement(m.b,{to:"/add-offer",style:Q.button},r.a.createElement("span",null,"Post a job")))}}]),a}(r.a.Component)),Q={button:{background:w,borderRadius:"20px",padding:"10px 20px",color:"white",fontWeight:"bold"}},H=a(2);var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{basename:"job-offers"},r.a.createElement(K,null),r.a.createElement(H.c,null,r.a.createElement(H.a,{exact:!0,path:"/",component:y}),r.a.createElement(H.a,{path:"/offers",component:U}),r.a.createElement(H.a,{path:"/add-offer",component:V}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=[{id:"4jrng45jgr",title:"IOS Developer",description:"<p><strong>For our mobile communication apps. we\u2019re looking for an experienced mobile developer with the following required skillset:</strong></p><p><br></p><ul><li>3+ years of professional experience in iOS native development.</li><li>Strong knowledge iOS SDK, different versions of iOS, and how to deal with different screen sizes and popular third-party libraries</li><li>Strong understanding of mobile development life cycle, mobile technologies, and architecture.</li><li>Proven experience integrating with mobile platform functionality: Address book, vocoder, etc.</li><li>Track record of deploying stable applications to the applicable application platforms (app Store/ TestFlight).</li><li>Strong background in SW development methodologies: Source control (git), issue tracking.</li></ul><p><br></p><p><strong>Advantageous skillset:</strong></p><p><br></p><ul><li>Integrating external libraries into native environment.</li><li>Experience with iOS UI design principles, patterns</li><li>Familiarity with signaling protocols and methodologies (SIP/MQTT/etc.)</li></ul><p><br></p><p><strong>On top of the technical requirements above, we should add the following skills for all positions:</strong></p><p><br></p><ul><li>Strong communication skills</li><li>Strong documentation skills</li><li>Strong team player</li><li>Ability to work with teams in different geographical locations</li></ul><p><br></p>",created_at:"2020-09-15 14:12:01",company:{name:"Apple",website:"www.apple.com",location:"California, United States",logo:"https://yt3.ggpht.com/a/AATXAJzLJovKyZ7JLdndJ5foqqFL-Xt8Zm28UtEuFRW2Gg=s900-c-k-c0xffffffff-no-rj-mo"},salary:{from:2e4,to:25e3}},{id:"Df43gdf3",title:"Senior C# developer",description:"<p><strong>Job description:</strong></p><p><br></p><ul><li>Design and implementation of front-end and back-end</li><li>Develop software applications from concept to deployment and testing.</li><li>Work closely with user during the life-cycle of the project.</li><li>Cooperate closely with client developers as a single SCRUM team.</li></ul><p><br></p><p><strong>Requirements:</strong></p><p><br></p><ul><li>C# experience (.NET ecosystem)&nbsp;</li><li>Angular (version 5 or higher)&nbsp;</li><li>MS SQL (Entity Framework) and database architecture.</li><li>Web API</li><li>TypeScript and JavaScript experience.</li><li>Written and spoken English skills</li><li>Basic version control (e.g. GIT, SVN).</li><li>Self-motivation, communication skills and ability to work remotely are essential.</li></ul><p><br></p><p><strong>We offer:</strong></p><p><br></p><ul><li>Salaries comparable to Western European level.</li><li>Home-office work style.</li><li>Possibility to negotiate working times and cooperation type.</li></ul><p><br></p><p><strong>Nice to have:</strong></p><p><br></p><ul><li>.Net desktop development</li><li>AWS</li><li>Swift Mac development&nbsp;</li><li>JIRA</li></ul><p><br></p>",created_at:"2020-09-16 15:12:01",company:{name:"Online World",website:"www.online-world.com",location:"/london, England",logo:"https://yellowbrickstudiousa.com/wp-content/uploads/2014/05/Online-World.jpg"},salary:{from:3e4,to:5e4}}],X=localStorage.getItem("offers");X&&(X=JSON.parse(X),console.log(X),J=X.concat(J),console.log(J)),console.log(J);var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_OFFER":e.unshift(t.payload);var a=[],n=localStorage.getItem("offers");return n?(a=n=JSON.parse(n)).unshift(t.payload):a.unshift(t.payload),localStorage.setItem("offers",JSON.stringify(a)),e;default:return e}},M=a(35),Z=Object(M.b)(q);i.a.render(r.a.createElement(d.a,{store:Z},r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGVSURBVEiJ7dU9a1RREMbx36waVguz4Au+oLG3cUtLP4C1CVrYCoK1YCOE2PoBLFRsDEQkgmAvSDDEIgmINnYWBgsV41u8FjtXrnfPShDSSAammf+Zec55zuXcqKrKVkZnS6dvC/yTQESciIgjhfrZiJiNiLmImCzwwxExMaRQVZX8ksZxHz/wDfcwluwyqlZeT9bFHXzN3gfo/Z7bECgNOYc9+Fxg33EAkwV2pSSwUFj4CP1Cvc4zmC/Un9dzm3fwYsg/FvE6LSvFSyyN6BtE4wT9PHa9iw84nmyusMunyY5hvVFfR3/Iolx8FNO4qnlR7E6RDfzEE4w3+H5cy96Df8xsfAnTebT3WEtvL7Y20MO+Vu18rl3L3sWc1a3fuW762LbgC05jB6ZwC88yb+MCduIUPhb6l3K2mQKs0qZdmB3BKzzEGC6N4DOwWgBvc3c3/jK8zpsIvCqwVXlxbTCf/q1sQuBNrr1bYBsd5QdvOSJ6OFlg7ZjIN2i5wDqBQwXwycDbx5sQYPCkvMPeNojtX+b/L/ALsxogWKNYgewAAAAASUVORK5CYII="},37:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFxSURBVEiJnZUvbkJBEIe/JSQgOEErwZIaisPVVCAwHKKOhGNQzwG4QQUnAAUhRZEKkLU4DDAVDMljuv9gk0nevvnN79uX3Z3nRITYcM61gHegpQGw0JiKyCJqICLeAKrAJ3ACJBAn1VSDPgHzBrCJGNvYAI0sAFAC5neYX2MOlHIAQ0/xEZgAHxoTfWd1wygAqAEHU/QLtD0LaWuuqD0AtRig41lVN3IQuh59p6gpmUP1auZbEfkiMDS3jXlYwIuZf4fMI5obDwvYm/lzBsBqbjws4Meuxjn3FHLWnP3qWw+zaU3+b9oUKHs2uKw5q2+m7sHaU7QE3rgc45o+Lz26dc5FG3gKi70n1psGOYAKsIuYhGIHVHKbXf8BQD+7mypkdof57K52Xeg15wzzM55elQQoZJwBGEc9EoAqsIqYr4j8zZIAhdS5XH9rvgfqyfqUQCE9D6CXVZsjUsioYD7KrXNanBzOuTJw/Td0ReSYU/cHfjZLwpHI7BkAAAAASUVORK5CYII="},38:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGzSURBVEiJtda7a1RBFMfxz4lryAoa0BDSiGwj8QG2ohYptRAff4RgYyorBQv/gdgJ/guC2viMlUUsfGNERINYWGgjEXQLzVjcuTBZbtaF7B44DHPmzPc3L869Uko26ziFH+hmX8Y8trUMx35ngQm0sB8L2Lrp1ffsZAL3kbJ/GDb8QQa/wDcMFf4ww19iJz4PRQBtPCrhOf4OvwaFTA8Af4VdxdgxnPwf+Eg+1zU8w5ke+GKGvy7h6xh94MdVb7q+tD9ZaB5TeFzAp4p5V7CELRsKYC7D13C+QfBvbt+U8Jz3NI/N9BO4UcKL+Cyu5/O+gO0NcwcS2IEDRX8ckxvkHsIt7GkSGNNgKaXVlNJyEbqD9xHRlH86+1wTawwi4mBErETE5XogItpFXgczGI+IyYj4EhEX69Sedr1AROxTvYgOfmb4WaxGRNOqOtiNo03Aph3cxjQWUkrXcnyvqirODgLpZy3cRDeldHWzsEaBlNKlUYBrqy+5HRFLEXFuJAKqMz+ME6MS6PvUhiEwMhu5QP1X8RFvVZ89qnqyklu4i68ppW5E9OY+wSc8z/17qlr0Hf4BAEVawD+0OsEAAAAASUVORK5CYII="},75:function(e,t,a){e.exports=a(195)},80:function(e,t,a){},81:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.b235f547.chunk.js.map