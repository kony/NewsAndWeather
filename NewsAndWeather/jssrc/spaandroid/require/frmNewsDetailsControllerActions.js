define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerButtonLeft **/
    AS_Button_e2dd0e980662446a819c9ffcfafd3b31: function AS_Button_e2dd0e980662446a819c9ffcfafd3b31(eventobject) {
        var self = this;
        var previewsForm = kony.application.getPreviousForm();
        var navToPreForm = new kony.mvc.Navigation(previewsForm.id);
        navToPreForm.navigate();
    },
    /** onSuccess defined for browserDetails **/
    AS_Browser_j7022029258b48938278a89e1861bb56: function AS_Browser_j7022029258b48938278a89e1861bb56(eventobject) {
        var self = this;
        this.setSharingContent();
    }
});