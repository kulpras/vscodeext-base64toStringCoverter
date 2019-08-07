// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
var atob = require('atob');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "b64tos" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.bts', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user

		// Get the active text editor
		let editor = vscode.window.activeTextEditor;

		if (editor) {
			let document = editor.document;
			let selection = editor.selection as vscode.Selection;

			let word = !selection.isEmpty ? document.getText(selection) : document.getText();
			if (word !== "") {
				editor.edit(editBuilder => {
					editBuilder.replace(selection, atob(word));
					vscode.window.showInformationMessage('Conversion success -> Base64 to string');
				});
			}
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
