
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

	return {parse_json};
});


