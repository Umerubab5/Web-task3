import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='main-heading'>TASK NO. 3</h1>
      <h2 className='problem'>1. What is DOM?</h2>
      <p className='solution'><span>Definition:</span> DOM stands for Document Object Model. It is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, text, etc.
 <span>Example:</span> In HTML, the DOM represents the structure of the document, where each HTML tag is a node in the tree.</p>


 <h2 className='problem'>2. What is an element in HTML?</h2>
      <p className='solution'>
      <span>Definition:</span> In HTML, an element is a building block of a webpage. It consists of a start tag, content, and an end tag. Elements can be nested inside each other.
<span>Example:</span> &lt;p&gt;This is a paragraph.&lt;/p&gt;
      </p>

      <h2 className='problem'>3. What is DOM manipulation?</h2>
      <p className='solution'>
      <span>Definition:</span> DOM manipulation refers to the process of changing or updating the structure, style, or content of a web page using programming languages like JavaScript.
<span>Example:</span> Changing the text content of an HTML element or dynamically adding new elements to a webpage.
      </p>

      <h2 className='problem'>4. What are different ways of manipulating DOM in Javascript?</h2>
      <p className='solution'>
      <span>Changing element content:</span> <br/> <b>innerHTML</b>, <br/> <b>innerText</b> <br/>
<span>Modifying attributes:</span><br/>
<b>setAttribute</b>, <br/> <b>removeAttribute</b><br/>
<span>Creating new elements:</span><br/>
<b>createElement</b>, <br/> <b>appendChild</b> <br/>
<span>Removing elements:</span><br/>
<b>removeChild</b><br/>
<span>Changing element style:</span><br/>
<b>style.property</b>
      </p>

      <h2 className='problem'>5. What are different ways of accessing DOM in Javascript? Please learn about all different selectors of accessing the DOM.</h2>
      <p className='solution'>
      <span>Different ways of accessing DOM in JavaScript (Selectors):</span>
      <br/>
<b>getElementById</b><br/>
<b>getElementsByClassName</b><br/>
<b>getElementsByTagName</b><br/>
<b>querySelector</b><br/>
<b>querySelectorAll</b><br/>
<b>getElementsByName</b> (specific to form elements)
      </p>
      <h2 className='problem'>6. How to change style of a DOM element using Javascript?</h2>
      <p className='solution'> Changing the style of a DOM element using JavaScript:

<span>Example:</span> <b>document.getElementById("myElement").style.color = "blue";</b></p>

<h2 className='problem'>7. What are Javascript DOM events?</h2>
<p className='solution'>
<b>JavaScript DOM events:</b>
<br/>

<span>Definition:</span> Events are interactions or occurrences that happen in the browser, such as a user clicking a button or resizing the window. JavaScript allows you to respond to these events.
<br/>
<span>Example:</span> <b>onclick</b>, <b>onmouseover</b>, <b>onchange</b>.
</p>
<h2 className='problem'>8. What are nodes in DOM?</h2>
<p className='solution'>
Nodes in DOM:

<span>Definition:</span> Nodes are individual objects in the DOM tree, representing elements, attributes, text, etc. There are several types of nodes, including element nodes, text nodes, comment nodes, etc.
<span>Example:</span> In the HTML &lt;p&gt;This is a paragraph.&lt;/p&gt; , the &lt;p&gt; tag is an element node, and the text "This is a paragraph." is a text node.
</p>
    </div>
  );
}

export default App;
