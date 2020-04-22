import React from 'react';
import '../App.css';




function animateAbout(){

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000  ;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        
        var fullTxt = this.toRotate[i];
       
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    

     const StartTyping= function() {
        
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
      // Aici adaug linia...doar daca avem content de afisat.
      var css = document.createElement("style");
      css.type = "text/css";
     
      css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid rgb(13, 47, 63); }";
      
      document.body.appendChild(css);
  };

     


return(
  <div className="AboutAnimate">
    {StartTyping()}
<h1>
  <div  className="typewrite" data-period="2000" data-type={`${Quotes}`}>
    <span className="wrap"></span>
  </div>
</h1>

  </div>
);
}

export default animateAbout;

let Quotes='[  "I Love Design.", "I am Creative.", "I Love to Develop.", "I love WEB!" ]';
