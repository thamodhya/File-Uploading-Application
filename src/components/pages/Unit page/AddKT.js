import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
const AddKT = () => {
  const [ktName, setKtName] = useState('');
  const [ktIntro, setKtIntro] = useState('');

  const onChangeKtName = (e) => {
    setKtName(e.target.value);
  };

  const onChangeKtIntro = (e) => {
    setKtIntro(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    swal({
      icon: "success",
      text: "Successfully created",
    });
    console.log(`Form submitted:`);
    console.log(`KT Name: ${ktName}`);
    console.log(`KT Introduction: ${ktIntro}`);

    const newKT = {
      kt_name: ktName,
      kt_intro: ktIntro,
    };

    axios.post('http://localhost:4000/kts/add', newKT).then((res) => console.log(res.data));

    setKtName('');
    setKtIntro('');
  };

  return (
    <div style={{ marginTop: 20 }}>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>KT </label>
          <input type="text" className="form-control" value={ktName} required onChange={onChangeKtName} />
          <br></br>
          <label>Introduction </label>
          <input type="text" className="form-control" value={ktIntro} onChange={onChangeKtIntro} />
          <br></br>
          <input type="file" class="form-control" aria-label="file example" required />
          <br></br>
          <input type="submit" value="Save KT Session" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default AddKT;
