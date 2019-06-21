//just in case codepion does not exist
var codepion = window.codepion || {};

codepion.registrationPage = {
    //Constants
    FORM_ID: '#signupform',
    OUTPUT_ID : '#output',
    //Initialization method
    init: function(){
        //get the form and output elements
        this.form = $(this.FORM_ID);
        this.output = $(this.OUTPUT_ID);
        //prevent normal form submission
        addEventListener(this.form, 'submit', this.handleSubmit);
    },
    //form handling
    handleSubmit: function(e){
        e.preventDefault();
        var datatopost = this.form.serializeArray();
        //send the form values to the server
        this.sendRegistration(datatopost);
    },
    sendRegistration: function(datatopost){
        $.ajax({
            url: "signup.php",
            type: "POST",
            success: function(response){
                this.displayResult(response);
            },
            error: function(){
                window.alert('There was an error with the Ajax call. Please try again later!')
            }
        });
    },
    displayResult: function(response){
        this.output.html(response);
    }
    
};

//invoke the init method after the page loads
codepion.registrationPage.init();