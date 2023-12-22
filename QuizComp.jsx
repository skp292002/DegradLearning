import React from 'react'
import { useState } from 'react';
import './quizstyle.css'


const QuizComp = () => {
    var Questionbank = [
        {
            Question: "Various INPUT types are",
            Answers: [
                { Answer: "CHECKBOX, RADIO", isCorrect: false },
                { Answer: "CHECKBOX, HIDDEN", isCorrect: false },
                { Answer: "CHECKBOX, RADIO, HIDDEN", isCorrect: true },
                { Answer: " None of the above", isCorrect: false }
            ]
        },
        {
            Question: "Which of the following is true?",
            Answers: [
                { Answer: " BR tag is used to have a blank line", isCorrect: true },
                { Answer: "In tables, header cells are centered by default and the data cells are right-aligned", isCorrect: false },
                { Answer: "The <TR> is used to create a data cell", isCorrect: false },
                { Answer: " INPUT tag must have at least 4 attributes", isCorrect: false }
            ]
        }, {
            Question: "The tag to give visual division between sections of the page and which causes the browser to draw an embossed line is",
            Answers: [
                { Answer: "<HL>", isCorrect: false },
                { Answer: "<HR>", isCorrect: true },
                { Answer: "<UR>", isCorrect: false },
                { Answer: "None of the above", isCorrect: false }
            ]
        },
        {
            Question: "FTP applications are",
            Answers: [
                { Answer: "Used to download and upload files", isCorrect: true },
                { Answer: " Internet browsers", isCorrect: false },
                { Answer: "Used to send E-mails", isCorrect: false },
                { Answer: "Used to chat with other people", isCorrect: false }
            ]
        },
        {
            Question: "What is APK in android?",
            Answers: [
                { Answer: "Android packages", isCorrect: false },
                { Answer: "Android Pck", isCorrect: false },
                { Answer: "Android packaging kit", isCorrect: true },
                { Answer: "None of the above.", isCorrect: false }
            ]
        },
        {
            Question: "What is android view group?",
            Answers: [
                { Answer: "Collection of views and other child views", isCorrect: true },
                { Answer: "Base class of building blocks", isCorrect: false },
                { Answer: "Layouts", isCorrect: false },
                { Answer: "None of the Above", isCorrect: false }
            ]
        },
        {
            Question: "What is the difference between services and thread in android?",
            Answers: [
                { Answer: "Services performs functionalities in the background. By default services run on main thread only", isCorrect: true },
                { Answer: "Thread and services are having same functionalities.", isCorrect: false },
                { Answer: "Thread works on services", isCorrect: false },
                { Answer: "Thread works on services", isCorrect: false }
            ]
        },
        {
            Question: "What is a Sankey diagram used for in UX?",
            Answers: [
                { Answer: "Visualizing pathways that users take on a website", isCorrect: true },
                { Answer: "Prioritizing features to address in the next design iteration", isCorrect: false },
                { Answer: "Understanding the demographics of a target user population", isCorrect: false },
                { Answer: "Organizing related facts or ideas into distinct clusters", isCorrect: false }
            ]
        },
        {
            Question: "Which of the following are examples of UI?",
            Answers: [
                { Answer: "Key (for opening door)", isCorrect: false },
                { Answer: "TV Remote", isCorrect: false },
                { Answer: "Button (in an app)", isCorrect: false },
                { Answer: "All of the Above", isCorrect: true }
            ]
        },
        {
            Question: "Which is right sequence of Design Thinking?",
            Answers: [
                { Answer: "Research -> Analysis -> Define -> Design -> Test", isCorrect: false },
                { Answer: "Define -> Research -> Analysis -> Design -> Test", isCorrect: true },
                { Answer: "Define -> Research -> Design -> Test  -> Analysis", isCorrect: false },
                { Answer: "Design -> Test  -> Analysis -> Define -> Research ->", isCorrect: false }
            ]
        },
        {
            Question: "What is true about Machine Learning? ",
            Answers: [
                { Answer: "Machine Learning (ML) is that field of computer science", isCorrect: false },
                { Answer: "ML is a type of artificial intelligence that extract patterns out of raw data by using an algorithm or method", isCorrect: false },
                { Answer: "The main focus of ML is to allow computer systems learn from experience without being explicitly programmed or human intervention.", isCorrect: true },
                { Answer: " All of the above", isCorrect: false }
            ]
        },
        {
            Question: "ML is a field of AI consisting of learning algorithms that?",
            Answers: [
                { Answer: "Improve their performance", isCorrect: false },
                { Answer: "At executing some task", isCorrect: false },
                { Answer: "Over time with experience", isCorrect: false },
                { Answer: " All of the above", isCorrect: true }
            ]
        },
        {
            Question: " What is the main goal of ethical hacking?",
            Answers: [
                { Answer: "To cause damage to a system", isCorrect: false },
                { Answer: "To gain unauthorized access to a system", isCorrect: false },
                { Answer: "To identify and fix security vulnerabilities", isCorrect: true },
                { Answer: "To steal sensitive information", isCorrect: false }
            ]
        },
        {
            Question: "What is a vulnerability assessment?",
            Answers: [
                { Answer: " A process to identify vulnerabilities in a system or network", isCorrect: true },
                { Answer: "A process to exploit vulnerabilities in a system or network", isCorrect: false },
                { Answer: "A process to fix vulnerabilities in a system or network", isCorrect: false },
                { Answer: "A process to steal sensitive information from a system or network", isCorrect: false }
            ]
        },
        {
            Question: "What is the primary difference between a data scientist and a data engineer?",
            Answers: [
                { Answer: "A data engineer collects and prepares data, and a data scientist then analyzes it.", isCorrect: false },
                { Answer: "A data engineer analyzes data after a data scientist collects and prepares it.", isCorrect: false },
                { Answer: "A data engineer builds data pipelines and helps prepare data, while a data scientist is responsible for data collection, preparation and analysis.", isCorrect: true },
                { Answer: "All of the Above", isCorrect: false }
            ]
        },
            
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button className='playagain' type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default QuizComp;