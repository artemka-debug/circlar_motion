!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.canvas=void 0;var i=function(){this.canvas=document.createElement("canvas"),this.c=this.canvas.getContext("2d"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.canvas.style.position="fixed",this.canvas.style.top="0",this.canvas.style.left="0",document.body.appendChild(this.canvas)};e.canvas=new i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.randomIntFromRange=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},t.pick_random_thing=function(t){return t[Math.floor(Math.random()*t.length)]},t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=n(0),a=n(1),o=r.canvas.c,s=r.canvas.canvas,c=s.width,u=s.height,d=["#2185C5","#7ECEFD","#FF7F66","#6C3483","#D35400","#FA8072"],h={x:0,y:0};addEventListener("mousemove",(function(t){h.x=t.clientX,h.y=t.clientY})),addEventListener("resize",(function(){r.canvas.canvas.width=window.innerWidth,r.canvas.canvas.height=window.innerHeight,f()}));var l=[];function f(){l=[];for(var t=0;t<2500;t++){var e=a.default.randomIntFromRange(1,5),n=c/2,r=u/2,o=a.default.pick_random_thing(d);l.push(new i.default(n,r,e,o))}}var v=function(){o.clearRect(0,0,innerWidth,innerHeight),o.fillStyle="rgba(225, 225, 225, 0.1)",o.fillRect(0,0,c,u);for(var t=0,e=l;t<e.length;t++){e[t].update()}requestAnimationFrame(v)};f(),v()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n(1),a=i.canvas.c,o=i.canvas.canvas,s=o.width,c=o.height,u=function(){function t(t,e,n,i){this.x=t,this.y=e,this.radius=n,this.color=i,this.speed_num=[10,20,30,-10,-20,-30],this.velocity=.05,this.radians=Math.random()*Math.PI*2,this.distance_from_center=r.default.randomIntFromRange(150,200),this.center_pos={x:t,y:e},this.directions={x:r.default.pick_random_thing(this.speed_num),y:r.default.pick_random_thing(this.speed_num)}}return t.prototype.draw=function(t){a.beginPath(),a.lineWidth=this.radius,a.strokeStyle=this.color,a.moveTo(t.x,t.y),a.lineTo(this.x,this.y),a.stroke(),a.closePath()},t.prototype.update=function(){var t={x:this.x,y:this.y},e=this.center_pos,n=e.x,i=e.y,r=this.distance_from_center,a=this.radians,o=this.directions,u=this.velocity;(n+r>s||n-r<0)&&(this.directions.x*=-1),(i+r>c||i-r<0)&&(this.directions.y*=-1),this.x+=o.x,this.y+=o.y,this.center_pos.x+=.05*o.x,this.center_pos.y+=.05*o.y,this.radians+=u,this.x=n+Math.cos(a)*r,this.y=i+Math.sin(a)*r,this.draw(t)},t}();e.default=u}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9TaGFwZS50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRoaXMiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIkNhbnZhcyIsInJhbmRvbUludEZyb21SYW5nZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBpY2tfcmFuZG9tX3RoaW5nIiwibWFfc3R1ZmYiLCJsZW5ndGgiLCJVdGlscyIsImNvbG9ycyIsIm1vdXNlIiwieCIsInkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImluaXQiLCJwYXJ0aWNsZXMiLCJyYWRpdXMiLCJjb2xvciIsInB1c2giLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzcGVlZF9udW0iLCJ2ZWxvY2l0eSIsInJhZGlhbnMiLCJQSSIsImRpc3RhbmNlX2Zyb21fY2VudGVyIiwiY2VudGVyX3BvcyIsImRpcmVjdGlvbnMiLCJkcmF3IiwibGFzdF9wb3NpdGlvbiIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiY29zIiwic2luIiwiU2hhcGUiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBF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RUFBSXFCLEVBQXVCN0MsR0FBVXdCLEVBQUlxQixFQUF1QixLQUFLL0MsS0FBS2lELFdBQVd2QixJQUFNLElBQzNGQyxFQUFJb0IsRUFBdUIxQyxHQUFVc0IsRUFBSW9CLEVBQXVCLEtBQUsvQyxLQUFLaUQsV0FBV3RCLElBQU0sR0FFL0YzQixLQUFLMEIsR0FBS3VCLEVBQVd2QixFQUNyQjFCLEtBQUsyQixHQUFLc0IsRUFBV3RCLEVBRXJCM0IsS0FBS2dELFdBQVd0QixHQUFvQixJQUFmdUIsRUFBV3ZCLEVBQ2hDMUIsS0FBS2dELFdBQVdyQixHQUFvQixJQUFmc0IsRUFBV3RCLEVBRWhDM0IsS0FBSzZDLFNBQVdELEVBRWhCNUMsS0FBSzBCLEVBQUlBLEVBQUlULEtBQUswQyxJQUFJZCxHQUFXRSxFQUNqQy9DLEtBQUsyQixFQUFJQSxFQUFJVixLQUFLMkMsSUFBSWYsR0FBV0UsRUFFakMvQyxLQUFLa0QsS0FBS0MsSUFFbEIsRUFwREEsR0FzREEsVUFBZVUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJjbGFzcyBDYW52YXMge1xuICAgIHB1YmxpYyByZWFkb25seSBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgYyA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcblxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9IFwiMFwiO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTsiLCJjbGFzcyBVdGlscyB7XG4gICAgc3RhdGljIHJhbmRvbUludEZyb21SYW5nZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIDogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcbiAgICB9XG5cbiAgICBzdGF0aWMgcGlja19yYW5kb21fdGhpbmc8VD4obWFfc3R1ZmY6IEFycmF5PFQ+KSA6IFR7XG4gICAgICAgIHJldHVybiBtYV9zdHVmZltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYV9zdHVmZi5sZW5ndGgpXVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7IiwiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XG5pbXBvcnQge2NhbnZhc30gZnJvbSBcIi4vY2FudmFzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3Qge2N9ID0gY2FudmFzO1xubGV0IHt3aWR0aCwgaGVpZ2h0fSA9IGNhbnZhcy5jYW52YXM7XG5cbmNvbnN0IGNvbG9ycyA9IFsnIzIxODVDNScsICcjN0VDRUZEJywgJyNGRjdGNjYnLCAnIzZDMzQ4MycsICcjRDM1NDAwJywgJyNGQTgwNzInXTtcbmxldCBtb3VzZSA9IHt4OiAwLCB5OiAwfTtcblxuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgbW91c2UueCA9IGV2ZW50LmNsaWVudFg7XG4gICAgbW91c2UueSA9IGV2ZW50LmNsaWVudFk7XG59KTtcblxuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGNhbnZhcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGluaXQoKTtcbn0pO1xuXG5sZXQgcGFydGljbGVzOiBBcnJheTxTaGFwZT4gPSBbXTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBwYXJ0aWNsZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjUwMDsgaSsrKSB7XG4gICAgICAgIGxldCByYWRpdXMgPSBVdGlscy5yYW5kb21JbnRGcm9tUmFuZ2UoMSwgNSk7XG4gICAgICAgIGxldCB4ID0gd2lkdGggLyAyO1xuICAgICAgICBsZXQgeSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGxldCBjb2xvciA9IFV0aWxzLnBpY2tfcmFuZG9tX3RoaW5nKGNvbG9ycyk7XG5cbiAgICAgICAgcGFydGljbGVzLnB1c2gobmV3IFNoYXBlKHgsIHksIHJhZGl1cywgY29sb3IpKTtcbiAgICB9XG59XG5cbmNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgYy5jbGVhclJlY3QoMCwgMCwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpO1xuICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjI1LCAyMjUsIDIyNSwgMC4xKSc7XG4gICAgYy5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGZvciAoY29uc3QgcGFydGljbGUgb2YgcGFydGljbGVzKSB7XG4gICAgICAgIHBhcnRpY2xlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn07XG5cbmluaXQoKTtcbmFuaW1hdGUoKTtcbiIsImltcG9ydCB7IGNhbnZhcyB9IGZyb20gXCIuL2NhbnZhc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IHsgYyB9ID0gIGNhbnZhcztcbmxldCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhcy5jYW52YXM7XG5cbmludGVyZmFjZSBQb2ludCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuY2xhc3MgU2hhcGUge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmVsb2NpdHkgICAgICAgICAgICA6IG51bWJlcjtcbiAgICBwcml2YXRlIHJhZGlhbnMgICAgICAgICAgICAgICAgICAgICAgOiBudW1iZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXN0YW5jZV9mcm9tX2NlbnRlcjogbnVtYmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2VudGVyX3BvcyAgICAgICAgICA6IFBvaW50O1xuICAgIHByaXZhdGUgZGlyZWN0aW9ucyAgICAgICAgICAgICAgICAgICA6IFBvaW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWRfbnVtID0gWzEwLCAyMCwgMzAsIC0xMCwgLTIwLCAtMzBdO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlciwgcHVibGljIHJhZGl1czpudW1iZXIsIHByaXZhdGUgY29sb3I6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZlbG9jaXR5ICAgICAgICAgICAgID0gMC4wNTtcbiAgICAgICAgdGhpcy5yYWRpYW5zICAgICAgICAgICAgICA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgdGhpcy5kaXN0YW5jZV9mcm9tX2NlbnRlciA9IFV0aWxzLnJhbmRvbUludEZyb21SYW5nZSgxNTAsIDIwMCk7XG4gICAgICAgIHRoaXMuY2VudGVyX3BvcyAgICAgICAgICAgPSB7IHggOiB4LCB5IDogeSB9O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgICAgICAgICAgID0ge1xuICAgICAgICAgICAgeDogVXRpbHMucGlja19yYW5kb21fdGhpbmcodGhpcy5zcGVlZF9udW0pLFxuICAgICAgICAgICAgeTogVXRpbHMucGlja19yYW5kb21fdGhpbmcodGhpcy5zcGVlZF9udW0pXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3KGxhc3RfcG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgICBjLmxpbmVXaWR0aCAgID0gdGhpcy5yYWRpdXM7XG4gICAgICAgIGMuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjLm1vdmVUbyhsYXN0X3Bvc2l0aW9uLngsIGxhc3RfcG9zaXRpb24ueSk7XG4gICAgICAgIGMubGluZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCkge1xuICAgICAgICBsZXQgbGFzdF9wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICAgIHk6IHRoaXMueVxuICAgICAgICB9O1xuICAgICAgICBsZXQgeyB4LCB5IH0gPSB0aGlzLmNlbnRlcl9wb3M7XG4gICAgICAgIGNvbnN0IHsgZGlzdGFuY2VfZnJvbV9jZW50ZXIsIHJhZGlhbnMsIGRpcmVjdGlvbnMsIHZlbG9jaXR5IH0gPSB0aGlzO1xuICAgICAgICBpZiAoeCArIGRpc3RhbmNlX2Zyb21fY2VudGVyID4gd2lkdGggIHx8IHggLSBkaXN0YW5jZV9mcm9tX2NlbnRlciA8IDApIHsgdGhpcy5kaXJlY3Rpb25zLnggKj0gLTEgfVxuICAgICAgICBpZiAoeSArIGRpc3RhbmNlX2Zyb21fY2VudGVyID4gaGVpZ2h0IHx8IHkgLSBkaXN0YW5jZV9mcm9tX2NlbnRlciA8IDApIHsgdGhpcy5kaXJlY3Rpb25zLnkgKj0gLTEgfVxuXG4gICAgICAgIHRoaXMueCArPSBkaXJlY3Rpb25zLng7XG4gICAgICAgIHRoaXMueSArPSBkaXJlY3Rpb25zLnk7XG5cbiAgICAgICAgdGhpcy5jZW50ZXJfcG9zLnggKz0gZGlyZWN0aW9ucy54ICogMC4wNTtcbiAgICAgICAgdGhpcy5jZW50ZXJfcG9zLnkgKz0gZGlyZWN0aW9ucy55ICogMC4wNTtcblxuICAgICAgICB0aGlzLnJhZGlhbnMgKz0gdmVsb2NpdHk7XG5cbiAgICAgICAgdGhpcy54ID0geCArIE1hdGguY29zKHJhZGlhbnMpICogZGlzdGFuY2VfZnJvbV9jZW50ZXI7XG4gICAgICAgIHRoaXMueSA9IHkgKyBNYXRoLnNpbihyYWRpYW5zKSAqIGRpc3RhbmNlX2Zyb21fY2VudGVyO1xuXG4gICAgICAgIHRoaXMuZHJhdyhsYXN0X3Bvc2l0aW9uKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlOyJdLCJzb3VyY2VSb290IjoiIn0=