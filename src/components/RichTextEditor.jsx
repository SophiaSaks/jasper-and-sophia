import './RichTextEditor.css'
import alignLeft from '../assets/alignLeft.png'
import alignCenter from '../assets/alignCenter.png'
import formatBold from '../assets/formatBold.png'
import formatItalic from '../assets/formatItalic.png'
import formatUnderlined from '../assets/formatUnderlined.png'
import formatColorText from '../assets/formatColorText.png'
import save from '../assets/save.png'

function RichTextEditor() {
  return (
    <div className="RichTextEditor">
        <div className="RichTextMenu">
            <ul>
                <li>
                    <button><img className="buttonImg" src={alignLeft}/></button>
                </li>
                <li>
                    <button><img className="buttonImg" src={alignCenter}/></button>
                </li>
                <li>
                    <button type="button" data-command="bold"><img className="buttonImg" src={formatBold}/></button>
                </li>
                <li>
                    <button type="button" data-command="italic"><img className="buttonImg" src={formatItalic}/></button>
                </li>
                <li>
                    <button type="button" data-command="italic"><img className="buttonImg" src={formatUnderlined}/></button>
                </li>
                <li>
                    <button type="button" data-command="italic"><img className="buttonImg" src={formatColorText}/></button>
                </li>
            </ul>
        </div>

        <div id="RichTextOutput" contentEditable="true">
            Here you can write and edit your journal entry...
        </div>

        <div className="RichTextSave">
            <button><img className="buttonImg" src={save}/></button>
        </div>

    </div>
  );
}

export default RichTextEditor;