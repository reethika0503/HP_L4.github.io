const sequences = [['2', '3', '4', '5', '6', '7', '8', '7', '6', '5', '4', '3', '2', 'Enter'],
    ['1', '3', '4', '5', '6', '7', '8', '7', '6', '5', '4', '3', '1', 'Enter'],
    ['1', '2', '4', '5', '6', '7', '8', '7', '6', '5', '4', '2', '1', 'Enter'],
    ['1', '2', '3', '5', '6', '7', '8', '7', '6', '5', '3', '2', '1', 'Enter'],
    ['1', '2', '3', '4', '6', '7', '8', '7', '6', '4', '3', '2', '1', 'Enter'],
    ['1', '2', '3', '4', '5', '7', '8', '7', '5', '4', '3', '2', '1', 'Enter'],
    ['1', '2', '3', '4', '5', '6', '8', '6', '5', '4', '3', '2', '1', 'Enter'],
    ['1', '2', '3', '4', '5', '6', '7', '6', '5', '4', '3', '2', '1', 'Enter']
    ];

    let recordedSequence = [];
    let lastPressedKey = null;
    let currentPosition = 0;
    let currentSequence = null;
    let chosenSequenceIndex = null;

    function handleKeyDown(event) {
      const keyPressed = event.key;
      lastPressedKey = keyPressed;
    }

    function handleKeyUp(event) {
      const keyPressed = event.key;
      recordedSequence.push(keyPressed);
      updateRecordedKeys();
      checkSequence();
    }
    function checkSequence() {
      if (!currentSequence) {
        // Select a random sequence from the array
        chosenSequenceIndex = Math.floor(Math.random() * sequences.length);
        currentSequence = sequences[chosenSequenceIndex];
        updateChosenSequenceIndex();
        
      }

      if (recordedSequence[currentPosition] === currentSequence[currentPosition]) {
        currentPosition++;
        if (currentPosition === currentSequence.length) {
          const message = 'Congratulations! You entered the correct sequence!';
          showMessage(message);          
          recordedSequence = [];
          lastPressedKey = null;
          currentPosition = 0;
          currentSequence = null;
          chosenSequenceIndex = null;
        }
      } else {
        const message = 'Oops! The entered sequence is incorrect.';
        showMessage(message);
        recordedSequence = [];
        lastPressedKey = null;
        currentPosition = 0;
        currentSequence = null;
      }
    }
    function updateRecordedKeys() {
      const recordedKeysElement = document.getElementById('recordedKeys');
      recordedKeysElement.textContent = recordedSequence.join(' + ');
    }       
    function updateChosenSequenceIndex() {
      const chosenSequenceIndexElement = document.getElementById('chosenSequenceIndex');
      chosenSequenceIndexElement.textContent = chosenSequenceIndex !== null ? (chosenSequenceIndex + 1).toString() : '';
      showBox(chosenSequenceIndex);}
    function showMessage(message) {
      const messageElement = document.getElementById('message');
      messageElement.textContent = message;
    }
    function showBox(chosenSequenceIndex){
      const elements = document.getElementsByClassName('inner-box');
      const box = elements[chosenSequenceIndex];
      box.style.display = 'block';
    }
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    chosenSequenceIndex = Math.floor(Math.random() * sequences.length);
    currentSequence = sequences[chosenSequenceIndex];
    updateChosenSequenceIndex();