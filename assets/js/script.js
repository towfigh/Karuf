// ********************
// ********************
// * Privacy & Policy *
// ********************
// ********************

const tabsCount = 13;

// check active tab for the visibility of privacy navigation arrows
function checkActiveTab() {
	const activeTabId = Number(
		$('.tn_policy_tab_btn.active')[0]?.id?.split('_')[3],
	);

	if (activeTabId === 1) {
		$('#goto_next_tab_privacy').removeClass('hidden');
		$('#goto_prev_tab_privacy').addClass('hidden');
		$('#privacy_navigator').removeClass('justify-between');
		$('#privacy_navigator').removeClass('justify-start');
		$('#privacy_navigator').addClass('justify-end');
	} else if (activeTabId === 13) {
		$('#goto_prev_tab_privacy').removeClass('hidden');
		$('#goto_next_tab_privacy').addClass('hidden');
		$('#privacy_navigator').removeClass('justify-between');
		$('#privacy_navigator').removeClass('justify-end');
		$('#privacy_navigator').addClasss('justify-start');
	} else {
		$('#goto_next_tab_privacy').removeClass('hidden');
		$('#goto_prev_tab_privacy').removeClass('hidden');
		$('#privacy_navigator').removeClass('justify-end');
		$('#privacy_navigator').removeClass('justify-start');
		$('#privacy_navigator').addClass('justify-between');
	}
}

// check active tab on load page
$(document).ready(function () {
	checkActiveTab();
});

// Handle click on tabs in Privacy & Policy
$('.tn_policy_tab_btn').click(function (e) {
	// get the tab id
	const tabId = e.target.id.split('_')[3];
	// hide all contents
	$('.tn_privacy_content').addClass('hidden');
	// show specific content
	$(`#privacy_content_${tabId}`).removeClass('hidden');
	// remove all active buttons
	$('.tn_policy_tab_btn').removeClass('active');
	// active specific button
	$(this).addClass('active');
	checkActiveTab();
});

// Handle go to next tab in Privacy & Policy
$('#goto_next_tab_privacy').click(function (e) {
	const nextTabId =
		Number($('.tn_policy_tab_btn.active')[0].id.split('_')[3]) + 1;
	if (nextTabId <= tabsCount) {
		$('.tn_privacy_content').addClass('hidden');
		$(`#privacy_content_${nextTabId}`).removeClass('hidden');
		$('.tn_policy_tab_btn').removeClass('active');
		$(`#privacy_tab_btn_${nextTabId}`).addClass('active');
	}
	checkActiveTab();
});

// Handle go to next tab in Privacy & Policy
$('#goto_prev_tab_privacy').click(function (e) {
	const prevTabId =
		Number($('.tn_policy_tab_btn.active')[0].id.split('_')[3]) - 1;
	if (prevTabId > 0) {
		$('.tn_privacy_content').addClass('hidden');
		$(`#privacy_content_${prevTabId}`).removeClass('hidden');
		$('.tn_policy_tab_btn').removeClass('active');
		$(`#privacy_tab_btn_${prevTabId}`).addClass('active');
	}
	checkActiveTab();
});

// ***************
// ***************
// **** F A Q ****
// ***************
// ***************

// Handle change tab in faq page
function setFaqActiveTab(id) {
	$('.faq_questions_holder').addClass('hidden');
	$(`#faq_questions_holder_${id}`).removeClass('hidden');
	$('.faq_card').removeClass('active');
	$(`#faq_card_${id}`).addClass('active');

	// $('#faq_card_1 img').attr('src', './assets/img/seller.png');
	// $('#faq_card_2 img').attr('src', './assets/img/buyer.png');
	// $('#faq_card_3 img').attr('src', './assets/img/payment.png');
	// $('#faq_card_4 img').attr('src', './assets/img/karuf.png');

	// if (id == 1) {
	// 	$('#faq_card_1 img').attr('src', './assets/img/seller-solid.png');
	// } else if (id == 2) {
	// 	$('#faq_card_2 img').attr('src', './assets/img/buyer-solid.png');
	// } else if (id == 3) {
	// 	$('#faq_card_3 img').attr('src', './assets/img/payment-solid.png');
	// } else if (id == 4) {
	// 	$('#faq_card_4 img').attr('src', './assets/img/karuf-solid.png');
	// }
}

function changeFaqTabIcon(id) {
	$('#faq_card_1 img').attr(
		'src',
		'https://karuf.com/public/castum-page/img/seller.png',
	);
	$('#faq_card_2 img').attr(
		'src',
		'https://karuf.com/public/castum-page/img/buyer.png',
	);
	$('#faq_card_3 img').attr(
		'src',
		'https://karuf.com/public/castum-page/img/payment.png',
	);
	$('#faq_card_4 img').attr(
		'src',
		'https://karuf.com/public/castum-page/img/karuf.png',
	);

	if (id == 1) {
		$('#faq_card_1 img').attr(
			'src',
			'https://karuf.com/public/castum-page/img/seller-solid.png',
		);
	} else if (id == 2) {
		$('#faq_card_2 img').attr(
			'src',
			'https://karuf.com/public/castum-page/img/buyer-solid.png',
		);
	} else if (id == 3) {
		$('#faq_card_3 img').attr(
			'src',
			'https://karuf.com/public/castum-page/img/payment-solid.png',
		);
	} else if (id == 4) {
		$('#faq_card_4 img').attr(
			'src',
			'https://karuf.com/public/castum-page/img/karuf-solid.png',
		);
	}
}

