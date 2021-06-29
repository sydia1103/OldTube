function processVideoList(list) {
    var videos = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i].tvMusicVideoRenderer !== undefined) {
            var video = list[i].tvMusicVideoRenderer;
            var watchCount = video.tertiaryText.runs;
			var dynamicThumbnail = video.richThumbnail === undefined ? video.thumbnail.thumbnails[1].url : video.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0].url;
            videos.push({
				tracking: video.menu.menuRenderer.trackingParams,
                channelName: video.secondaryText.runs[0].text,
                channelId: video.menu.menuRenderer.items[0].menuNavigationItemRenderer.navigationEndpoint.browseEndpoint.browseId,
                videoId: video.navigationEndpoint.watchEndpoint.videoId,
                name: video.primaryText.runs[0].text,
                length: video.lengthText.runs[0].text,
                age: watchCount[2].text,
                watchCount: watchCount[0].text,
                thumbnail: video.thumbnail.thumbnails[1].url,
                dynamicThumbnail: dynamicThumbnail
            });
        } else if (list[i].gridVideoRenderer !== undefined) {
            var video = list[i].gridVideoRenderer;
			var length = video.badges === undefined ? video.lengthText.runs[0].text : "LIVE";
			var age = video.publishedTimeText === undefined ? "NOW" : video.publishedTimeText.runs[0].text;
			var dynamicThumbnail = video.richThumbnail === undefined ? video.thumbnail.thumbnails[1].url : video.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails[0].url;
            videos.push({
				tracking: video.menu.menuRenderer.trackingParams,
                channelName: video.longBylineText.runs[0].text,
                channelId: video.menu.menuRenderer.items[0].menuNavigationItemRenderer.navigationEndpoint.browseEndpoint.browseId,
                videoId: video.navigationEndpoint.watchEndpoint.videoId,
                name: video.title.runs[0].text,
                length: length,
                age: age,
                watchCount: video.shortViewCountText.runs[0].text,
                thumbnail: video.thumbnail.thumbnails[1].url,
                dynamicThumbnail: dynamicThumbnail
            });
        }
    }
    return videos;
}

