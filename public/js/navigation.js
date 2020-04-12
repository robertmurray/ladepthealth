if (!String.prototype.trim) {
  (function() {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function() {
      return this.replace(rtrim, '');
    };
  })();
}

if (!String.prototype.isEmail) {
  (function() {
    var emailPattern = /^[a-zA-Z0-9._\-']+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;	
    String.prototype.isEmail = function() {
      return emailPattern.test(this); 
    };
  })();
}