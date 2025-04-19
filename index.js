function revealMessage() {
  const hiddenMessage = document.getElementById('hidden-message');
  hiddenMessage.style.display = 'block';
  const decodedMessage = hiddenMessage.textContent.split('').reverse().join('');
  document.getElementById('decoded-message').textContent = decodedMessage;
}function classifyDocuments() {
  const classifiedDocuments = document.getElementsByClassName('classified-document');
  for (const document of classifiedDocuments) {
    const securityLevel = document.getAttribute('data-security');
    switch (securityLevel) {
      case 'high':
        document.style.backgroundColor = 'red';
        break;
      case 'medium':
        document.style.backgroundColor = 'yellow';
        break;
      case 'low':
        document.style.backgroundColor = 'green';
        break;
    }
    document.addEventListener('click', () => {
      document.classList.toggle('revealed');
    });
  }
}function identifySuspect() {
  const suspects = document.getElementsByTagName('suspect');
  const evidence = 'red-hat';
  for (const suspect of suspects) {
    const clue = suspect.getAttribute('data-clue');
    if (clue === evidence) {
      suspect.classList.add('prime-suspect');
      const identified = document.createElement('p');
      identified.textContent = 'IDENTIFIED';
      suspect.parentNode.appendChild(identified);
    }
  }
}function collectEvidence() {
  const evidenceLog = document.getElementById('evidence-log');
  const evidenceCount = document.getElementById('evidence-count');
  const evidenceElements = document.querySelectorAll('[data-evidence="true"]');
  for (const evidence of evidenceElements) {
    const evidenceItem = document.createElement('li');
    evidenceItem.textContent = evidence.textContent;
    evidenceLog.appendChild(evidenceItem);
    evidence.addEventListener('click', () => {
      evidence.classList.toggle('collected');
      const collectedEvidence = document.querySelectorAll('.collected');
      evidenceCount.textContent = collectedEvidence.length;
    });
  }
}function monitorRecords() {
  const recordsTable = document.getElementById('records');
  const auditLog = document.getElementById('audit-log');
  const recoverButton = document.getElementById('recover-last');
  recordsTable.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const record = event.target.parentNode.parentNode;
      recordsTable.removeChild(record);
      const auditEntry = document.createElement('li');
      auditEntry.textContent = `Deleted record: ${record.textContent}`;
      auditLog.appendChild(auditEntry);
    }
  });
  recoverButton.addEventListener('click', () => {
    const lastDeleted = auditLog.children[auditLog.children.length - 1];
    const recoveredRecord = document.createElement('tr');
    recoveredRecord.innerHTML = lastDeleted.textContent.replace('Deleted record: ', '');
    recordsTable.appendChild(recoveredRecord);
    auditLog.removeChild(lastDeleted);
  });
}function decryptMessage() {
  const codeContainer = document.getElementById('code-container');
  const draggableElements = codeContainer.children;
  const correctPattern = ['🔑', '🔒', '📜'];
  let currentPattern = [];
  for (const element of draggableElements) {
    element.addEventListener('dragstart', () => {
      currentPattern.push(element.textContent);
    });
    element.addEventListener('dragend', () => {
      if (currentPattern.join('') === correctPattern.join('')) {
        const decodedText = document.getElementById('decoded-text');
        decodedText.textContent = 'Congratulations, you decrypted the message!';
      }
    });
  }
}function bypassLock() {
  const lockPanel = document.getElementById('lock-panel');
  const lockButtons = lockPanel.children;
  const correctSequence = [0, 1, 2];
  let currentSequence = [];
  for (const button of lockButtons) {
    button.addEventListener('click', () => {
      currentSequence.push(lockButtons.indexOf(button));
      if (currentSequence.join('') === correctSequence.join('')) {
        lockPanel.innerHTML = '<p>Success!</p>';
      } else {
        currentSequence = [];
        lockPanel.innerHTML = '<button class="lock-button">🔲</button><button class="lock-button">🔲</button><button class="lock-button">🔲</button>';
      }
    });
  }
}