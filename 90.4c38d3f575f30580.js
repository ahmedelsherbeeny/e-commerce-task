"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[90],{7090:(U,u,c)=>{c.r(u),c.d(u,{FeaturesModule:()=>p});var d=c(6895),l=c(4679),P=c(7579),f=c(4482),O=c(5403),_=c(8421),M=c(5032);function h(i){return(0,f.e)((o,n)=>{(0,_.Xf)(i).subscribe((0,O.x)(n,()=>n.complete(),M.Z)),!n.closed&&o.subscribe(n)})}var C=c(567),t=c(8256),b=c(9067),m=c(1679),x=c(4333);function y(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"div",9)(1,"input",10),t.NdJ("click",function(r){t.CHM(n);const s=t.oxw();return t.KtG(s.filter(r))}),t.qZA(),t._uU(2),t.qZA()}if(2&i){const n=o.$implicit;t.xp6(1),t.s9C("value",n.category),t.xp6(1),t.AsE(" ",n.category," (",n.number,") ")}}function v(i,o){if(1&i&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&i){const n=t.oxw();t.xp6(1),t.hij("(",n.numOfSerchedFound,") products found")}}function A(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"div",12)(1,"div",13),t._uU(2),t.qZA(),t.TgZ(3,"div",14),t._UZ(4,"img",15),t.qZA(),t.TgZ(5,"div",16),t._uU(6),t.qZA(),t.TgZ(7,"div",17),t._uU(8),t.qZA(),t.TgZ(9,"div",18)(10,"div",19)(11,"span"),t._uU(12),t.qZA(),t._uU(13," USD"),t.qZA(),t.TgZ(14,"div",20)(15,"span"),t._uU(16),t.qZA(),t._uU(17,"USD "),t.qZA()(),t.TgZ(18,"div",21)(19,"span"),t._uU(20,"Brand:"),t.qZA(),t._uU(21),t.qZA(),t.TgZ(22,"div",9)(23,"span"),t._uU(24,"Category:"),t.qZA(),t._uU(25),t.qZA(),t.TgZ(26,"div",22)(27,"span"),t._uU(28,"In stock:"),t.qZA(),t._uU(29),t.qZA(),t.TgZ(30,"div",23)(31,"span",24),t._uU(32),t.qZA(),t.TgZ(33,"span",25),t._uU(34,"(11)"),t.qZA()(),t.TgZ(35,"button",26),t.NdJ("click",function(){const s=t.CHM(n).$implicit,T=t.oxw();return t.KtG(T.IncreaseCount(s.id))}),t._uU(36),t.qZA()()}if(2&i){const n=o.$implicit,e=t.oxw();t.xp6(2),t.hij("-",n.discountPercentage,"%"),t.xp6(2),t.s9C("src",n.images[0],t.LSH),t.xp6(2),t.hij(" ",n.title," "),t.xp6(2),t.Oqu(n.description),t.xp6(4),t.Oqu(n.price),t.xp6(4),t.hij("",n.price-e.math.ceil(n.price*n.discountPercentage/100)," "),t.xp6(5),t.hij(" ",n.brand,""),t.xp6(4),t.hij(" ",n.category,""),t.xp6(4),t.hij(" ",n.stock,""),t.xp6(3),t.Oqu(n.rating),t.xp6(3),t.Q6J("disabled",n.added),t.xp6(1),t.Oqu(e.productsInCart.includes(n.id)?e.addToCartText:"Add to cart")}}const Z=function(i){return{itemsPerPage:5,currentPage:i}};class a{constructor(o,n,e){this.productService=o,this.share=n,this.router=e,this.productsForFilter=[],this.tempArray=[],this.tempArrytwo=[],this.math=Math,this.allCategories=[],this.categoryNums=[],this.p=1,this.searchedProducts=[],this.searched=!1,this.numOfSerchedFound=0,this.addToCartText="Add to cart",this.productsInCart=[],this.filterValue="",this.unsubscribe$=new P.x}ngOnInit(){this.getAllProducts(!0),this.getSearchedValues()}filter(o){o.target.checked?(this.filterValue=o.target.value,this.tempArray=this.productsForFilter.filter(n=>n.category===o.target.value),this.products=[],this.tempArrytwo.push(this.tempArray),this.tempArrytwo.forEach(n=>{n.forEach(e=>{this.products.push(e)})})):(this.filterValue="",this.tempArray=this.products.filter(n=>n.category!=o.target.value),this.products=[],this.tempArrytwo=[],this.tempArrytwo.push(this.tempArray),this.tempArrytwo.forEach(n=>{n.forEach(e=>{this.products.push(e)})}),0==this.products.length&&this.getAllProducts(!1))}getAllProducts(o){this.productService.getProds().pipe(h(this.unsubscribe$)).subscribe(n=>{this.products=n.products,this.productsForFilter=this.products,o&&this.getAllCategories()})}getAllCategories(){this.products.forEach(o=>{this.allCategories.push(o.category)}),this.categories=this.allCategories.filter((o,n)=>this.allCategories.indexOf(o)===n),this.categories.forEach(o=>{let n=0;this.products.forEach(e=>{e.category==o&&n++}),this.categoryNums.push({category:o,number:n})})}getSearchedValues(){this.productService.searchedProducts$.pipe(h(this.unsubscribe$)).subscribe(o=>{o.length>0?(this.products=o,this.numOfSerchedFound=o.length,this.searched=!0):(this.searched=!1,this.getAllProducts(!1))})}IncreaseCount(o){let n=this.share.count.getValue();this.share.count.next(n+1);let e=this.products.find(r=>r.id===o);e.added=!0,this.productsInCart.push(e.id),this.addToCartText="In your cart"}ngOnDestroy(){this.unsubscribe$.next(!0)}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(b.s),t.Y36(m.g),t.Y36(l.F0))};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-products"]],decls:14,vars:11,consts:[[1,"crumb"],[1,"box-container"],[1,"filter"],["class","category",4,"ngFor","ngForOf"],["class","numofproductsfound",4,"ngIf"],[1,"boxes"],["class","box",4,"ngFor","ngForOf"],[1,"pagination"],[3,"pageChange"],[1,"category"],["type","checkbox",3,"value","click"],[1,"numofproductsfound"],[1,"box"],[1,"discount"],[1,"image-holder"],["alt","",3,"src"],[1,"title"],[1,"description"],[1,"prices"],[1,"old-price"],[1,"current-price"],[1,"brand"],[1,"stock"],[1,"rating"],[1,"fa","fa-star"],[1,"num"],[3,"disabled","click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"h2"),t._uU(5,"Products"),t.qZA(),t.TgZ(6,"form"),t.YNc(7,y,3,3,"div",3),t.qZA()(),t.YNc(8,v,2,1,"div",4),t.TgZ(9,"div",5),t.YNc(10,A,37,12,"div",6),t.ALo(11,"paginate"),t.qZA()(),t.TgZ(12,"div",7)(13,"pagination-controls",8),t.NdJ("pageChange",function(s){return e.p=s}),t.qZA()()),2&n&&(t.xp6(1),t.hij("Home/Products/",e.filterValue,""),t.xp6(5),t.Q6J("@listAnimation",e.categoryNums.length),t.xp6(1),t.Q6J("ngForOf",e.categoryNums),t.xp6(1),t.Q6J("ngIf",e.searched),t.xp6(1),t.Q6J("@fade",void 0),t.xp6(1),t.Q6J("ngForOf",t.xi3(11,6,e.products,t.VKq(9,Z,e.p))))},dependencies:[d.sg,d.O5,x.LS,x._s],styles:[".box-container[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:15px;margin-top:20px;margin-bottom:40px;position:relative}.box-container[_ngcontent-%COMP%]   .numofproductsfound[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:#1e1e1e}.box-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{width:340px;padding-left:15px;margin:10px;left:0;background:#FFFFFF;border:.5px solid #424242;border-radius:8px;height:-moz-fit-content;height:fit-content;padding-bottom:20px}.box-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Open Sans;font-style:normal;font-weight:700;font-size:16px;line-height:22px;margin-top:15px;color:#1e1e1e}.box-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;gap:15px;margin-top:20px}.box-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{font-family:Open Sans;font-style:normal;font-weight:400;font-size:16px;line-height:22px;color:#1e1e1e}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:10px;width:-moz-fit-content;width:fit-content;margin:10px;left:350px}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;gap:10px;background:#FFFFFF;border:.5px solid #424242;border-radius:8px;position:relative;height:650px;width:310px}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:550;font-size:15px;line-height:18px;color:#344054}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%]{position:absolute;width:-moz-fit-content;width:fit-content;height:20px;left:5px;top:5px;background-color:#56d9d9;color:#344054;display:flex;justify-content:center;border-radius:4px}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{max-width:300px;height:74px;font-family:Inter;font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:#344054}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:flex-start}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]   .old-price[_ngcontent-%COMP%]{text-decoration:line-through}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]   .old-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#344054;font-family:Inter;font-style:normal;font-weight:700;font-size:14px;line-height:17px}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%]{border-radius:6px}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .image-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:6px;max-width:100%;width:350px;height:240px}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;gap:2px}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{color:#f4b000}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]{font-family:Open Sans;font-style:normal;font-weight:400;font-size:16px;line-height:22px;text-align:center;color:#1e1e1e;opacity:.5}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .stock[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .prices[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{padding:7px}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#56D9D9;border-radius:4px;color:#344054;border:none;margin:8px;padding-top:5px;padding-bottom:5px;cursor:pointer}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#ccc;pointer-events:none}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .stock[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:600;font-size:14px;line-height:17px;color:#344054}.box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .box-container[_ngcontent-%COMP%]   .boxes[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .stock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Inter;font-style:normal;font-weight:400;font-size:14px;line-height:17px}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding-bottom:30px}"],data:{animation:[C.a,C.U]}})}const F=[{path:"products",component:a}];class g{static#t=this.\u0275fac=function(n){return new(n||g)};static#n=this.\u0275mod=t.oAB({type:g});static#o=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(F),l.Bz]})}class p{static#t=this.\u0275fac=function(n){return new(n||p)};static#n=this.\u0275mod=t.oAB({type:p});static#o=this.\u0275inj=t.cJS({imports:[d.ez,g,x.JX]})}}}]);