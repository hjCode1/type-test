enum Shoes {
    Nike = 'aa',
    Adidas = 'bb'
}

var myShoes = Shoes.Nike;

enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답')
    }

    if (answer === Answer.No) {
        console.log('오답');
    }
}