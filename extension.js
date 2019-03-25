const vscode = require('vscode');

function toCenter() {
	let currentLineNumber = vscode.window.activeTextEditor.selection.start.line;
	vscode.commands.executeCommand("revealLine", {lineNumber: currentLineNumber, at: "center"});
}
function toTop() {
	let currentLineNumber = vscode.window.activeTextEditor.selection.start.line;
	vscode.commands.executeCommand("revealLine", {lineNumber: currentLineNumber, at: "top"});
}
function toBottom() {
	let currentLineNumber = vscode.window.activeTextEditor.selection.start.line;
	vscode.commands.executeCommand("revealLine", {lineNumber: currentLineNumber, at: "bottom"});
}

function activate(context) {
	let disposable = vscode.commands.registerCommand('placewindow.top', () => {toTop();});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('placewindow.center', () => {toCenter();});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('placewindow.down', () => {toBottom();});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}