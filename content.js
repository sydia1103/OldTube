(function() {
        function restoreShowMoreButton() {
            window.removeEventListener('DOMContentLoaded', restoreShowMoreButton);
            const actionPanel = document.getElementById('action-panel-details');
            const showMore = document.querySelector('button[data-gen204="feature=watch-show-more-metadata"]');

            if (!actionPanel || showMore) {
                return;
            }
            actionPanel.insertAdjacentHTML('beforeend',
                '<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-collapsed-body yt-uix-gen204" type="button" onclick="return false;" data-gen204="feature=watch-show-more-metadata"><span class="yt-uix-button-content">Show more</span></button>' +
                '<button class="yt-uix-button yt-uix-button-size-default yt-uix-button-expander yt-uix-expander-head yt-uix-expander-body" type="button" onclick="return false;"><span class="yt-uix-button-content">Show less</span></button>'
            );
        }

        function onPbj(afterFix) {
			var params = new URLSearchParams(window.location.search.startsWith('?') ? window.location.search.substring(1) : window.location.search);
            if (params.get('pbj') !== null) {
                params.delete('pbj');
				params.delete('spfreload');
                var path = params.toString();
                if (path !== "") path = '?' + path;
                history.replaceState(history.state, window.document.title, window.location.pathname + path);
            }
            afterFix();
        }

        onPbj(() => {
            if (window.location.pathname === '/watch') window.addEventListener('DOMContentLoaded', restoreShowMoreButton);
            window.addEventListener('spfdone', () => {
                restoreShowMoreButton();
                onPbj(() => {});
            });
        });

})();