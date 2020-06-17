import React from 'react';
import Pdf from "../pdf/Adrian Calvache Resume.pdf";

export default class Download extends React.Component {
    render() {
        return (
          <div className = "Pdf">
           <a href = {Pdf} target = "../pdf/Adrian Calvache Resume.pdf">Download Pdf</a>
          </div>
        );
      }
    }
 