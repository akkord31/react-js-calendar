import React, { useState, useEffect } from "react";
import axios from "axios";
import EventsStorage from "../../../store/EventsStorage";
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './AddEventForm.css';

const url = "http://localhost:3001/add"

export default function AddEventForm(props){
  const [date, setdate] = useState(new Date());
    const [title, setName] = useState('');
    const [content, setDescription] = useState('');

    // useEffect(() => {
    //    // name2();
    // },[])

    let navigate = useNavigate();
    // useEffect(() => {
    //     if(!props.isLogin){
    //         navigate("/login")
    //     }
    // },[props.isLogin])

    const dateChangeHadler = (e) => {
        setdate(e.target.value);
    }
    const titleChangeHandler = (e) => {
        setName(e.target.value);
    }
    const descriptionChanged = (e) => {
        setDescription(e.target.value);
    }

    // const name2 = () => {
    //     if(EventsStorage.currentId > 0){
    //         setName(EventsStorage.events[EventsStorage.currentId].title)
    //     }
    //     else{
    //         setName('');
    //     }
    // }

    const submitFrom = (event) => {
        event.preventDefault();
        const id = uuid();
        try{
            (async () => {
                const response = await axios.post(url,{id, date, title, content}).then( await function (response) {
         
                    navigate("/");
                  })
                  .catch(function (error) {
                    console.log("error");
                  })
            })();
        } catch (e){
            alert("Ошибка")
        }
    }

  return(
    <div>
      <form onSubmit={submitFrom} className="add__form">
        <a2>Введите время</a2>
    
        <input type="datetime-local" className="add__form__time" onChange={e => dateChangeHadler(e)}/>
        <a2>Введите название</a2>
        <input type="text" className="add__form__input" onChange={e => titleChangeHandler(e)}></input>
        <a2>Подробнее</a2>
        <input type="text" onChange={e => descriptionChanged(e)}></input>
        <button bype="submit" className="add__button">Добавить событие на этот день</button>
      </form>
    </div>
  )
}
