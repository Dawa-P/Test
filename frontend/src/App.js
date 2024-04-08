import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Reading 10%</p>    
        <table>
          <tr>
            <th>Criteria</th>
            <th contenteditable="true">4</th>
            <th contenteditable="true">3</th>
            <th contenteditable="true">2</th>
            <th contenteditable="true">1</th>
          </tr>
          <tr>
            <td contenteditable="true">Audibility </td>
            <td contenteditable="true"><input type ="text" value="Can be heard by all the audience"/> </td>
            <td>Can be heard by almost everybody </td>
            <td>Can be heard by more than half of the class </td>
            <td>Can be heard by only the front benches </td>
          </tr>
          <tr contenteditable="true">
            <td>Fluency </td>
            <td>Can read the entire text fluently  </td>
            <td>Can read almost the entire text fluently </td>
            <td>Can read more than half the text fluently  </td>
            <td>Can read but without fluency </td>
          </tr>
          <tr contenteditable="true">
            <td>Syntax </td>
            <td>Can use syntax clues very confidently </td>
            <td>Can use syntax clues confidently </td>
            <td>Can use syntax lesser confidently </td>
            <td>Can use syntax clues almost without confidence </td>
          </tr>
          <tr contenteditable="true">
            <td>Phonic cues </td>
            <td>Can use phonic cues very confidently </td>
            <td>Can use phonic cues confidently </td>
            <td>Can use phonic cues with lesser confidence  </td>
            <td>Can use phonic cues almost without confidence  </td>
          </tr>
          <tr contenteditable="true">
            <td>Pronunciation  </td>
            <td>Can pronounce all the words accurately  </td>
            <td>Can pronounce almost all the words accurately </td>
            <td>Can pronounce most of the words accurately </td>
            <td>Can pronounce some of the words accurately  </td>
          </tr>
          <tr contenteditable="true">
            <td >Punctuation  </td>
            <td>Be aware of all the punctuation marks (comma, full stop, question mark, quotation, exclamation) </td>
            <td>Be aware of almost all the punctuation marks (comma, full stop, question mark, quotation, exclamation) </td>
            <td>Be aware of most of the punctuation marks (comma, full stop, question mark, quotation, exclamation) </td>
            <td>Be aware of some of the punctuation marks (comma, full stop, question mark, quotation, exclamation) </td>
          </tr>
          <tr contenteditable="true">
            <td>Intonation </td>
            <td>Can read all the words with correct intonation </td>
            <td>Can read almost all the words with correct intonation  </td>
            <td>Can read most of the words with correct intonation  </td>
            <td>Can read some of the words with correct intonation</td>
          </tr>
          <tr contenteditable="true">
            <td>Eye contact  </td>
            <td>Maintains good eye contact </td>
            <td>Maintains fairly good eye contact </td>
            <td>Maintains satisfactory eye contact  </td>
            <td>Maintains unsatisfactory eye contact </td>
          </tr>
        </table>

      </header>
    </div>
  );
}

export default App;
