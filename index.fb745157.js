var e=document.querySelector("body"),t=function(t,n,a,o,i){var s=document.createElement("div");s.className="notification ".concat(i),e.append(s),s.style.top=t+"px";var c=document.createElement("h3");c.className="title",c.textContent=a,s.append(c);var r=document.createElement("p");r.textContent=o,s.append(r),setTimeout(function(){return s.remove()},2e3)};t(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),t(164,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),t(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.fb745157.js.map
