import{w as ln,c as U}from"./path-39bad7e2.CbwjOpE9.js";import{aO as an,aP as Y,aQ as O,aR as rn,aS as y,aN as on,aT as j,aU as _,aV as un,aW as t,aX as sn,aY as tn,aZ as fn}from"../app.Dj4uhcLI.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,D,S,v,R,V,a){var E=D-l,i=S-h,n=V-v,m=a-R,r=m*E-n*i;if(!(r*r<y))return r=(n*(h-R)-m*(l-v))/r,[l+r*E,h+r*i]}function H(l,h,D,S,v,R,V){var a=l-D,E=h-S,i=(V?R:-R)/j(a*a+E*E),n=i*E,m=-i*a,r=l+n,s=h+m,f=D+n,c=S+m,W=(r+f)/2,o=(s+c)/2,p=f-r,g=c-s,A=p*p+g*g,T=v-R,P=r*c-f*s,I=(g<0?-1:1)*j(fn(0,T*T*A-P*P)),N=(P*g-p*I)/A,Q=(-P*p-g*I)/A,w=(P*g+p*I)/A,d=(-P*p+g*I)/A,x=N-W,e=Q-o,u=w-W,X=d-o;return x*x+e*e>u*u+X*X&&(N=w,Q=d),{cx:N,cy:Q,x01:-n,y01:-m,x11:N*(v/T-1),y11:Q*(v/T-1)}}function vn(){var l=cn,h=yn,D=U(0),S=null,v=gn,R=mn,V=pn,a=null,E=ln(i);function i(){var n,m,r=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-rn,c=R.apply(this,arguments)-rn,W=un(c-f),o=c>f;if(a||(a=n=E()),s<r&&(m=s,s=r,r=m),!(s>y))a.moveTo(0,0);else if(W>on-y)a.moveTo(s*Y(f),s*O(f)),a.arc(0,0,s,f,c,!o),r>y&&(a.moveTo(r*Y(c),r*O(c)),a.arc(0,0,r,c,f,o));else{var p=f,g=c,A=f,T=c,P=W,I=W,N=V.apply(this,arguments)/2,Q=N>y&&(S?+S.apply(this,arguments):j(r*r+s*s)),w=_(un(s-r)/2,+D.apply(this,arguments)),d=w,x=w,e,u;if(Q>y){var X=sn(Q/r*O(N)),z=sn(Q/s*O(N));(P-=X*2)>y?(X*=o?1:-1,A+=X,T-=X):(P=0,A=T=(f+c)/2),(I-=z*2)>y?(z*=o?1:-1,p+=z,g-=z):(I=0,p=g=(f+c)/2)}var Z=s*Y(p),$=s*O(p),B=r*Y(T),C=r*O(T);if(w>y){var F=s*Y(g),G=s*O(g),J=r*Y(A),K=r*O(A),q;if(W<an)if(q=dn(Z,$,J,K,F,G,B,C)){var L=Z-q[0],M=$-q[1],k=F-q[0],b=G-q[1],nn=1/O(tn((L*k+M*b)/(j(L*L+M*M)*j(k*k+b*b)))/2),en=j(q[0]*q[0]+q[1]*q[1]);d=_(w,(r-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}I>y?x>y?(e=H(J,K,Z,$,s,x,o),u=H(F,G,B,C,s,x,o),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),a.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(a.moveTo(Z,$),a.arc(0,0,s,p,g,!o)):a.moveTo(Z,$),!(r>y)||!(P>y)?a.lineTo(B,C):d>y?(e=H(B,C,F,G,r,-d,o),u=H(Z,$,J,K,r,-d,o),a.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(a.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),a.arc(0,0,r,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),a.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):a.arc(0,0,r,T,A,o)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +R.apply(this,arguments))/2-an/2;return[Y(m)*n,O(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:U(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:U(+n),i):h},i.cornerRadius=function(n){return arguments.length?(D=typeof n=="function"?n:U(+n),i):D},i.padRadius=function(n){return arguments.length?(S=n==null?null:typeof n=="function"?n:U(+n),i):S},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:U(+n),i):v},i.endAngle=function(n){return arguments.length?(R=typeof n=="function"?n:U(+n),i):R},i.padAngle=function(n){return arguments.length?(V=typeof n=="function"?n:U(+n),i):V},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{vn as d};
