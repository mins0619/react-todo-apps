import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';


const Todo = () => {
    
    const [works , setWorks] = useState([
        { id: 1 , text: 'react 공부하기'},
        { id: 2 , text: '사이드 프로젝트 만들기'}
    ]); // 배열 
    const [input , setInput] = useState(''); // 추가 양식
    const [nextId , setNextId] = useState('3'); // key 값
    
    const onChange = e => setInput(e.target.value) // input 따라가
    
    const onClick = () => {
        const nextWorks = works.concat({
            ...works,
            id: nextId,
            text: input
    });
        setNextId(nextId +1); // 현재 key 값에 1 추가
        setWorks(nextWorks); // setworks에 nextWorks 값을 집어넣음
        setInput(""); // 빈배열 유지 
    };


    const onRemove = id => { // 삭제 구현
        const nextWorks = works.filter(work => work.id !== id);
        setWorks(nextWorks);
    };

    const workList = works.map(work =>( // 삭제버튼
        <li key={work.id} >
            {work.text} <button onClick={() => onRemove(work.id)}>삭제</button>
        </li>
    ));
   
    return (
        <div>
            <h1>todolist</h1>
            <p>투두리스트</p>
            <input value={input} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>
                {workList}
            </ul>
            <Link to="/">돌아가기</Link>
        </div>
        
        );
};

export default Todo;