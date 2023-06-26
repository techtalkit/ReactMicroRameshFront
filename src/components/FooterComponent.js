import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
  render() {
    return (
      <div>
        <footer className='footer'>
            <span className='text-muted'>All rights reserved @2023 TechTalkIt</span>
        </footer>
      </div>
    )
  }
}
