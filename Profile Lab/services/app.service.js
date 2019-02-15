"use strict";

function ProfileService ($location) {
    const self = this;
    self.profileObject = {
        name: "Grant Chirpus",
        contact: "grant@grandcircus.co",
        bio: "I am pretty cool. I a great job. I like to play tetris. I am pretty okay at Angular JS."
    }
    
    self.getUserProfile = function() {
        return self.profileObject;
    };
    self.setUserProfile = function(profileObject) {
        self.profileObject = profileObject;
    };
    self.editProfile = function(){
        $location.path("/edit-profile");
    };
    self.goHome = function()  {
        $location.path("/profile");
    }

}

angular
.module("ProfileApp")
.service("ProfileService", ProfileService);