function generateHomeJson(content) {
    return JSON.stringify({
        "body": {
            "debug": "",
            "appbar-content": "<div id=\"appbar-nav\" class=\"appbar-content-hidable\">\n<ul class=\"appbar-nav-menu\"><li>    <h2 class=\"epic-nav-item-heading \" aria-selected=\"true\">\n      Home\n    </h2>\n</li><li>    <a  href=\"/feed/trending\" class=\"yt-uix-button   spf-link yt-uix-sessionlink yt-uix-button-epic-nav-item yt-uix-button-size-default\" data-sessionlink=\"ei=G32RXo-sCZaWkwaNi6iABw&amp;ved=CAUQwy0YASITCM-l3tn33-gCFRbLxAodjQUKcCiOHg\" aria-selected=\"false\"><span class=\"yt-uix-button-content\">Trending</span></a>\n</li></ul>  </div>",
            "alerts": "",
            "player-unavailable": "",
            "early-body": "",
            "content": content,
            "ticker-content": "",
            "player-playlist": "",
            "header": ""
        },
        "title": "YouTube",
        "name": "other",
        "foot": "<script >var ytspf = ytspf || {};ytspf.enabled = true;ytspf.config = {'reload-identifier': 'spfreload'};ytspf.config['request-headers'] = {'X-YouTube-Ad-Signals': {toString: function() {return (window['yt'] && yt['ads_'] && yt.ads_['signals_'] &&yt.ads_.signals_['getAdSignalsString']) ?yt.ads_.signals_.getAdSignalsString() :'';}},'X-YouTube-Identity-Token': null};ytspf.config['experimental-request-headers'] = ytspf.config['request-headers'];ytspf.config['cache-max'] = 50;ytspf.config['navigate-limit'] = 50;ytspf.config['navigate-lifetime'] = 64800000;</script>\n  <script src=\"/yts/jsbin/spf-vflQdK-YD/spf.js\" type=\"text/javascript\" name=\"spf/spf\" ></script>\n  <script src=\"/yts/jsbin/www-en_US-vflKLJ01L/base.js\"  name=\"www/base\" ></script>\n<script >spf.script.path({'www/': '/yts/jsbin/www-en_US-vflKLJ01L/'});var ytdepmap = {\"www/base\": null, \"www/common\": \"www/base\", \"www/angular_base\": \"www/common\", \"www/channels_accountupload\": \"www/common\", \"www/channels\": \"www/common\", \"www/dashboard\": \"www/common\", \"www/downloadreports\": \"www/common\", \"www/experiments\": \"www/common\", \"www/feed\": \"www/common\", \"www/legomap\": \"www/common\", \"www/promo_join_network\": \"www/common\", \"www/results_harlemshake\": \"www/common\", \"www/results\": \"www/common\", \"www/results_starwars\": \"www/common\", \"www/subscriptionmanager\": \"www/common\", \"www/unlimited\": \"www/common\", \"www/watch\": \"www/common\", \"www/ypc_bootstrap\": \"www/common\", \"www/ypc_core\": \"www/common\", \"www/channels_edit\": \"www/channels\", \"www/live_dashboard\": \"www/angular_base\", \"www/videomanager\": \"www/angular_base\", \"www/watch_autoplayrenderer\": \"www/watch\", \"www/watch_edit\": \"www/watch\", \"www/watch_editor\": \"www/watch\", \"www/watch_promos\": \"www/watch\", \"www/watch_speedyg\": \"www/watch\", \"www/watch_transcript\": \"www/watch\", \"www/watch_videoshelf\": \"www/watch\", \"www/ct_advancedsearch\": \"www/videomanager\", \"www/my_videos\": \"www/videomanager\", \"www/$weak$\": [\"www/angular_base\", \"www/base\", \"www/channels_accountupload\", \"www/channels_edit\", \"www/channels\", \"www/common\", \"www/ct_advancedsearch\", \"www/dashboard\", \"www/downloadreports\", \"www/experiments\", \"www/feed\", \"www/legomap\", \"www/live_dashboard\", \"www/my_videos\", \"www/promo_join_network\", \"www/results_harlemshake\", \"www/results\", \"www/results_starwars\", \"www/subscriptionmanager\", \"www/unlimited\", \"www/videomanager\", \"www/watch_autoplayrenderer\", \"www/watch_edit\", \"www/watch_editor\", \"www/watch\", \"www/watch_promos\", \"www/watch_speedyg\", \"www/watch_transcript\", \"www/watch_videoshelf\", \"www/ypc_bootstrap\", \"www/ypc_core\"]};spf.script.declare(ytdepmap);</script><script >if (window.ytcsi) {window.ytcsi.tick(\"je\", null, '');}</script>  \n\n  <script >\n    \n\n  yt.setConfig('JS_PAGE_MODULES', ['www/feed', 'www/ypc_bootstrap']);\n  yt.setConfig('DISMISS_THROUGH_IT', true);\n\n      yt.setConfig({\n        'GUIDE_SELECTED_ITEM': \"0qDduQEREg9GRXdoYXRfdG9fd2F0Y2g%3D\"\n      });\n\n      yt.setConfig({\n    'GUIDED_HELP_LOCALE': \"ru_RU\",\n    'GUIDED_HELP_ENVIRONMENT': \"prod\"\n  });\n\n  </script>\n  \n<script >yt.setConfig({GAPI_HINT_PARAMS: \"m;\\/_\\/scs\\/abc-static\\/_\\/js\\/k=gapi.gapi.en.OfYsKuVZ3qI.O\\/d=1\\/ct=zgms\\/rs=AHpOoo8UDq_6isr1vipw5cUlPTPPdx3_0A\\/m=__features__\",INNERTUBE_API_VERSION: \"v1\",INNERTUBE_API_KEY: \"AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8\",INNERTUBE_CONTEXT_CLIENT_VERSION: \"1.20200406.06.02\",INNERTUBE_CONTEXT_CLIENT_NAME: 1,'VISITOR_DATA': \"CgsxR2RZME9HaU5oZyib-sX0BQ%3D%3D\",'DELEGATED_SESSION_ID': null,'GAPI_HOST': \"https:\\/\\/apis.google.com\",'GAPI_LOCALE': \"ru_RU\",'INNERTUBE_CONTEXT_HL': \"ru\",'INNERTUBE_CONTEXT_GL': \"SA\",'XHR_APIARY_HOST': \"youtubei.youtube.com\"});yt.setConfig({'PAGE_NAME': \"index\",'LOGGED_IN': false,'SESSION_INDEX': null,'VALID_SESSION_TEMPDATA_DOMAINS': [\"www.youtube.com\",\"gaming.youtube.com\"],'PARENT_TRACKING_PARAMS': \"\",'FORMATS_FILE_SIZE_JS': [\"%s Б\",\"%s КБ\",\"%s МБ\",\"%s ГБ\",\"%s ТБ\"],'ONE_PICK_URL': \"\",'GOOGLEPLUS_HOST': \"https:\\/\\/plus.google.com\",'PAGEFRAME_JS': \"\\/yts\\/jsbin\\/www-pageframe-vflt59ThM\\/www-pageframe.js\",'GAPI_LOADER_URL': \"\\/yts\\/jsbin\\/www-gapi-loader-vflcXz3_f\\/www-gapi-loader.js\",'JS_COMMON_MODULE': \"\\/yts\\/jsbin\\/www-en_US-vflKLJ01L\\/common.js\",'PAGE_FRAME_DELAYLOADED_CSS': \"\\/yts\\/cssbin\\/www-pageframedelayloaded-vflZQkKIB.css\",'EXPERIMENT_FLAGS': {\"autoplay_pause_by_lact_sampling_fraction\":0.0,\"web_op_endpoint_blacklist\":[\"createBackstagePostEndpoint\",\"createLiveChatPollEndpoint\",\"liveChatActionEndpoint\"],\"web_deprecate_service_ajax_map_dependency\":true,\"consent_url_override\":\"\",\"desktop_notification_high_priority_ignore_push\":true,\"live_chat_unicode_emoji_json_url\":\"https:\\/\\/www.gstatic.com\\/youtube\\/img\\/emojis\\/emojis-svg-4.json\",\"web_gel_timeout_cap\":true,\"enable_premium_voluntary_pause\":true,\"enable_watch_next_pause_autoplay_lact\":true,\"log_vis_on_tab_change\":true,\"web_client_counter_random_seed\":true,\"disable_thumbnail_preloading\":true,\"custom_csi_timeline_use_gel\":true,\"retry_web_logging_batches\":true,\"web_system_health_fraction\":0.01,\"use_watch_fragments2\":true,\"desktop_notification_set_title_bar\":true,\"delay_gel_until_config_ready\":true,\"desktop_pyv_on_watch_missing_params\":true,\"desktop_polymer_video_masthead_always_use_responsive_iframe\":true,\"desktop_image_companion_wta_support\":true,\"disable_legacy_desktop_remote_queue\":true,\"desktop_videowall_companion_wta_support\":true,\"autoescape_tempdata_url\":true,\"gfeedback_for_signed_out_users_enabled\":true,\"web_op_continuation_type_blacklist\":[],\"ignore_empty_xhr\":true,\"desktop_shopping_companion_wta_support\":true,\"polymer_verifiy_app_state\":true,\"should_clear_video_data_on_player_cued_unstarted\":true,\"log_web_meta_interval_ms\":0,\"live_chat_increased_min_height\":true,\"cancel_pending_navs\":true,\"desktop_polymer_video_masthead_session_tempdata_ttl\":30,\"desktop_sparkles_light_cta_button\":true,\"disable_simple_mixed_direction_formatted_strings\":true,\"polymer_bad_build_labels\":true,\"app_settings_snapshot_min_time_between_snapshots_hours\":24,\"live_chat_client_url\":true,\"service_worker_push_logged_out_prompt_watches\":-1,\"botguard_async_snapshot_timeout_ms\":2000,\"no_sub_count_on_sub_button\":true,\"csi_on_gel\":true,\"botguard_periodic_refresh\":true,\"service_worker_enabled\":true,\"web_always_load_chat_support\":true,\"enable_ve_tracker_key\":true,\"desktop_action_companion_wta_support\":true,\"enable_docked_chat_messages\":true,\"enable_mixed_direction_formatted_strings\":true,\"web_gel_debounce_ms\":10000,\"suppress_gen_204\":true,\"kevlar_guide_refresh\":true,\"desktop_pyv_on_watch_override_lact\":true,\"disable_legacy_desktop_remote_queue_watch\":true,\"warm_load_nav_start_web\":true,\"overwrite_polyfill_on_logging_lib_loaded\":true,\"web_op_signal_type_blacklist\":[],\"service_worker_push_enabled\":true,\"service_worker_scope\":\"\\/\",\"web_yt_config_context\":true,\"html5_experiment_id_label\":0,\"web_network_combined_catch\":true,\"watch_next_pause_autoplay_lact_sec\":4500,\"pass_biscotti_id_in_header_ajax\":true,\"prefetch_comments_ms_after_video\":0,\"web_use_beacon_api_for_ad_click_server_pings\":true,\"web_post_search\":true,\"web_api_url\":true,\"service_worker_push_prompt_delay_microseconds\":3888000000000,\"log_window_onerror_fraction\":0.1,\"web_logging_max_batch\":150,\"mdx_enable_privacy_disclosure_ui\":true,\"enable_ypc_spinners\":true,\"service_worker_push_force_notification_prompt_tag\":\"1\",\"service_worker_push_watch_page_prompt\":true,\"service_worker_push_home_page_prompt\":true,\"autoplay_pause_by_lact_sec\":0,\"service_worker_push_prompt_cap\":-1,\"enable_read_more_format_decoration\":true},'GUIDED_HELP_PARAMS': {\"logged_in\":\"0\",\"context\":\"yt_web_w2w\"},'HIGH_CONTRAST_MODE_CSS': \"\\/yts\\/cssbin\\/www-highcontrastmode-vfl2pKdoC.css\",'PREFETCH_CSS_RESOURCES' : [\"\\/s\\/player\\/4fbb4d5b\\/www-player.css\"],'PREFETCH_JS_RESOURCES': [\"\\/yts\\/jsbin\\/www-pagead-id-vflTKAslg\\/www-pagead-id.js\",\"\\/s\\/player\\/4fbb4d5b\\/player_ias.vflset\\/ru_RU\\/base.js\"],'PREFETCH_LINKS': false,'PREFETCH_LINKS_MAX': 1,'PREFETCH_AUTOPLAY': false,'PREFETCH_AUTOPLAY_TIME': 0,'PREFETCH_AUTONAV': false,'PREBUFFER_MAX': 1,'PREBUFFER_LINKS': false,'PREBUFFER_AUTOPLAY': false,'PREBUFFER_AUTONAV': false,'WATCH_LATER_BUTTON': \"\\n\\n  \\u003cbutton class=\\\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip\\\" type=\\\"button\\\" onclick=\\\";return false;\\\" title=\\\"Смотреть позже\\\" role=\\\"button\\\" data-video-ids=\\\"__VIDEO_ID__\\\" data-button-menu-id=\\\"shared-addto-watch-later-login\\\"\\u003e\\u003cspan class=\\\"yt-uix-button-arrow yt-sprite\\\"\\u003e\\u003c\\/span\\u003e\\u003c\\/button\\u003e\\n\",'WATCH_QUEUE_BUTTON': \"\",'WATCH_QUEUE_MENU': \"  \\u003cspan class=\\\"thumb-menu dark-overflow-action-menu video-actions\\\"\\u003e\\n  \\u003c\\/span\\u003e\\n\",'SAFETY_MODE_PENDING': false,'I18N_PLURAL_RULES': function(n) { var n10 = n % 10; var n100 = n % 100; return ((n10 == 1) && (n100 != 11)) ? 'one' : ((n == parseInt(n, 10) && 2 <= n10 && n10 <= 4) && !(n == parseInt(n, 10) && 12 <= n100 && n100 <= 14)) ? 'few' : ((n10 == 0) || (n == parseInt(n, 10) && 5 <= n10 && n10 <= 9) || (n == parseInt(n, 10) && 11 <= n100 && n100 <= 14)) ? 'many' : 'other'; },'ZWIEBACK_PING_URLS': [\"https:\\/\\/www.google.com\\/pagead\\/lvz?req_ts=1586593051\\u0026pg=index\\u0026evtid=AG5LH5uOMUbyNzo3oFo1Vo8gpIUaskL2Th97W3FVK41D0cG3i5Rqs3wltgdA1-8x8ovhGASZd1RTJV2dFKlOwpBgTiANx3geBA\\u0026sigh=ALGA_n1PFNxGynRjw5W_1Y4tpaVyw5QUbA\"],'LOCAL_DATE_TIME_CONFIG': {\"shortMonths\":[\"янв.\",\"февр.\",\"мар.\",\"апр.\",\"мая\",\"июн.\",\"июл.\",\"авг.\",\"сент.\",\"окт.\",\"нояб.\",\"дек.\"],\"formatWeekdayShortTime\":\"EE HH:mm\",\"dateFormats\":[\"d MMMM y 'г'., HH:mm\",\"d MMMM y 'г'.\",\"d MMM y 'г'.\",\"d MMM y 'г'.\"],\"formatShortTime\":\"HH:mm\",\"shortWeekdays\":[\"вс\",\"пн\",\"вт\",\"ср\",\"чт\",\"пт\",\"сб\"],\"amPms\":null,\"formatLongDate\":\"d MMMM y 'г'., HH:mm\",\"weekendRange\":[6,5],\"months\":[\"января\",\"февраля\",\"марта\",\"апреля\",\"мая\",\"июня\",\"июля\",\"августа\",\"сентября\",\"октября\",\"ноября\",\"декабря\"],\"firstDayOfWeek\":0,\"firstWeekCutoffDay\":3,\"formatShortDate\":\"d MMM y 'г'.\",\"weekdays\":[\"воскресенье\",\"понедельник\",\"вторник\",\"среда\",\"четверг\",\"пятница\",\"суббота\"],\"formatLongDateOnly\":\"d MMMM y 'г'.\"},'PAGE_CL': 305312232,'PAGE_BUILD_LABEL': \"youtube.ytfe.desktop_20200405_6_RC2\",'VARIANTS_CHECKSUM': \"5419dd77237a5b5c84e92cefc7e3c7eb\",'CLIENT_PROTOCOL': \"HTTP\\/1.1\",'CLIENT_TRANSPORT': \"tcp\",'MDX_ENABLE_CASTV2': true,'MDX_ENABLE_QUEUE': true,'SERVICE_WORKER_PROMPT_NOTIFICATIONS': true,'FEEDBACK_BUCKET_ID': \"Home\",'FEEDBACK_LOCALE_LANGUAGE': \"ru\",'FEEDBACK_LOCALE_EXTRAS': {\"logged_in\":false,\"accept_language\":\"ru,en-GB;q=0.7,en;q=0.3\",\"experiments\":\"23700266,23701207,23701297,23701882,23709359,23709532,23710313,23710863,23718617,23722367,23725261,23725678,23736982,23744176,23746939,23755417,23755966,23756150,23762106,23767295,23768776,23772279,23778038,23783094,23785483,23785890,23789385,23790586,23790726,23791272,23793228,23794214,23794339,23802891,23804281,23810148,23811991,23814553,23815891,23816681,23817291,23828140,23832002,23832238,23833239,23833442,23834232,23836115,23837040,23837354,23837993,23839597,23839800,23841121,23841299,23841649,23842233,23842638,23848978,23853114,23854169,23854352,23854999,23855886,23856950,23857949,23857970,23858017,23858021,23858564,23858785,23859025,23859094,23859802,23859863,23860245,23860782,23860859,23861263,23861666,23861905,23862065,23862294,23862451,23862582,23862645,23862969,23863739,23864035,23865206,23865223,23865635,23865748,23868333,23868611,23868613,23869527,23869558,23870328,23870854,23871729,23872595,23872921,23873057,23873107,23873111,23873929,23873957,23874051,23874243,23874531,23874591,23874780,23874940,23874981,23875530,23875839,23875848,23876012,23876093,23876178,23876343,23876458,23876627,23877019,23877068,23879388,23879430,23879768,23879795,23880323,23880389,23880633,23881037,23881126,23881484,23881599,23881751,23881871,23882034,23882437,23882502,23882513,23882555,23882832,23882973,23883046,23883172,23883566,23883975,23884181,23884263,23884266,23884504,23884593,23884697,23884762,23884995,23885022,23885106,23885280,23885590,23885618,23885639,23885905,23886108,23886796,23887076,23887242,23887733,23887780,23888047,23888210,23888423,23888528,23888763,23888897,23889042,23889688,23889698,23890397,23890527,23890641,23890680,23890712,23890721,23890756,23890811,23890840,23890891,23890928,23891370,23891426,23891814,23892006,23892838,23893086,23894441,23894449,24630796,24650107,24650115,39320564,39320582,39320593,39320614,39320626,39320657,9449243,9459803,9471235,9473372,9473386,9473390,9479456,9487037,9489266\"}});   yt.setConfig({\n    'GUIDED_HELP_LOCALE': \"ru_RU\",\n    'GUIDED_HELP_ENVIRONMENT': \"prod\"\n  });\nyt.setConfig('SPF_SEARCH_BOX', true);yt.setMsg({'ADDTO_CREATE_NEW_PLAYLIST': \"Создать новый плейлист\\n\",'ADDTO_CREATE_PLAYLIST_DYNAMIC_TITLE': \"  Создать новый плейлист \\u0026quot;$dynamic_title_placeholder\\u0026quot;\\n\",'ADDTO_WATCH_LATER': \"Watch later\",'ADDTO_WATCH_LATER_ADDED': \"Добавлено\",'ADDTO_WATCH_LATER_ERROR': \"Ошибка\",'ADDTO_WATCH_QUEUE': \"Watch Queue\",'ADDTO_WATCH_QUEUE_ADDED': \"Добавлено\",'ADDTO_WATCH_QUEUE_ERROR': \"Ошибка\",'ADDTO_TV_QUEUE': \"Queue\",'MASTHEAD_NOTIFICATIONS_LABEL': {\"few\": \"#\\u00a0\\u043d\\u0435\\u043f\\u0440\\u043e\\u0447\\u0438\\u0442\\u0430\\u043d\\u043d\\u044b\\u0445 \\u0443\\u0432\\u0435\\u0434\\u043e\\u043c\\u043b\\u0435\\u043d\\u0438\\u044f\", \"many\": \"#\\u00a0\\u043d\\u0435\\u043f\\u0440\\u043e\\u0447\\u0438\\u0442\\u0430\\u043d\\u043d\\u044b\\u0445 \\u0443\\u0432\\u0435\\u0434\\u043e\\u043c\\u043b\\u0435\\u043d\\u0438\\u0439\", \"one\": \"#\\u00a0\\u043d\\u0435\\u043f\\u0440\\u043e\\u0447\\u0438\\u0442\\u0430\\u043d\\u043d\\u043e\\u0435 \\u0443\\u0432\\u0435\\u0434\\u043e\\u043c\\u043b\\u0435\\u043d\\u0438\\u0435\", \"case1\": \"1\\u00a0\\u043d\\u0435\\u043f\\u0440\\u043e\\u0447\\u0438\\u0442\\u0430\\u043d\\u043d\\u043e\\u0435 \\u0443\\u0432\\u0435\\u0434\\u043e\\u043c\\u043b\\u0435\\u043d\\u0438\\u0435\", \"case0\": \"0\\u00a0\\u043d\\u0435\\u043f\\u0440\\u043e\\u0447\\u0438\\u0442\\u0430\\u043d\\u043d\\u044b\\u0445 \\u0443\\u0432\\u0435\\u0434\\u043e\\u043c\\u043b\\u0435\\u043d\\u0438\\u0439\", \"other\": \"# \\u043d\\u0435\\u043f\\u0440\\u043e\\u0447\\u0438\\u0442\\u0430\\u043d\\u043d\\u043e\\u0433\\u043e \\u0443\\u0432\\u0435\\u0434\\u043e\\u043c\\u043b\\u0435\\u043d\\u0438\\u044f\"},'MASTHEAD_NOTIFICATIONS_COUNT_99PLUS': \"99+\",'MDX_AUTOPLAY_OFF': 'Автовоспроизведение выключено','MDX_AUTOPLAY_ON': 'Автовоспроизведение включено'});  yt.setConfig('FEED_PRIVACY_CSS_URL', \"\\/yts\\/cssbin\\/www-feedprivacydialog-vfltb5-JE.css\");\n  yt.setConfig('FEED_PRIVACY_LIGHTBOX_ENABLED', true);\nyt.setConfig({'SBOX_JS_URL': \"\\/yts\\/jsbin\\/www-searchbox-vfl6f3ziG\\/www-searchbox.js\",'SBOX_SETTINGS': {\"REQUEST_LANGUAGE\":\"ru\",\"HAS_ON_SCREEN_KEYBOARD\":true,\"REQUEST_DOMAIN\":\"sa\"},'SBOX_LABELS': {\"SUGGESTION_DISMISS_LABEL\":\"Удалить\",\"SUGGESTION_DISMISSED_LABEL\":\"Подсказка удалена\"}});  yt.setConfig({\n    'YPC_LOADER_JS': \"\\/yts\\/jsbin\\/www-ypc-vflHXoub-\\/www-ypc.js\",\n    'YPC_LOADER_CSS': \"\\/yts\\/cssbin\\/www-ypc-vflx_KJhA.css\",\n    'YPC_SIGNIN_URL': \"https:\\/\\/accounts.google.com\\/ServiceLogin?uilel=3\\u0026continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Fhl%3Dru%26next%3D%252F%26action_handle_signin%3Dtrue%26app%3Ddesktop\\u0026service=youtube\\u0026passive=true\\u0026hl=ru\",\n    'DBLCLK_ADVERTISER_ID': \"2542116\",\n    'DBLCLK_YPC_ACTIVITY_GROUP': \"youtu444\",\n    'SUBSCRIPTION_URL': \"\\/subscription_ajax\",\n    'YPC_SWITCH_URL': \"\\/signin?skip_identity_prompt=True\\u0026next=%2F\\u0026action_handle_signin=true\\u0026feature=purchases\",\n    'YPC_GB_LANGUAGE': \"ru_RU\",\n    'YPC_MB_URL': \"https:\\/\\/payments.youtube.com\\/payments\\/v4\\/js\\/integrator.js?ss=md\",\n    'YPC_TRANSACTION_URL': \"\\/transaction_handler\",\n    'YPC_SUBSCRIPTION_URL': \"\\/ypc_subscription_ajax\",\n    'YPC_POST_PURCHASE_URL': \"\\/ypc_post_purchase_ajax\",\n    'YTR_FAMILY_CREATION_URL': \"https:\\/\\/families.google.com\\/webcreation?usegapi=1\",\n    'YTO_GTM_DATA': {'event': 'purchased', 'purchaseStatus': 'success'},\n    'YTO_GTM_1_BUTTON_CLICK_DATA': {'event': 'landingButtonClick', 'buttonPosition': '1'},\n    'YTO_GTM_2_BUTTON_CLICK_DATA': {'event': 'landingButtonClick', 'buttonPosition': '2'}\n  });\n  yt.setMsg({\n    'YPC_OFFER_OVERLAY': \"  \\n\",\n    'YPC_UNSUBSCRIBE_OVERLAY': \"  \\n\"\n  });\n  yt.setConfig('GOOGLE_HELP_CONTEXT', \"homepage\");\nytcsi.info('st', 640);ytcfg.set({\"CSI_SERVICE_NAME\":\"youtube\",\"TIMING_INFO\":{\"cver\":\"1.20200406.06.02\",\"c\":\"WEB\",\"yt_fn\":\"what_to_watch\",\"yt_ref\":\"www.youtube.com\",\"yt_li\":\"0\",\"GetHome_rid\":\"0x0e7c73448f39ceff\"}});;ytcfg.set({\"CSI_VIEWPORT\":true,\"TIMING_AFT_KEYS\":[\"cpt\"],\"TIMING_ACTION\":\"home\"});;  yt.setConfig({\n      'XSRF_TOKEN': \"QUFFLUhqbk9UTHZXZWN1UDZwb0hZaENIcVNDRXpIQUI2d3xBQ3Jtc0ttV2l1bi1jU25TYlB1MUxfaTFRQnlKSlUwRk4xLVBkNlA0MS0wdFU5b2ZzRmNYRVMzN1Q5S1p6RlpKa2otUENJSzZRT1RnUFdJRUZOdXdkMWtKaHVSRHJPNFh6TVBNc05Hd01ZZ3pyZ1M2b3hJQTIzNGQ3cnFIZEh5dk5vcTd0WWpVdlRLTEpVYU9sVTdiQ1ZyTWk1aUlJWWoxTXc=\",\n      'XSRF_FIELD_NAME': \"session_token\",\n\n      'XSRF_REDIRECT_TOKEN': \"LBLcRKSG0Rxnl1lmoD-qfp21mvV8MTU4NjY3OTQ1MUAxNTg2NTkzMDUx\"  });\nyt.setConfig('ID_TOKEN', null);window.ytcfg.set('SERVICE_WORKER_KILLSWITCH', false);  yt.setConfig('THUMB_DELAY_LOAD_BUFFER', 300);\nif (window.ytcsi) {window.ytcsi.tick(\"jl\", null, '');}</script>",
		"url": "/",
        "attr": {
            "body": {
                "class": "  visibility-logging-enabled  ltr  ie ie11  exp-invert-logo exp-kevlar-settings exp-mouseover-img exp-responsive exp-search-big-thumbs   site-center-aligned site-as-giant-card sitewide-ticker-visible guide-pinning-enabled   not-nirvana-dogfood    flex-width-enabled      flex-width-enabled-snap  "
            },
            "logo-container": {
                "data-sessionlink": ""
            },
            "player": {
                "class": "  off-screen "
            },
            "appbar-content": {
                "class": ""
            },
            "player-unavailable": {
                "class": "  hid  "
            },
            "page": {
                "class": "  home "
            },
            "content": {
                "class": "  content-alignment"
            },
            "player-playlist": {
                "class": "  hid  "
            },
            "masthead-search": {
                "data-clicktracking": "CAIQ7VAiEwjPpd7Z99_oAhUWy8QKHY0FCnAojh4",
                "data-visibility-tracking": "CAIQ7VAiEwjPpd7Z99_oAhUWy8QKHY0FCnAojh4",
                "class": "  search-form consolidated-form  vve-check"
            },
            "footer-logo-link": {
                "data-sessionlink": "ei=G32RXo-sCZaWkwaNi6iABw&ved=CAEQpmEiEwjPpd7Z99_oAhUWy8QKHY0FCnAojh4"
            }
        },
        "head": "<script>ytcfg.set(\"ROOT_VE_TYPE\", 3854);ytcfg.set(\"EVENT_ID\", \"G32RXo-sCZaWkwaNi6iABw\");</script>\n  \n\n  <script >yt.www.masthead.sizing.runBeforeBodyIsReady(true,true,true);</script>\n  \n    <link rel=\"stylesheet\" href=\"/yts/cssbin/www-core-vflRlRixQ.css\" name=\"www-core\">\n    <link rel=\"stylesheet\" href=\"/yts/cssbin/www-home-c4-vfl182B0f.css\" name=\"www-home-c4\">\n\n      <link rel=\"stylesheet\" href=\"/s/player/4fbb4d5b/www-player.css\" name=\"player/www-player\">"
    });
}

