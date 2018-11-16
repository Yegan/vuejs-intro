//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
let calculateBill = new Vue({
    el: '.calculateBill',
    data:{
        // billTotal:0,
        billString:''
    },
    computed: {
        billTotal: function(billString){
            
            let billParts = this.billString.split(',')
            let totalBill= 0 ;

            for (var i = 0; i < billParts.length; i++) {
                var billPartsTwo = billParts[i];
              
                    if (billPartsTwo === "call") {
                        totalBill += 2.75;
                  } else if (billPartsTwo === "sms") {
                    totalBill += 0.75;
                  }
                }
  
                var roundedBillTotal = totalBill.toFixed(2);
            //   let bill = this.billString.length;
 
            // this.billTotal = totalBill
            return roundedBillTotal
    }
},
    methods:{
       calculate: function(){

       }

        }
    });

