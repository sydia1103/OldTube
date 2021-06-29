function handler_headers(request)
{
	if (request.url.includes("spfreload="))
	{
		let i = request.requestHeaders.findIndex(e => e.name.toLowerCase() == "cookie");
		if (i != -1)
			request.requestHeaders[i].value = request.requestHeaders[i].value.replace(/VISITOR_INFO1_LIVE=[-\w]+;?/, "");
	}
	request.requestHeaders.push({name: "X-YouTube-Client-Name", value: "1"});
	let i = request.requestHeaders.findIndex(e => e.name == "X-YouTube-Client-Version");
	if (i != -1)
		request.requestHeaders[i].value = "1.20190806.01.01";
	else
		request.requestHeaders.push({name: "X-YouTube-Client-Version", value: "1.20190806.01.01"});
	return { requestHeaders: request.requestHeaders };
}

function handler_request(request)
{
	if (request.url.includes("/youtubei/v1/browse?"))
		return { cancel: true };
	
	let url = new URL(request.url);
	if (["/channel/", "/user/", "/c/"].some(x => url.pathname.startsWith(x)))
	{
		if (url.pathname.includes("/videos"))
			url.pathname = url.pathname.replace("/videos", "/Videos");
		else if (url.pathname.endsWith("/featured"))
			url.pathname = url.pathname.replace("/featured", "/Featured");
		else if (url.pathname.endsWith("/about"))
			url.pathname = url.pathname.replace("/about", "/About");
		else if (url.pathname.endsWith("/channels"))
			url.pathname = url.pathname.replace("/channels", "/Channels");
		else if (url.pathname.split("/").length - 1 == 2)
			url.pathname += "/Featured";
	}
	if (!url.href.includes("pbj=1") && !url.href.includes("/live_chat?") && !url.href.includes("/results?"))
		url.href += (url.href.includes("?") ? "&" : "?") + "pbj=1";
	if (url.href != request.url)
		return { redirectUrl: url.href };
}

function handler_received(request)
{
	let i = request.responseHeaders.findIndex(e => e.name.toLowerCase() == "content-disposition");
	if (i != -1 && request.responseHeaders[i].value.includes("json.txt"))
		return { redirectUrl: request.url + (request.url.includes("?") ? "&" : "?") + "spfreload=10" };
}

chrome.webRequest.onBeforeSendHeaders.addListener(handler_headers,
	{ urls: ["https://www.youtube.com/*"], types: ["main_frame", "xmlhttprequest"] },
	["blocking", "requestHeaders"]);

chrome.webRequest.onBeforeRequest.addListener(handler_request,
	{ urls: ["https://www.youtube.com/*"], types: ["main_frame", "xmlhttprequest", "other"] },
	["blocking"]);

chrome.webRequest.onHeadersReceived.addListener(handler_received,
	{ urls: ["https://www.youtube.com/*"], types: ["main_frame"] },
	["blocking", "responseHeaders"]);