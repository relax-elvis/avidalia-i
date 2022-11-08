$("#form form").validate({
	rules: {
		name: {
			required: true,
			minlength: 2
		},
		phone: {
			required: true,
			minlength: 5,
			digits: true
		},
		email: {
			required: true,
			email: true
		},
		check_form: {
			required: true
		}
	},
	messages: {	
		name: "Introduzca su nombre",
		phone: "Introduza un teléfono",
		email: "Introduzca un E-mail"
	}
});

$("#form form input[name='check_form']").change(function() {
	$(this).removeClass('error');
});
$('#form form').submit(function(e){
	e.preventDefault();
	if($("#form form input[name='check_form']").prop("checked") === false) {
		$("#form form input[name='check_form']").addClass('error');
	} else {
		if($("#form form").valid() === true) {
			$.ajax({
				type: "POST",
				url: "php/contact-form.php",
				data: {
					name: $("#form form #name").val(),
					email: $("#form form #email").val(),
					phone: $("#form form #phone").val(),
					hora_contacto: $("#form form #hora_contacto").val(),
					comments: $("#form form #comments").val()
				},
				dataType: "json",
				success: function(e) {

					console.log(e.response);

					if (e.response == "success") {

						var dataLayer = window.dataLayer || [];
						dataLayer.push({ 'event': 'cfsend' });

						$('#form form').hide();
						$('.p_contact .form-error').hide();
						$('.p_contact .form-success').show();

					} else {
						
						$('#form form').hide();
						$('.p_contact .form-success').hide();
						$('.p_contact .form-error').show();
					}
				}
			   
			});
		}
	}
	
});