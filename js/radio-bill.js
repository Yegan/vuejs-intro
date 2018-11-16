// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
let radioBill= new Vue({
    el: '.radioBill',
    data:{
        dataType: '',
        callTotal: 0,
        smsTotal:0,
    },
    computed:{
        totalBill:function(){
            let total = this.callTotal + this.smsTotal
            return total
        }
    },
        methods:{
            addAction: function(billTypeEntered){
                billTypeEntered = this.dataType;
                if (billTypeEntered === "call") {
                    this.callTotal += 2.75;
                } else if (billTypeEntered === "sms") {
                    this.smsTotal += 0.75;
                }
            }
        }
    });
