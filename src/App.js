import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import GloomhavenAssistantPolicy from "./pages/GloomhavenAssistantPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gloomhaven-assistant-policy" component={GloomhavenAssistantPolicy} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