function generateSlider(name, tracking, videos) {
	var items = '';
	if (videos.length < 1) return items;
	for (var i = 0; i < videos.length; i++) {
		var video = videos[i];
		items += `<li class=\"yt-shelf-grid-item yt-uix-shelfslider-item\"><div class=\"yt-lockup yt-lockup-grid yt-lockup-video clearfix\" data-context-item-id=\"${video.videoId}\" data-visibility-tracking=\"${video.tracking}\"><div class=\"yt-lockup-dismissable\"><div class=\"yt-lockup-thumbnail contains-addto\"><a aria-hidden=\"true\" href=\"https:\/\/www.youtube.com\/watch?v=${video.videoId}\" class=\" yt-uix-sessionlink spf-link \" data-sessionlink=\"itct=CFgQlDUYASITCL2KwNSt9-gCFVqUxAodA9APNjIKZy1oaWdoLXRydloPRkV3aGF0X3RvX3dhdGNo\"><div class=\"yt-thumb video-thumb\"><span class=\"yt-thumb-simple\"> <img onload=\";window.__ytRIL &amp;&amp; __ytRIL(this)\" data-ytimg=\"1\" src=\"${video.thumbnail}\" height=\"110\" alt=\"\" width=\"196\"><span class=\"video-time\" aria-hidden=\"true\">${video.length}<\/span><\/span><\/div><\/a> <span class=\"thumb-menu dark-overflow-action-menu video-actions\"> <\/span> <button class=\"yt-uix-button yt-uix-button-size-small yt-uix-button-default yt-uix-button-empty yt-uix-button-has-icon no-icon-markup addto-button video-actions spf-nolink hide-until-delayloaded addto-watch-later-button-sign-in yt-uix-tooltip\" type=\"button\" onclick=\";return false;\" title=\"Watch later\" role=\"button\" data-button-menu-id=\"shared-addto-watch-later-login\" data-video-ids=\"${video.videoId}\"><span class=\"yt-uix-button-arrow yt-sprite\"><\/span><\/button><\/div><div class=\"yt-lockup-content\"><h3 class=\"yt-lockup-title \"><a href=\"https:\/\/www.youtube.com\/watch?v=${video.videoId}\" class=\" yt-ui-ellipsis yt-ui-ellipsis-2 yt-uix-sessionlink spf-link \" data-sessionlink=\"itct=CFgQlDUYASITCL2KwNSt9-gCFVqUxAodA9APNjIKZy1oaWdoLXRydloPRkV3aGF0X3RvX3dhdGNo\" title=\"${video.name}\" aria-describedby=\"description-id-212445\" dir=\"ltr\">${video.name}<\/a><span class=\"accessible-description\" id=\"description-id-${Math.ceil(Math.random() * 1000000)}\"> - Duration: ${video.length}.<\/span><\/h3><div class=\"yt-lockup-byline yt-ui-ellipsis yt-ui-ellipsis-2\"><a href=\"https:\/\/www.youtube.com\/channel\/${video.channelId}\" class=\"yt-uix-sessionlink spf-link \" data-sessionlink=\"itct=CFgQlDUYASITCL2KwNSt9-gCFVqUxAodA9APNg\">${video.channelName}<\/a><\/div><div class=\"yt-lockup-meta \"><ul class=\"yt-lockup-meta-info\"><li>${video.watchCount}<\/li><li>${video.age}<\/li><\/ul><\/div><\/div><\/div><\/div><\/li>`;
	}
	return `<li> <ol id=\"item-section-${Math.ceil(Math.random() * 1000000)}\" class=\"item-section\"> <li> <div class=\"feed-item-container browse-list-item-container yt-section-hover-container compact-shelf shelf-item branded-page-box clearfix\" data-visibility-tracking=\"${tracking}\" > <div class=\"feed-item-dismissable\"> <div class=\"shelf-title-table\"> <div class=\"shelf-title-row\"> <h2 class=\"branded-page-module-title shelf-title-cell\"><span class=\"branded-page-module-title-text\">${name}<\/span><\/h2> <div class=\"menu-container shelf-title-cell\"><\/div><\/div><\/div><div class=\"compact-shelf yt-uix-shelfslider yt-uix-shelfslider-at-head\"> <div class=\"yt-uix-shelfslider-body yt-viewport\"> <ul class=\"yt-uix-shelfslider-list\"> ${items} <\/ul> <\/div><button class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-shelf-slider-pager yt-uix-shelfslider-prev\" type=\"button\" onclick=\";return false;\"> <span class=\"yt-uix-button-content\"><span data-tooltip-text=\"Previous\" class=\"yt-uix-shelfslider-prev-arrow yt-uix-tooltip yt-sprite\" aria-label=\"Previous\"><\/span><\/span> <\/button> <button class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-shelf-slider-pager yt-uix-shelfslider-next\" type=\"button\" onclick=\";return false;\"> <span class=\"yt-uix-button-content\"><span data-tooltip-text=\"Next\" class=\"yt-uix-shelfslider-next-arrow yt-uix-tooltip yt-sprite\" aria-label=\"Next\"><\/span><\/span> <\/button> <\/div><\/div><div class=\"feed-item-dismissal-notices\"><\/div><\/div><\/li><\/ol> <\/li>`;
}

