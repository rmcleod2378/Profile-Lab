"use strict";
const profile = {
    template: `
    <i class="material-icons">photo</i>
    <p>Name: {{$ctrl.profileObject.name}}</p>
    <p>Contact: {{$ctrl.profileObject.contact}}</p>
    <p>BIO: {{$ctrl.profileObject.bio}}</p>
    <button class="edit" ng-click="$ctrl.getEditPage()">Edit</button>
    `,

    controller: ["ProfileService", function(ProfileService){
        const vm = this;
        vm.profileObject = ProfileService.getUserProfile();
        vm.getEditPage = function() {
            ProfileService.editProfile()
        }
    }]
};

angular
    .module("ProfileApp")
    .component("profile", profile)