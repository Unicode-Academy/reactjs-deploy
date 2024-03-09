import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.min.css';
import '../styles/dracula.css';
export default function mdToHtml(markdown, html = false) {
	const md = new MarkdownIt({
		html,
		xhtmlOut: true,
		linkify: true,
		typographer: true,
		quotes: '“”‘’',
		langPrefix: 'hljs ndng-code language-',
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(str, {
						language: lang,
					}).value;
				} catch (__) {}
			} else {
				try {
					return hljs.highlightAuto(str).value;
				} catch (__) {}
			}
			return ''; // use external default escaping
		},
	});
	const result = md?.render(markdown);
	return result;
}
