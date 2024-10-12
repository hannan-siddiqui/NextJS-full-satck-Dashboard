"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import styled from "styled-components";
import { supabase } from '@/supabaseClient';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSignup, setIsSignup] = useState(false);
 
  const router = useRouter();
  const supabaseClient = createClientComponentClient();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession();

      if (session) {
        router.push("/dashboard"); // Redirect if already logged in
      }
    };

    checkSession();
  }, [router, supabaseClient]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
    
    if (error) {
      setError(error.message);
    } else {
      const { data: user } = await supabaseClient.auth.getUser();
      console.log("User data:", user.user_metadata);
      router.push('/dashboard');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { error } = await supabaseClient.auth.signUp({ email, password });
    
    if (error) {
      setError(error.message);
    } else {
      setError(null);
      router.push('/dashboard');
    }
  };

  return (
    <StyledWrapper>
      <div className="container mt-[20%] ">
        <form onSubmit={isSignup ? handleSignup : handleLogin} className={`form ${isSignup ? 'rotate' : ''}`}>
          <div className={`form_front ${isSignup ? 'hide' : ''}`}>
            <div className="form_details">Login</div>
            <input
              placeholder="Email"
              className="input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn">Login</button>
            <span className="switch">
              Don&apos;t have an account?
              <label className="signup_tog" onClick={() => {
                setIsSignup(true);
                setEmail('');
                setPassword('');
              }}>
                Sign Up
              </label>
            </span>
          </div>
          <div className={`form_back ${isSignup ? '' : 'hide'}`}>
            <div className="form_details">Sign Up</div>
            <input
              placeholder="Email"
              className="input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn">Signup</button>
            <span className="switch ">
              Already have an account?
              <label className="signup_tog" onClick={() => {
                setIsSignup(false);
                setEmail('');
                setPassword('');
              }}>
                Sign In
              </label>
            </span>
          </div>
        </form>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </StyledWrapper>
  );
}

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
