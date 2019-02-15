"use strict";
const editProfile = {
    template: `

    <p class="title">Use the form below to update your profile</p>
    <form ng-submit="$ctrl.submitForm($ctrl.update)">
    
    <p>Name</p>

    <input ng-model="$ctrl.update.name"
    type="text"
    placeholder="Name">

    <p>Contact</p>

    <input ng-model="$ctrl.update.contact"
    type="text"
    placeholder="Contact">

    <p>BIO</p>

    <textarea ng-model="$ctrl.update.bio"></textarea>
    <button class="update">Update</button>

    </form>
    `,

    controller: ["ProfileService", function(ProfileService){
        const vm = this;
        vm.submitForm = function(update){
            ProfileService.setUserProfile(update);
            ProfileService.goHome();
        }
    }]
};


angular
    .module("ProfileApp")
    .component("editProfile", editProfile)