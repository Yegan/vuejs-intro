// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
let billTypeText = new Vue({
    el:'.billTypeText',
    data:{
        callTotal: 0,
        smsTotal: 0,
        billType: '',
    },
    computed:{
        totalPhoneBill: function(){
        let grandTotal = this.callTotal + this.smsTotal;
        return grandTotal
        }
    },
    methods:{
        addAction: function(billTypeEntered) {
            billTypeEntered = this.billType
            if (billTypeEntered === "call") {
                this.callTotal += 2.75
            } else if (billTypeEntered === "sms") {
                this.smsTotal += 0.75;
            }
        }
    }
})