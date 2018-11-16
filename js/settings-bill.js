// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
let billWithSettings = new Vue({
    el: '.billWithSettings',
    data:{
        callCost: 0,
        smsCost: 0,
        warningCost: 0,
        criticalCost: 0,
        callTotal: 0,
        smsTotal:0,
    },
    computed:{
        totalCost: function(){
            let total = this.callTotal + this.smsTotal
            return total
        }

    },
    methods:{
        addBtnFunc: function(billType){
            if (billType === 'call') {
              billCallTotal += costSettingCall;
            } else if (billType === 'sms') {
              billSmsTotal += costSettingSMS;
            }
        }
    }
})