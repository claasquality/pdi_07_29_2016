if(Meteor.isClient) {


    Template.pdi_printOut.helpers({

        listContent: function () {
            var pdiMachine = Session.get('selectedPdiMachine');
            return MachineReady.find({_id: pdiMachine}).fetch();
        }
    });
}