function generateHomePage(videos, continuation) {
	var sliders = '';
	for (var i = 0; i < videos.length; i++)
		sliders += generateSlider(videos[i].name, videos[i].tracking, videos[i].list);
	return generateHomeJson(`<div class=\"branded-page-v2-container branded-page-base-bold-titles branded-page-v2-container-flex-width branded-page-v2-secondary-column-hidden\"> <div class=\"branded-page-v2-col-container\"> <div class=\"branded-page-v2-col-container-inner\"> <div class=\"branded-page-v2-primary-col\"> <div class=\"yt-card clearfix\"> <div class=\"branded-page-v2-primary-col-header-container branded-page-v2-primary-column-content\"><\/div><div class=\"branded-page-v2-body branded-page-v2-primary-column-content\" id=\"\"> <div id=\"feed\" class=\"\"> <div id=\"feed-main-what_to_watch\" class=\"individual-feed\" data-feed-name=\"what_to_watch\" data-feed-type=\"main\"> <ol id=\"section-list-181245\" class=\"section-list\"> ${sliders} <\/ol> <button class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-default load-more-button yt-uix-load-more browse-items-load-more-button scrolldetect yt-uix-sessionlink\" type=\"button\" onclick=\";return false;\" aria-label=\"Load more\" data-sessionlink=\"itct=CAUQui8iEwi9isDUrffoAhValMQKHQPQDzY\" data-scrolldetect-callback=\"load-more-auto\" data-uix-load-more-target-id=\"section-list-181245\" data-uix-load-more-href=\"\/loadAjaxHomeVideos?next=${continuation}\" data-sessionlink-target=\"\/loadAjaxHomeVideos?next=${continuation}\" data-scrolldetect-offset=\"600\" > <span class=\"yt-uix-button-content\"> <span class=\"load-more-loading hid\"> <span class=\"yt-spinner\"> <span title=\"Loading icon\" class=\"yt-spinner-img yt-sprite\"><\/span> Loading... <\/span> <\/span> <span class=\"load-more-text\"> Load more <\/span> <\/span> <\/button> <\/div><div id=\"feed-error\" class=\"individual-feed hid\"> <p class=\"feed-message\"> We were unable to complete the request, please try again later. <\/p><\/div><div id=\"feed-loading-template\" class=\"hid\"> <div class=\"feed-message\"> <p class=\"yt-spinner\"> <span title=\"Loading icon\" class=\"yt-spinner-img yt-sprite\"><\/span> <span class=\"yt-spinner-message\"> Loading... <\/span> <\/p><\/div><\/div><\/div><\/div><\/div><\/div><\/div><\/div><\/div>`);
}

