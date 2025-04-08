const messages = [
    "Bạn có chắc",
    "Thật sự vậy",
    "Bạn có suy nghĩ lại ko",
    "Suy nghĩ đi làm ơn",
    "Tôi nghĩ bạn ko nghĩ vậy đâu",
    "Bạn từ chối tôi buồn lắm đó",
    "Tôi rất buồn đó",
    "Tôi rất rất bùn đó",
    "Tôi nghĩ tôi lên dừng nói",
    "Đồng ý đi làm ơn đó"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 2.0}px`;
}

function handleYesClick() {
  
    document.getElementById("proposalPage").style.display = "none";
    document.getElementById("yesPage").style.display = "block";
}
