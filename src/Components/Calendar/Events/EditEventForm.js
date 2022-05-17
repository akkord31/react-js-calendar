import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './EditEventForm.css';

const url = "http://localhost:3001/edit"

export default function EditEventForm(props){
  const [date, setDate] = useState(new Date());
    const [title, setName] = useState('');
    const [content, setDescription] = useState('');

    useEffect(() => { //при загрузке формы если пустой объект
      console.log(props.choosenEvent.date);
      setDate(props.choosenEvent.date);
      setName(props.choosenEvent.title);
      setDescription(props.choosenEvent.content);
    },[])



    const dateChangeHadler = (e) => {
        setDate(e.target.value);
    }
    const titleChangeHandler = (e) => {
        setName(e.target.value);
    }
    const descriptionChanged = (e) => {
        setDescription(e.target.value);
    }
   
    let navigate = useNavigate();
    const submitFrom = (event) => {
      let id = props.choosenEvent.id;
        event.preventDefault();
        try{
            (async () => {
                const response = await axios.post(url,{id, date, title,  }).then( await function (response) {
         
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
    
        <input type="datetime-local" value={date} className="add__form__time" onChange={e => dateChangeHadler(e)}/>
        <a2>Введите название</a2>
        <input type="text" value={title} className="add__form__input" onChange={e => titleChangeHandler(e)}></input>
        <a2>Подробнее</a2>
        <input type="text" value={content} onChange={e => descriptionChanged(e)}></input>
        <button bype="submit"  className="add__button">Изменить</button>
      </form>
    </div>
  )
}
