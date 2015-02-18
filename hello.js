
if (Meteor.isClient) {

	// counter starts at 0
	Session.set('counter', 0);

	Template.hello.helpers({

		counter: function () {
			return Session.get('counter');
		},

		isCounterEven: function () {
			var counter = Session.get('counter');
			console.log('Inside helper "isCounterEven" (counter=' + counter + ')');
			return counter % 2 === 0;
		}
	});

	Template.hello.events({
		'click button': function () {
			// increment the counter when button is clicked
			Session.set('counter', Session.get('counter') + 1);
		}
	});
}

