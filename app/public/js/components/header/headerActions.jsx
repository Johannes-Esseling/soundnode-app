import React, { Component } from 'react';

class BackForwardActions extends Component {

    toggleMenu () {
        guiConfig.maximize(); // TODO Change to more toggleMenu call
    }

    render () {
       return (
           <ul className="windowAction windowAction--left">
               <li className="windowAction_item navigationButton toggleMenu" onClick={this.toggleMenu}>
                   <i className="fa fa-bars"></i>
               </li>
               <li className="windowAction_item navigationButton goBack" data-ng-click="goBack()">
                   <i className="fa fa-chevron-left"></i>
               </li>
               <li className="windowAction_item navigationButton goForward" data-ng-click="goForward()">
                   <i className="fa fa-chevron-right"></i>
               </li>
           </ul>
       )
   }
}


class HeaderActions extends Component {
    render () {
        return (
            <div>
                <BackForwardActions />
            </div>
        )
    }
}

export default HeaderActions;