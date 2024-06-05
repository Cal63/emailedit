import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-email-editor';

  @ViewChild(EmailEditorComponent)
  private emailEditor: EmailEditorComponent;

  ngOnInit() {}

  editorLoaded() {
    console.log('hello');
    // this.emailEditor.editor.init({
    //   fonts: {
    //     showDefaultFonts: true,
    //     customFonts: [
    //       {
    //         label: 'Comic Sans',
    //         value: "'Comic Sans MS', cursive, sans-serif",
    //       },
    //       {
    //         label: 'Lobster Two',
    //         value: "'Lobster Two',cursive",
    //         url: 'https://fonts.googleapis.com/css?family=Lobster+Two:400,700',
    //       },
    //     ],
    //   },
    // });
    console.log('hello');
    this.emailEditor.editor.registerCallback('image', function (file, done) {
      // Handle file upload here
      console.log(file);
      console.log(done);
    });
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data) =>
      console.log('exportHtml', data)
    );
  }
}
