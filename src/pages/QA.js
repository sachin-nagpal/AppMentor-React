import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QAheader from '../components/QAheader';
import Answers from '../components/Answers';
import RelatedQues from '../components/RelatedQues';

const QA = (props) => {
  return (
    <div style={{backgroundColor:"#f5f5f5"}}>
          <div>
              <QAheader/>
          </div>
          <div className="container-fluid mt-5" style={{padding: "0px 200px"}}>
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex justify-content-around">
                  <Answers/>
                </div>
              </div>
              <div className="col-md-4">
                <RelatedQues/>
              </div>
            </div>
          </div>
    </div>
  );
}

export default QA;
