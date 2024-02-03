function formatText() {
    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');
    const updatedLines = [];

    lines.forEach(line => {
        if (line.trim() && !isNaN(line.trim())) {
            updatedLines.push(''); // 在只含数字的行前添加空行
        }
        updatedLines.push(line.trim());
    });

    document.getElementById('outputText').value = updatedLines.join('\n');
}

function modifyTextFormat() {
    const inputText = document.getElementById('inputText').value;
    const lines = inputText.split('\n');
    let formattedText = '';

    for (let i = 0; i < lines.length; i++) {
        const currentLine = lines[i].trim();
        const nextLine = lines[i + 1] ? lines[i + 1].trim() : null;

        if (nextLine && /[a-zA-Z]/.test(currentLine) && /[a-zA-Z]/.test(nextLine)) {
            formattedText += `${currentLine} ${nextLine}\n`;
            i++; // 跳过下一行，因为已经合并
        } else {
            formattedText += `${currentLine}\n`;
        }
    }

    document.getElementById('outputText').value = formattedText;
}
