import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import {Project1,Project2, Project3, Project4 , } from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  const location = useLocation();  //Ca nous permet de determiner la page dans laquelle nous somme.
  const history = useHistory();

  useEffect(() => {
    const handleScrollToElement=(e)=>{
      const url = window.location.origin+'/'; //Elle donne l'url de la page principal( acceuil dans notre cas)
      
      const wheelRouter = (after,before) => {
        if (e.wheelDeltaY<0){
            history.push(after)
        } else if (e.wheelDeltaY>0){
          history.push(before);
        }
      }
      switch (window.location.href.toString()) {
        case url:
          if(e.wheelDeltaY<0){
            history.push('project-1')
          }          
          break;

        case url+'project-1':
          wheelRouter('project-2','')
          break;

        case url+'project-2':
          wheelRouter('project-3','project-1')
          break;

          case url+'project-3':
          wheelRouter('project-4','project-2')
          break;

          case url+'project-4':
          wheelRouter('contact','project-3')
          break;
          case url+'contact':
          wheelRouter('contact','project-4')
          break;
                    
          default:
          }
        };

    window.addEventListener('wheel',handleScrollToElement);
    
  }, [history])  

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/project-1' component={Project1} />
      <Route exact path='/project-2' component={Project2} />
      <Route exact path='/project-3' component={Project3} />
      <Route exact path='/project-4' component={Project4} />
      <Route exact path='/contact' component={Contact} />
      <Redirect to='/' />
    </Switch>
  )
}

export default App