$('.faq_card').mouseenter(function (e) {
	let targetButton;
	// Get the clicked object
	const clickedItem = e.target;
	// handle clicking from different objects
	if ($(clickedItem).is('p')) {
		targetButton = $(clickedItem).parent();
	} else if ($(clickedItem).is('img')) {
		targetButton = $(clickedItem).parent();
	} else if ($(clickedItem).is('button')) {
		targetButton = $(clickedItem);
	}
	const clickedId = $(targetButton).attr('id').split('_')[2];
	changeFaqTabIcon(clickedId);
});

// $('.faq_card').mouseout(function () {
// 	$('#faq_card_1 img').attr('src', './assets/img/seller.png');
// 	$('#faq_card_2 img').attr('src', './assets/img/buyer.png');
// 	$('#faq_card_3 img').attr('src', './assets/img/payment.png');
// 	$('#faq_card_4 img').attr('src', './assets/img/karuf.png');
// });

$(document).ready(function () {
	setFaqActiveTab(1);
});

$('.faq_card').click(function (e) {
	let targetButton;
	// Get the clicked object
	const clickedItem = e.target;
	// handle clicking from different objects
	if ($(clickedItem).is('p')) {
		targetButton = $(clickedItem).parent();
	} else if ($(clickedItem).is('img')) {
		targetButton = $(clickedItem).parent();
	} else if ($(clickedItem).is('button')) {
		targetButton = $(clickedItem);
	}
	const clickedId = $(targetButton).attr('id').split('_')[2];
	setFaqActiveTab(clickedId);
});

// Handle faq accordions
function openFaqAccordion(id, isClose) {
	if (isClose) {
		$(`.tn_faq_accar_btn i`).addClass('fa-circle-plus');
		$(`.tn_faq_accar_btn i`).removeClass('fa-circle-minus');
		$('.tn_faq_accar_body').css('height', '0');
		$(`#faq_body_${id}`).css('height', 'auto');
		$(`#faq_accar_${id} i`).removeClass('fa-circle-plus');
		$(`#faq_accar_${id} i`).addClass('fa-circle-minus');
	} else {
		$(`#faq_accar_${id} i`).addClass('fa-circle-plus');
		$(`#faq_accar_${id} i`).removeClass('fa-circle-minus');
		$('.tn_faq_accar_body').css('height', '0');
	}
}

$('.tn_faq_accar_btn').click(function (e) {
	let targetButton;
	// Get the clicked object
	const clickedItem = e.target;
	// handle clicking from different objects
	if ($(clickedItem).is('i')) {
		targetButton = $(clickedItem).parent();
	} else if ($(clickedItem).is('h1')) {
		targetButton = $(clickedItem).parent();
	} else if ($(clickedItem).is('span')) {
		targetButton = $(clickedItem).parent().parent();
	} else if ($(clickedItem).is('button')) {
		targetButton = $(clickedItem);
	}
	const clickedId = $(targetButton).attr('id').split('_')[2];
	const isClose = $(`#faq_body_${clickedId}`).height() === 0;
	openFaqAccordion(clickedId, isClose);
});

// ***************
// ***************
// ** HOW WORKS **
// ***************
// ***************

// Handle click on freelancers buttons
$('#btn_how_freelancers').click(function (e) {
	$(`#btn_how_freelancers`).addClass('active');
	$(`#howsteps_freelancers`).removeClass('hidden');
	$(`#btn_how_buyers`).removeClass('active');
	$(`#howsteps_buyers`).addClass('hidden');
});

// Handle click on buyers buttons
$('#btn_how_buyers').click(function (e) {
	$(`#btn_how_freelancers`).removeClass('active');
	$(`#howsteps_freelancers`).addClass('hidden');
	$(`#btn_how_buyers`).addClass('active');
	$(`#howsteps_buyers`).removeClass('hidden');
});

// Handle how it works accordions
function openHowAccordion(id, isClose) {
	if (isClose) {
		$(`.tn_how_accar_btn i`).addClass('fa-circle-plus');
		$(`.tn_how_accar_btn i`).removeClass('fa-circle-minus');
		$('.tn_how_accar_body').css('height', '0');
		$(`#how_body_${id}`).css('height', 'auto');
		$(`#how_accar_${id} i`).removeClass('fa-circle-plus');
		$(`#how_accar_${id} i`).addClass('fa-circle-minus');
	} else {
		$(`#how_accar_${id} i`).addClass('fa-circle-plus');
		$(`#how_accar_${id} i`).removeClass('fa-circle-minus');
		$('.tn_how_accar_body').css('height', '0');
	}
}

$('.tn_how_accar_btn').click(function (e) {
	let targetButton;
	// Get the clicked object
	const clickedItem = e.target;
	// handle clicking from different objects
	if ($(clickedItem).is('i')) {
		targetButton = $(clickedItem).parent();
	} else if ($(clickedItem).is('h1')) {
		targetButton = $(clickedItem).parent();
	} else if ($(clickedItem).is('span')) {
		targetButton = $(clickedItem).parent().parent();
	} else if ($(clickedItem).is('button')) {
		targetButton = $(clickedItem);
	}
	const clickedId = $(targetButton).attr('id').split('_')[2];
	const isClose = $(`#how_body_${clickedId}`).height() === 0;
	openHowAccordion(clickedId, isClose);
});
