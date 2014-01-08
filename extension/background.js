(function() {
	'use strict';

	chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
		var mappingKey = 'nl.sjmulder.urlrewrite.mappings';
		var mappings = JSON.parse(localStorage[mappingKey] || '[]');

		for (var i = 0; i < mappings.length; i++) {
			var mapping = mappings[i];
			if (details.url.indexOf(mapping.sourceUrl) == 0) {
				var newUrl = mapping.destinationUrl + details.url.slice(mapping.sourceUrl.length);
				// console.log('rewriting', details.url, 'to', newUrl);
				
				chrome.tabs.update(details.tabId, { url: newUrl })
				break;
			}
		}
	});

})();
