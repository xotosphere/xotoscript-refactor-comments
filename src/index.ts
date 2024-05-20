import replaceInFiles from "replace-in-files";
import { settings } from './settings';

/**
 * convert function that replaces old comment names with new ones
 * @comment
 */

async function convert() {
	const { paths } = await replaceInFiles({
		files: settings.projectFilesPathGlob, // specify the file paths where the comment will be replaced
		from: /\/\/.*|\/\*[\s\S]*?\*\/|< !--[\s\S ]*?- ->|#.*|--.*|\/\*[\s\S]*?\*\//g, // specify the regular expression pattern to match the old comment
		to: " ", // specify the new comment to replace the old one
		saveOldFile: false, // do not save the old files after replacement
		onlyFindPathsWithoutReplace: false // replace all matched files
	});
	console.log(paths)
}

convert();
