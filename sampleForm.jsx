import { useState } from 'react';

function sampleForm(){
    const [fileForm, setFileForm] = useState({});
 const generateFile = () =>{
    // api call
 }
 const signFile = () =>{
    // api call
 }

}

return (
<div>
    <label>Name
    <input type="textbox" name="name" value={fileForm.name} onChange={ e => setFileForm({...fileForm,name:e.target.value})}/>
    </label>
    <label>Serial No
    <input type="number" name="serialNo" value={fileForm.serialNo} onChange={ e => setFileForm({...fileForm,serialNo:e.target.value})}/>
    </label>
    <label>No of Ports
    <input type="number" name="ports" value={fileForm.ports} onChange={ e => setFileForm({...fileForm,ports:e.target.value})}/>
    </label>
    <label>Type
    <input type="dropdown" name="assetType" value={fileForm.ports} onChange={ e => setFileForm({...fileForm,type:e.target.value})}/>
    </label>
    <button class="primary" value="generateFile" onClick="generateFile()"/>
    <button class="primary" value="signFile" onClick="signFile()"/>
</div>
)
