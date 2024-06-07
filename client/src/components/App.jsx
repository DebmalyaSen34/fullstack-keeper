import React from 'react';
import ResponsiveAppBar from './Header';
import SmallNote from './SmallNote';
import './App.css';
import anime from 'animejs';

export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <SmallNote lpos="20vw" rpos="0"/>
      <SmallNote lpos="40vw" rpos="0"/>
    </div>
  );
};