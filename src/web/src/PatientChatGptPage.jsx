import './App.css';
import React, {useState} from 'react';
// import {useParams} from "react-router-dom";

function PatientChatGptPage() {
    // const {id} = useParams();
    const [
        textInput,
        setTextInput,
    ] = useState("What is the age of this patient?");

    const [
        textResponse,
        setTextResponse,
    ] = useState('');

    const [
        apiData,
        setApiData
    ] = useState('');

    const handleInputChange = (event) => {
        setTextInput(event.target.value);
    };

    // noinspection JSCheckFunctionSignatures
    const callApi = async () => {
        try {
            const urlEncodedQuestion = encodeURIComponent(textInput);
            const patientId = `john-muir-health-e.k-4ea143ZrQGvdUvf-b2y.tdyiVMBWgblY4f6y2zis3`;
            const url = `/4_0_0/Patient/${patientId}/$everything?_question=${urlEncodedQuestion}`;
            setApiData({});
            setTextResponse('Running...');
            const response = await fetch(url,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                });
            const data = await response.json();
            console.log(data);
            setApiData(data);
            if (data.entry && data.entry.length > 0) {
                const patient = data.entry[0].resource;
                if (patient && patient.text && patient.text.div) {
                    console.log(patient.text.div);
                    setTextResponse(patient.text.div);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App">
            {/*<div>{id}</div>*/}
            <textarea value={textInput} onChange={handleInputChange} rows="4" cols="100"/>
            <br/>
            <button onClick={callApi}>Ask</button>
            <div>
                {textResponse ? (
                    <div dangerouslySetInnerHTML={{__html: textResponse}}/>
                ) : (
                    <p></p>
                )}
            </div>
            <hr/>
            <div>
                {apiData ? (
                    <div>
                        <h2>API Response:</h2>
                        <pre>{JSON.stringify(apiData, null, 2)}</pre>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default PatientChatGptPage;