function generateAjaxJson(videos, continuation) {
	var sliders = '';
	for (var i = 0; i < videos.length; i++)
		sliders += generateSlider(videos[i].name, videos[i].tracking, videos[i].list);
	var loadButton = continuation === null ? "    \n" : `<button class=\"yt-uix-button yt-uix-button-size-default yt-uix-button-default load-more-button yt-uix-load-more browse-items-load-more-button yt-uix-sessionlink\" type=\"button\" onclick=\";return false;\" aria-label=\"Load more\" data-uix-load-more-href=\"\/loadAjaxHomeVideos?next=${continuation}\" data-sessionlink-target=\"\/loadAjaxHomeVideos?next=${continuation}\" data-scrolldetect-offset=\"600\" data-uix-load-more-target-id=\"section-list-181245\"><span class=\"yt-uix-button-content\"> <span class=\"load-more-loading hid\"> <span class=\"yt-spinner\"> <span title=\"Loading icon\" class=\"yt-spinner-img yt-sprite\"><\/span>Loading... <\/span> <\/span> <span class=\"load-more-text\"> Load more <\/span><\/span><\/button>`;
	return {
		"tracking_params": "",
		"content_html": sliders,
		"load_more_widget_html": loadButton
	};
}

function fetchMoreVideo(continuation) {
	return new Promise(function (resolve, reject) { chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		if (tabs[0] !== undefined)
			chrome.tabs.sendMessage(tabs[0].id, {type: 'xhrRequest', requestType: 'POST', url: 'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyDCU8hByM-4DrUqRUYnGn-3llEO78bcxq8', postData: `{\"context\":{\"client\":{\"clientName\":\"TVHTML5\",\"clientVersion\":\"6.20180913\",\"screenWidthPoints\":1745,\"screenHeightPoints\":852,\"screenPixelDensity\":1,\"theme\":\"CLASSIC\",\"utcOffsetMinutes\":120,\"webpSupport\":true,\"animatedWebpSupport\":true,\"tvAppInfo\":{\"appQuality\":\"TV_APP_QUALITY_LIMITED_ANIMATION\"},\"acceptRegion\":\"US\",\"osName\":\"Tizen\",\"osVersion\":\"5.0\",\"browserName\":\"Safari\",\"browserVersion\":\"5.0\",\"acceptLanguage\":\"en\"},\"request\":{\"consistencyTokenJars\":[]},\"user\":{\"enableSafetyMode\":false}},\"browseId\":\"FEtopics\",\"continuation\":\"${continuation}\"}`}, resolve);
	})});
}

