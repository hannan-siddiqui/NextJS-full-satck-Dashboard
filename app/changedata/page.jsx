"use client";
import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
const CreateDashboardEntry = () => {
  const router = useRouter();
  const [A, setA] = useState('');
  const [B, setB] = useState('');
  const [C, setC] = useState('');
  const [D, setD] = useState('');
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const parsedA = parseInt(A, 10);
    const parsedB = parseInt(B, 10);
    const parsedC = parseInt(C, 10);
    const parsedD = parseInt(D, 10);

    if (isNaN(parsedA) || isNaN(parsedB) || isNaN(parsedC) || isNaN(parsedD)) {
      setError('All fields must be valid integers');
      return;
    }
  
    try {
      const response = await fetch('/api/createDashboardEntry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ A: parsedA, B: parsedB, C: parsedC, D: parsedD }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
  
      const result = await response.json();
      setSuccess('Data inserted successfully!');
      setA('');
      setB('');
      setC('');
      setD('');
      router.push("/dashboard");
      
    } catch (err) {
      console.log('Error:', err);
      setError('Failed to submit data');
    }
  };
  

  return (
    <StyledWrapper>
      <div className="container mt-[10%] ">
        
        <form onSubmit={handleSubmit} className="form  flex flex-col space-y-4">
          <div>
            
            <input
              type="text"
              value={A}
               placeholder="enter A"
              onChange={(e) => setA(e.target.value)}
              className="input"
              required
            />
          </div>
          <div>
            
            <input
              type="text"
               placeholder="enter B"
              value={B}
              onChange={(e) => setB(e.target.value)}
              className="input"
              required
            />
          </div>
          <div>
            
            <input
              type="text"
              placeholder="enter C"
              value={C}
              onChange={(e) => setC(e.target.value)}
              className="input"
              required
            />
          </div>
          <div>
           
            <input
              type="text"
               placeholder="enter D"
              value={D}
              onChange={(e) => setD(e.target.value)}
              className="input"
              required
            />
          </div>
          <button type="submit" className="btn">Submit</button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </form>
      </div>
    </StyledWrapper>
  );
};

export default CreateDashboardEntry;

const StyledWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: all 1s ease;
    position: relative;
  }

  .form_front, .form_back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    backface-visibility: hidden;
    padding: 65px 45px;
    border-radius: 15px;
    box-shadow: inset 2px 2px 10px rgba(0,0,0,1),
      inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .form_front {
    background: #222;
  }

  .form_back {
    transform: rotateY(180deg);
    background: #333;
  }

  .rotate {
    transform: rotateY(180deg);
  }

  .form_details {
    font-size: 25px;
    font-weight: 600;
    color: white;
  }

  .input {
    width: 245px;
    min-height: 45px;
    color: #fff;
    transition: 0.35s;
    outline: none;
    padding: 0 7px;
    background-color: #212121;
    border-radius: 6px;
    border: 2px solid #212121;
    box-shadow: 6px 6px 10px rgba(0,0,0,1),
      1px 1px 10px rgba(255, 255, 255, 0.6);
  }

 .input::placeholder {
  color: #999;
}

.input:focus.input::placeholder {
  transition: 0.3s;
  opacity: 0;
}

.input:focus {
  transform: scale(1.05);
  box-shadow: 6px 6px 10px rgba(0,0,0,1),
  1px 1px 10px rgba(255, 255, 255, 0.6),
  inset 2px 2px 10px rgba(0,0,0,1),
  inset -1px -1px 5px rgba(255, 255, 255, 0.6);
}

.input:focus.input::placeholder {
  transition: 0.3s;
  opacity: 0;
}
  .btn {
    padding: 10px 35px;
    cursor: pointer;
    background-color: #212121;
    border-radius: 6px;
    border: 2px solid #212121;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    transition: 0.35s;
  }

  .btn:hover {
  transform: scale(1.05);
  box-shadow: 6px 6px 10px rgba(0,0,0,1),
  1px 1px 10px rgba(255, 255, 255, 0.6),
  inset 2px 2px 10px rgba(0,0,0,1),
  inset -1px -1px 5px rgba(255, 255, 255, 0.6);
}

.btn:focus {
  transform: scale(1.05);
  box-shadow: 6px 6px 10px rgba(0,0,0,1),
  1px 1px 10px rgba(255, 255, 255, 0.6),
  inset 2px 2px 10px rgba(0,0,0,1),
  inset -1px -1px 5px rgba(255, 255, 255, 0.6);
}


  .switch {
    font-size: 13px;
    color: white;
  }

  .signup_tog {
    font-weight: 700;
    margin-left:10px;
    color: white;
    cursor: pointer;
    text-decoration: underline;
    color: #3498db;
  }
`;
