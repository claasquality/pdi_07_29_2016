MachineReady = new Mongo.Collection('machineReadyToGo');
FailuresList = new Mongo.Collection('failures');
checkPoints = new Mongo.Collection('checkpoints');
InspectedMachines = new Mongo.Collection('inspectedMachines');
pdiCheckPoints = new Mongo.Collection('pdiCheckList');
headerTrailer = new Mongo.Collection('headerTrailer');
washBayText = new Mongo.Collection('washBayText');
repairPrint = new Mongo.Collection('repairOrderPrint');
siList = new Mongo.Collection('siList');
ommMain = new Mongo.Collection('ommMain');
ommSupp = new Mongo.Collection('ommSupp');
ommUnload = new Mongo.Collection('ommUnload');
ommCebisMo = new Mongo.Collection('ommCebisMo');
ommTeraTrack = new Mongo.Collection('ommTeraTrack');
ommProfiCam = new Mongo.Collection('ommProfiCam');

if (Meteor.isClient) {

    Meteor.startup( function() {


        Meteor.subscribe("MachineReady");
        Meteor.subscribe("failures");
        Meteor.subscribe("checkpoints");
        Meteor.subscribe("inspectedMachines");
        Meteor.subscribe("pdiCheckList");
        Meteor.subscribe("headerTrailer");
        Meteor.subscribe("washBayText");
        Meteor.subscribe("repairOrderPrint");
        Meteor.subscribe("siList");
        Meteor.subscribe("ommMain");
        Meteor.subscribe("ommSupp");
        Meteor.subscribe("ommUnload");
        Meteor.subscribe("ommCebisMo");
        Meteor.subscribe("ommTeraTrack");
        Meteor.subscribe("ommProfiCam");


        Session.set('selectedPdiMachine', '');
        Session.set('pdiMachineNumber', '');
        Session.set('selectedErrorId', '');
        Session.set('selectedNewErrorId', '');
        Session.set('findMachine', '');
        Session.set('selectedMainOm', '');
        Session.set('selectedSuppOm', '');
        Session.set('selectedUnloadOm', '');
        Session.set('selectedCemosOm', '');
        Session.set('selectedTeraTrackOm', '');
        Session.set('selectedProfiCam', '');
        Session.set('selectedProfiId', '');

    });

}
