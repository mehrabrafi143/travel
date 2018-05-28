import $ from 'jquery';

class Model{
    constructor(){
      this.modelBtn = $(".model-btn");
      this.modelBody = $(".model");
      this.modelCloseBtn = $(".model__menu-bar");
      this.events();
    }

    events(){
        this.modelBtn.on("click",this.openModel.bind(this));
        this.modelCloseBtn.on("click",this.closeModel.bind(this));        
    }
    
    openModel(){ 
        this.modelBody.addClass("model--visible");
        $("body").addClass("no-scroll");
    }

    closeModel(){
        this.modelBody.removeClass("model--visible"); 
        $("body").removeClass("no-scroll");       
    }

}

export default Model;