async function processVideoJson(json) {
	var tvData = json.contents;
	var videos = [];
	for (var i = 0; i < tvData.length; i++) {
		var renderer = tvData[i].shelfRenderer;
		if (renderer === undefined) continue;
		var listRenderer = renderer.content.horizontalListRenderer;
		if (listRenderer === undefined) continue;
		var continuation = listRenderer.continuations === undefined ? null : listRenderer.continuations[0].nextContinuationData.continuation;
		if (listRenderer.continuations !== undefined) {
			var videoList = processVideoList(listRenderer.items);
			for (var j = 0; j < 2; j++) {
				var moreVideos = await fetchMoreVideo(continuation);
				var videosJson = JSON.parse(moreVideos);
				videoList = videoList.concat(processVideoList(videosJson.continuationContents.horizontalListContinuation.items));
				if (videosJson.continuationContents.horizontalListContinuation.continuations !== undefined)
					continuation = videosJson.continuationContents.horizontalListContinuation.continuations[0].nextContinuationData.continuation;
				else break;
			}
			videos.push({name: renderer.title.runs[0].text, tracking: renderer.content.horizontalListRenderer.trackingParams, list: videoList});	
		} else
			videos.push({name: renderer.title.runs[0].text, tracking: renderer.content.horizontalListRenderer.trackingParams, list: processVideoList(listRenderer.items, continuation)});	
    }
	return videos;
}

async function processHomePage(data) {
	var json = JSON.parse(data).contents.tvBrowseRenderer.content.tvSecondaryNavRenderer.sections[0].tvSecondaryNavSectionRenderer.tabs[0].tabRenderer.content.tvSurfaceContentRenderer.content.sectionListRenderer;
	var videos = await processVideoJson(json);
	return generateHomePage(videos, json.continuations[0].nextContinuationData.continuation);
}

async function processAjaxVideo(data) {
	var json = JSON.parse(data).continuationContents.sectionListContinuation;
	var videos = await processVideoJson(json);
	return JSON.stringify(generateAjaxJson(videos, json.continuations !== undefined ? json.continuations[0].nextContinuationData.continuation : null));
}