// ******************
//  Privacy & Policy
// ******************

const tabsCount = 13;

// check active tab for the visibility of privacy navigation arrows
function checkActiveTab() {
	const activeTabId = Number(
		$('.tn_policy_tab_btn.active')[0].id.split('_')[3],
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
