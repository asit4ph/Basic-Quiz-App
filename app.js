const questions = [
  {
    'que': 'Find the mean of 12, 15, 18, 21, 24',
    'a': '17',
    'b': '18',
    'c': '19',
    'd': '20',
    'correct': 'b'
  },
  {
    'que': 'Find the median of 7, 3, 9, 5, 11',
    'a': '5',
    'b': '7',
    'c': '9',
    'd': '6',
    'correct': 'b'
  },
  {
    'que': 'Find the mode of 2, 4, 4, 5, 6, 4, 7',
    'a': '2',
    'b': '4',
    'c': '5',
    'd': '6',
    'correct': 'b'
  },
  {
    'que': 'What is 25% of 480?',
    'a': '100',
    'b': '110',
    'c': '120',
    'd': '130',
    'correct': 'c'
  },
  {
    'que': 'If ratio of boys to girls is 3:2 and total students are 50, how many girls are there?',
    'a': '20',
    'b': '25',
    'c': '30',
    'd': '15',
    'correct': 'a'
  },
  {
    'que': 'Find the mean of first 10 natural numbers',
    'a': '5',
    'b': '5.5',
    'c': '6',
    'd': '4.5',
    'correct': 'b'
  },
  {
    'que': 'If a number increases from 80 to 100, what is the percentage increase?',
    'a': '20%',
    'b': '22%',
    'c': '25%',
    'd': '18%',
    'correct': 'c'
  },
  {
    'que': 'Find the median of 10, 20, 30, 40, 50, 60',
    'a': '30',
    'b': '35',
    'c': '40',
    'd': '45',
    'correct': 'b'
  },
  {
    'que': 'Divide 540 in the ratio 2:3:4',
    'a': '120, 180, 240',
    'b': '100, 200, 240',
    'c': '110, 190, 240',
    'd': '90, 180, 270',
    'correct': 'a'
  },
  {
    'que': 'Find the mode of 5, 7, 8, 9, 10',
    'a': '5',
    'b': 'No mode',
    'c': '7',
    'd': '10',
    'correct': 'b'
  }
]

let index = 0;
let total = questions.length
let right = 0;
let wrong = 0

const ques = document.querySelector("#ques");
const optionInput = document.querySelectorAll('.options')
const loadQustion = ()=>{
    if(index==total){
        return endQuiz()
    }
    else{
        reset();
    const data = questions[index]

    ques.innerText = `${index+1}) ${data.que}`

    optionInput[0].nextElementSibling.innerText = data.a
    optionInput[1].nextElementSibling.innerText = data.b
    optionInput[2].nextElementSibling.innerText = data.c
    optionInput[3].nextElementSibling.innerText = data.d
}
}

const submitQuiz = ()=>{
    const data = questions[index]
    const ans = getAnswer()
    if(ans== data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQustion()
    return;
}

const getAnswer = ()=>{
    let answer
    optionInput.forEach((input)=>{
        if(input.checked){
            answer= input.value;
        }
    })
    return answer
}

const reset = ()=>{
    optionInput.forEach((input)=>{
       input.checked=false
    })
}

const endQuiz = ()=>{
     const ends = document.querySelector('#box')
     ends.innerHTML = `
    <h3>Thank You For Playing the Quiz</h3>
    <h2>${right} out of ${total} are correct ✅</h2>`

    ends.style.textAlign = 'center'
    ends.style.display = 'flex'
    ends.style.flexDirection = 'column'
    ends.style.gap = '20px'
}
loadQustion()