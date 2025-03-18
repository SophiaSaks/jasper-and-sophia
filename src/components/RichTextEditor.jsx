import './RichTextEditor.css'

function RichTextEditor() {
  return (
    <div className="RichTextEditor">
        <div className="RichTextMenu">
            <ul>
                <li>
                    <button >Left</button>
                </li>
                <li>
                    <button>Centered</button>
                </li>
                <li>
                    <button type="button" data-command="bold">Bold</button>
                </li>
                <li>
                    <button type="button" data-command="italic">Italic</button>
                </li>
            </ul>
        </div>

        <div id="RichTextOutput" contentEditable="true">
            Here you can write and edit your journal entry...
        </div>

        <div className="RichTextSave">
            <button>Save</button>
        </div>

    </div>
  );
}

export default RichTextEditor;