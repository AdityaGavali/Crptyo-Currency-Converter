import React, { useEffect, useState } from 'react'
import {Button, Card , Form , Input, Select} from 'antd';


function Converting() {
    const url = 'https://api.coingecko.com/api/v3/exchange_rates';

    const [list , setlist] = useState([]);
    const defaultFirstSelect = 'Bitcoin';    
    const defaultSecondSelect = 'Ether';    

    const [inputValue , setinputValue] = useState("0");
    const [firstSelect , setfirstSelect] = useState(defaultFirstSelect);
    const [SecondSelect , setSecondSelect] = useState(defaultSecondSelect);
    const [ans , setans] = useState("0");
    useEffect(()=>{
fecthD();
    },[])
    useEffect(()=>{
        if(list.length == 0)return ;
      const firstObjRate = list.find((item)=>{
        return item.value == firstSelect
      }).rate;
      const SecondObjRate = list.find((item)=>{
        return item.value == SecondSelect
      }).rate;

      const answer = (inputValue*SecondObjRate)/(firstObjRate);
      setans(answer.toFixed(5));
    },[inputValue,firstSelect,SecondSelect])
    async function fecthD(){
   const response = await fetch(url);
   const JsonData = await response.json();
   const data = JsonData.rates;
   const tempArray = [];
   Object.entries(data).forEach(item =>{
    const tempObj = {
        value : item[1].name , 
        label : item[1].name , 
        rate : item[1].value,

    }
    tempArray.push(tempObj);
   })
   setlist(tempArray);
    }
  return (
    <div className='container'>
        <Card className='cry_card' title={<h1>Crypto Converter </h1>}>
      <Form> 
      <Form.Item>
      <Input placeholder='Enter the value' onChange={(e)=>{
    setinputValue(e.target.value)
      }}/>
      </Form.Item>
      </Form>
      <div className='select'>
      <Select style={{width : '150px'}}defaultValue = {defaultFirstSelect} options={list} onChange ={(e)=>{
        setfirstSelect(e);
      }}/>
      <Select style={{width : '150px'}} defaultValue = {defaultSecondSelect} options={list} onChange ={(e)=>{
        setSecondSelect(e)}}/>
      </div>
      <h4>{inputValue} {firstSelect} = {ans} {SecondSelect}</h4>
        </Card>
    </div>
  )
}

export default Converting