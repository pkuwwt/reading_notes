
define(['axios.min'], function(axios) {

	function parse_file (file_path) {
		return axios.get(file_path)
			.then(resp => {
				return {
					filename: file_path,
					content: resp.data
				};
			});
	}

	function parse_files (file_paths) {
		return Promise.all(file_paths.map(parse_file));
	}

	function parse_json (json_file) {
		return axios.get(json_file)
			.then(resp => resp.data.files)
			.then(files => parse_files(files));
	}
	
	function url_origin(url) {
		var protocol = "http";
		var protocols = ['http','https'];
		for(var p of protocols) {
			var s = p + '://';
			if(url.startsWith(s)) {
				url = url.slice(s.length);
				protocol = p;
				break;
			}
		}
		url = url.split('/')[0];
		return protocol + '://' + url;
	}
	
	function is_same_origin(url) {
		return url_origin(url)===window.location.origin;
	}
	
	function get_resource(url) {
		if(is_same_origin(url)) 
			return get_resource_same_origin(url);
		else 
			return get_resource_different_origin(url);
	}
	
	function get_resource_same_origin(url) {
		return axios.get(url).then(resp => resp.data);
	}
	const promiseTimeout = function(ms, promise){

  // Create a promise that rejects in <ms> milliseconds
  let timeout = new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      clearTimeout(id);
      reject('Timed out in '+ ms + 'ms.')
    }, ms)
  })

  // Returns a race between our timeout and the passed in promise
  return Promise.race([
    promise,
    timeout
  ])
};
	function get_resource_different_origin(url) {
		var iframe = document.createElement('iframe');
		iframe.src = url_origin(url);
		return new Promise((resolve,reject) => {
			var handler = event => {
				window.removeEventListener("message", handler);
				// TODO: Get Data
				resolve(data);
			};
			var iframeHandler = function(event) {
				var data = get_data(event);
				var url = get_url(event);
				axios.post(url, data).then(resp => resp.data).then(d => {
					window.parent.postMessage();
				});
			};
			window.addEventListener("message", handler);
			iframe.addEventListener("message", iframeHandler);
			iframe.contentWindow.postMessage('xxx', iframe.src);
			
		});
		//TODO
	}

	return {parse_json};
});


